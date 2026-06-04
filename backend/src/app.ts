import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Application } from 'express';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';

import { env} from "./config/env.js"
import logger from './config/logger.js';
import prisma from './config/prisma.js';
import { v1Routes } from './routes/v1/index.js';
import { errorHandler } from './shared/middleware/errorHandler.js';


export const createApp = () : Application => {
    const app = express() 

    app.set('trust proxy',1)


    const allowedOrigins = new Set(env.FRONTEND_ORIGINS);

    app.use(helmet());
   app.use(
    cors({
      credentials: true,
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.size === 0 || allowedOrigins.has(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error('Origin not allowed by CORS'));
      },
    }),
  );


  app.use(
    pinoHttp({
      logger,
    }),
  );

  app.use(
    express.json({
      limit: '1mb',
    }),
  );


  app.use(cookieParser());



  app.get('/health', (_req, res) => {
    res.status(200).json({
      status: 'ok',
      type: 'liveness',
      timestamp: new Date().toISOString(),
    });
  });


  app.get('/ready', async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`;

      res.status(200).json({
        status: 'ok',
        type: 'readiness',
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      logger.error({ err: error }, 'Readiness check failed');

      res.status(503).json({
        status: 'error',
        type: 'readiness',
        message: 'Database unavailable',
        timestamp: new Date().toISOString(),
      });
    }
  });


    app.use('/api/v1', v1Routes);

  app.use((_req, res) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
    });
  });


    app.use(errorHandler);

      return app;
}
