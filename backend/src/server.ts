import http from 'node:http';

import { createApp } from './app.js';
import { env } from './config/env.js';
import logger from './config/logger.js';
import prisma from './config/prisma.js';

const bootstrap = async (): Promise<void> => {
  await prisma.$connect();
  logger.info({ phase: 'db_connected' }, 'Database connected');

  const app = createApp();
  const server = http.createServer(app);

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(env.PORT, '0.0.0.0', resolve);
  });

  logger.info(
    {
      phase: 'server_listening',
      env: env.NODE_ENV,
      port: env.PORT,
    },
    'Server started',
  );

  let isShuttingDown = false;

  const shutdown = async (signal: NodeJS.Signals): Promise<void> => {
    if (isShuttingDown) {
      logger.warn({ signal }, 'Shutdown already in progress');
      return;
    }

    isShuttingDown = true;
    logger.warn({ signal }, 'Shutting down server');

    const forceExitTimer = setTimeout(() => {
      logger.error({ signal }, 'Forced shutdown after timeout');
      process.exit(1);
    }, 10_000);

    forceExitTimer.unref();

    try {
      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      });

      await prisma.$disconnect();
      logger.info({ signal }, 'Prisma disconnected');

      process.exit(0);
    } catch (error) {
      logger.error({ err: error, signal }, 'Graceful shutdown failed');
      process.exit(1);
    }
  };

  process.on('SIGINT', () => {
    void shutdown('SIGINT');
  });

  process.on('SIGTERM', () => {
    void shutdown('SIGTERM');
  });
};

void bootstrap().catch(async (error) => {
  logger.error({ err: error }, 'Failed to start server');

  try {
    await prisma.$disconnect();
  } catch {
    // Ignore disconnect errors during failed startup.
  }

  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error({ err: reason }, 'Unhandled promise rejection');
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  logger.error({ err: error }, 'Uncaught exception');
  process.exit(1);
});
