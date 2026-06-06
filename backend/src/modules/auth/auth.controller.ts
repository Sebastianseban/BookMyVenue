import type { Request, Response } from 'express';
import { ApiResponse } from '../../shared/responses/ApiResponse.js';
import { asyncHandler } from '../../shared/utils/asyncHandler.js';
import { authService } from './auth.service.js';
import type { RegisterDto } from './dto/register.dto.js';
import type { LoginDto } from './dto/login.dto.js';

export class AuthController {
  register = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.register(req.body as RegisterDto);

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: result.expiresAt,
    });

    res.status(201).json(
      ApiResponse.success(
        { accessToken: result.accessToken, user: result.user },
        'Registered successfully',
      ),
    );
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.login(req.body as LoginDto);

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: result.expiresAt,
    });

    res.status(200).json(
      ApiResponse.success(
        { accessToken: result.accessToken, user: result.user },
        'Logged in successfully',
      ),
    );
  });
}

export const authController = new AuthController();
