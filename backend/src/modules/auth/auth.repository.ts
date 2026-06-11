import type { Prisma } from '../../generated/prisma/client.js';
import prisma from '../../config/prisma.js';

type DbClient = Prisma.TransactionClient | typeof prisma;

export class AuthRepository {
  findUserByEmail(email: string, db: DbClient = prisma) {
    return db.user.findUnique({
      where: { email },
    });
  }

 findUserById(id:string ,db: DbClient = prisma) {
  return db.user.findUnique({
    where:{id}
  })
 }

  createUser(
    data: {
      name: string;
      email: string;
      phone?: string;
      role: 'USER' | 'OWNER';
      passwordHash: string;
    },
    db: DbClient = prisma,
  ) {
    return db.user.create({
      data,
    });
  }

  createRefreshToken(
    data: {
      userId: string;
      tokenHash: string;
      expiresAt: Date;
    },
    db: DbClient = prisma,
  ) {
    return db.refreshToken.create({
      data,
    });
  }

  findRefreshToken(tokenHash: string, db: DbClient = prisma) {
    return db.refreshToken.findUnique({
      where: { tokenHash },
      include: { user: true },
    });
  }

  revokeRefreshToken(tokenHash: string, db: DbClient = prisma) {
    return db.refreshToken.update({
      where: { tokenHash },
      data: { revokedAt: new Date() },
    });
  }
}

export const authRepository = new AuthRepository();
