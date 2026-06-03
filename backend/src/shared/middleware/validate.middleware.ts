import type { Request, Response, NextFunction } from 'express';
import { ZodError, type ZodSchema } from 'zod';

import { ApiError } from '../errors/ApiError.js';

type ValidationTarget = 'body' | 'query' | 'params' | 'headers';

export function validate(schema: ZodSchema, target: ValidationTarget = 'body') {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      // Create a clean plain object (important for query)
      const raw = structuredClone(req[target]) as unknown;

      const parsed = schema.parse(raw);

      // Safely assign parsed data back, overriding the Express 5 getter
      Object.defineProperty(req, target, {
        value: parsed,
        writable: true,
        enumerable: true,
        configurable: true,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => ({
          field: issue.path.join('.') || 'unknown',
          message: issue.message,
        }));

        return next(new ApiError(400, 'Validation failed', errors));
      }

      const message = error instanceof Error ? error.message : String(error);

      return next(new ApiError(400, `Invalid request data: ${message}`));
    }
  };
}
