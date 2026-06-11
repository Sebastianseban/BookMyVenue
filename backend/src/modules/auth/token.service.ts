import crypto from 'node:crypto';

import jwt from 'jsonwebtoken';

import type { SignOptions } from 'jsonwebtoken';
import { env } from '../../config/env.js';

export type AccessTokenPayload = {
  sub: string;
  tokenVersion: number;
};

export class TokenService {
  generateAccessToken(userId: string, tokenVersion: number) {
    const payload: AccessTokenPayload = {
      sub: userId,
      tokenVersion,
    };
    const options: SignOptions = {
      expiresIn: env.ACCESS_TOKEN_TTL as NonNullable<SignOptions['expiresIn']>,
    };

    return jwt.sign(payload, env.JWT_ACCESS_SECRET, options);
  }

  verifyAccessToken(token: string): AccessTokenPayload {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenPayload;
}

  generateRefreshToken(): string {
    return crypto.randomBytes(48).toString('base64url');
  }

  hashToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }

  getRefreshTokenExpiresAt(): Date {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + env.REFRESH_TOKEN_TTL_DAYS);
    return expiresAt;
  }
}

export const tokenService = new TokenService();
