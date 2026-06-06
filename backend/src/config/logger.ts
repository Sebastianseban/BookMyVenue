import pino from 'pino';

import packageJson from '../../package.json' with { type: 'json' };

import { env } from './env.js';

const isProd = env.NODE_ENV === 'production';

export const logger = pino({
  level: isProd ? 'info' : 'debug',
  base: {
    service: 'SPCS-backend',
    env: env.NODE_ENV,
    version: packageJson.version,
  },
  redact: {
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      'req.headers.x-webhook-signature',
      'req.body.password',
      'req.body.newPassword',
      'req.body.confirmPassword',
      'req.body.refreshToken',
      'req.body.token',
      'req.body.accessToken',
    ],
    censor: '[REDACTED]',
  },
  ...(!isProd && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  }),
});

export default logger;
