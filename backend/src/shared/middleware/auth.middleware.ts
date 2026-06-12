import type { NextFunction, Request, Response } from 'express';

import logger from '../../config/logger.js';
import { tokenService } from '../../modules/auth/token.service.js';

import { ApiError } from '../errors/ApiError.js';
import { authRepository } from '../../modules/auth/auth.repository.js';

export const requireAuth = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('authorization');

    if (!authHeader?.startsWith('Bearer ')) {
      logger.warn(
        {
          path: req.originalUrl,
          method: req.method,
          ip: req.ip,
          reason: 'missing_bearer_token',
        },
        'Authentication failed',
      );

      throw new ApiError(401, 'Unauthorized');
    }

    const token = authHeader.slice('Bearer '.length).trim();

    if (!token) {
      throw new ApiError(401, 'Unauthorized');
    }

    const payload = tokenService.verifyAccessToken(token);
    const user = await authRepository.findUserById(payload.sub);

    if (!user || user.deletedAt || user.isBanned) {
      logger.warn(
        {
          path: req.originalUrl,
          method: req.method,
          ip: req.ip,
          userId: payload.sub,
          reason: 'inactive_or_missing_user',
        },
        'Authentication failed',
      );

      throw new ApiError(401, 'Unauthorized');
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      logger.warn(
        {
          path: req.originalUrl,
          method: req.method,
          ip: req.ip,
          userId: user.id,
          reason: 'token_version_mismatch',
        },
        'Authentication failed',
      );

      throw new ApiError(401, 'Unauthorized');
    }

    req.user = user;
    next();
  } catch (error) {
    logger.warn(
      {
        path: req.originalUrl,
        method: req.method,
        ip: req.ip,
      },
      'Authentication failed',
    );

    next(error);
  }
};
