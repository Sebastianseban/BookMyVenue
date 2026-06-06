import { Prisma } from '../../generated/prisma/client.js';
import type { NextFunction, Request, Response } from 'express';

import logger from '../../config/logger.js';
import { ApiError } from '../errors/ApiError.js';

type RequestWithAuthContext = Request & {
  userId?: string;
  userRole?: string;
};

type PrismaKnownRequestError = {
  code: string;
  meta?: unknown;
};

const isPrismaKnownRequestError = (error: unknown): error is PrismaKnownRequestError =>
  error instanceof Prisma.PrismaClientKnownRequestError;

const isPrismaValidationError = (error: unknown): error is Prisma.PrismaClientValidationError =>
  error instanceof Prisma.PrismaClientValidationError;

export const errorHandler = (
  err: unknown,
  req: RequestWithAuthContext,
  res: Response,
  _next: NextFunction,
) => {
  const isDev = process.env.NODE_ENV === 'development';

  let statusCode = 500;
  let message = 'Internal Server Error';
  let stack: string | undefined;
  let errorContext: ApiError['context'] | undefined;

  /* ----------------------- ApiError (Custom) ---------------------- */

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errorContext = err.context;
  }

  /* ------------------------ Prisma Errors ------------------------ */

  else if (isPrismaKnownRequestError(err)) {
    if (err.code === 'P2002') {
      statusCode = 409;

      const fields =
        err.meta &&
        typeof err.meta === 'object' &&
        'driverAdapterError' in err.meta
          ? (
              err.meta.driverAdapterError as {
                cause?: {
                  constraint?: {
                    fields?: string[];
                  };
                };
              }
            )?.cause?.constraint?.fields ?? []
          : [];

      if (fields.includes('slug')) {
        message = 'Book slug already exists';
      } else if (fields.includes('sku')) {
        message = 'Book format SKU already exists';
      } else if (fields.includes('isbn')) {
        message = 'Book ISBN already exists';
      } else if (
        fields.includes('bookId') &&
        fields.includes('type')
      ) {
        message = 'Book format type already exists for this book';
      } else {
        message = 'Duplicate value';
      }
    } else if (err.code === 'P2025') {
      statusCode = 404;
      message = 'Resource not found';
    } else {
      statusCode = 400;
      message = 'Database error';
    }
  }

  else if (isPrismaValidationError(err)) {
    statusCode = 400;
    message = 'Invalid request data';
  }

  /* -------------------------- JWT Errors -------------------------- */

  else if (err instanceof Error && err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
  }

  else if (err instanceof Error && err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expired';
  }

  /* ----------------------- Generic Errors ------------------------ */

  else if (err instanceof Error) {
    if (statusCode < 500) {
      message = err.message;
    } else {
      message = 'Internal Server Error';
    }

    stack = err.stack;
  }

  /* ---------------------------- Logging --------------------------- */

  const logPayload = {
    err,
    statusCode,
    requestId: req.id,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userId: req.userId,
    userRole: req.userRole,
    userAgent: req.get('user-agent'),
    provider: errorContext?.provider,
    operation: errorContext?.operation,
    providerStatusCode: errorContext?.providerStatusCode,
    providerCode: errorContext?.providerCode,
    retryable: errorContext?.retryable,
  };

  if (statusCode >= 500) {
    logger.error(logPayload, 'Request failed');
  } else if (statusCode === 429) {
    logger.warn(logPayload, 'Request rate limited');
  } else if (statusCode >= 400) {
    logger.warn(logPayload, 'Request rejected');
  } else {
    logger.info(logPayload, 'Request handled');
  }

  /* ---------------------------- Response -------------------------- */

  const response: {
    success: boolean;
    message: string;
    errors?: Array<{ field: string; message: string }>;
    stack?: string;
  } = {
    success: false,
    message,
  };


  if (err instanceof ApiError && err.errors) {
    response.errors = err.errors;
  }


  if (isDev && stack) {
    response.stack = stack;
  }

  res.status(statusCode).json(response);
};
