import bcrypt from 'bcrypt';

import { env } from '../../config/env.js';

export class PasswordService {
  hash(password: string): Promise<string> {
    return bcrypt.hash(password, env.BCRYPT_ROUNDS);
  }

  verify(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}

export const passwordService = new PasswordService();
