import type { Request, Response } from 'express';
import type { CookieOptions } from 'express';
import { ApiResponse } from '../../shared/responses/ApiResponse.js';
import { asyncHandler } from '../../shared/utils/asyncHandler.js';
import { env } from '../../config/env.js';
import { authService } from './auth.service.js';
import type { RegisterDto } from './dto/register.dto.js';
import type { LoginDto } from './dto/login.dto.js';

const refreshTokenCookieOptions = (expires: Date): CookieOptions => ({
  httpOnly: true,
  secure: env.NODE_ENV === 'production',
  sameSite: env.NODE_ENV === 'production' ? 'none' : 'lax',
  path: '/',
  expires,
});

export class AuthController {
  register = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.register(req.body as RegisterDto);

    res.cookie('refreshToken', result.refreshToken, refreshTokenCookieOptions(result.expiresAt));

    res
      .status(201)
      .json(
        ApiResponse.success(
          { accessToken: result.accessToken, user: result.user },
          'Registered successfully',
        ),
      );
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.login(req.body as LoginDto);

    res.cookie('refreshToken', result.refreshToken, refreshTokenCookieOptions(result.expiresAt));

    res
      .status(200)
      .json(
        ApiResponse.success(
          { accessToken: result.accessToken, user: result.user },
          'Logged in successfully',
        ),
      );
  });

  refresh = asyncHandler(async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      res.status(401).json(ApiResponse.failure('Missing refresh token'));
      return;
    }

    const result = await authService.refresh(refreshToken);

    res.cookie('refreshToken', result.refreshToken, refreshTokenCookieOptions(result.expiresAt));

    res
      .status(200)
      .json(
        ApiResponse.success(
          { accessToken: result.accessToken, user: result.user },
          'Token refreshed successfully',
        ),
      );
  });

  logout = asyncHandler(async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
      await authService.logout(refreshToken);
    }

    res.clearCookie('refreshToken', refreshTokenCookieOptions(new Date(0)));

    res.status(200).json(ApiResponse.success(null, 'Logged out successfully'));
  });

  me = asyncHandler(async (req: Request, res: Response) => {
    const user = await authService.getMe(req.user!.id);
    res.status(200).json(ApiResponse.success(user, 'Fetched successfully'));
  });
}

export const authController = new AuthController();
