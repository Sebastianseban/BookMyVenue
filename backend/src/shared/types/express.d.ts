import type { Role } from '../../generated/prisma/enums.ts';

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        roles: Role[];
        tokenVersion: number;
      };
      userId?: string;
      userRole?: Role;
    }
  }
}

export {};
