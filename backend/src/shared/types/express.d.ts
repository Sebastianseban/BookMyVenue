import type { RoleName } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        roles: RoleName[];
        tokenVersion: number;
      };
      userId?: string;
      userRole?: RoleName;
    }
  }
}

export {};
