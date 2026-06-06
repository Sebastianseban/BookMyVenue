import { authRepository } from './auth.repository.js';
import type { RegisterDto } from './dto/register.dto.js';
import { ApiError } from '../../shared/errors/ApiError.js';
import { passwordService } from './password.service.js';
import { tokenService } from './token.service.js';
import type { LoginDto } from './dto/login.dto.js';

export class AuthService {
  private async issueTokens(user: { id: string; tokenVersion: number }) {
    const accessToken = tokenService.generateAccessToken(user.id, user.tokenVersion);
    const refreshToken = tokenService.generateRefreshToken();
    const tokenHash = tokenService.hashToken(refreshToken);
    const expiresAt = tokenService.getRefreshTokenExpiresAt();

    await authRepository.createRefreshToken({ userId: user.id, tokenHash, expiresAt });

    return { accessToken, refreshToken, expiresAt, user };
  }

  async register(input: RegisterDto) {
    const existingEmail = await authRepository.findUserByEmail(input.email);

    if (existingEmail) {
      throw new ApiError(409, 'Email is already registered');
    }

    const passwordHash = await passwordService.hash(input.password);

    const user = await authRepository.createUser({
      name: input.name,
      email: input.email,
      passwordHash,
    });

    return this.issueTokens(user);
  }

  async login(input: LoginDto) {
    const user = await authRepository.findUserByEmail(input.email);

    if (!user || user.deletedAt || user.isBanned) {
      throw new ApiError(401, 'unauthrized');
    }
    if (!user.passwordHash) {
      throw new ApiError(400, 'This account uses a different login method');
    }

    const passwordValid = await passwordService.verify(input.password, user.passwordHash);

    if (!passwordValid) {
      throw new ApiError(401, 'Invalid credentials');
    }

    return this.issueTokens(user);
  }
}

export const authService = new AuthService();
