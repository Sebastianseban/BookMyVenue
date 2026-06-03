import 'dotenv/config';

import {z} from 'zod'

const nonEmptyString = (label: string) => z.string().trim().min(1, `${label} is required`);


const envSchema = z.object({
     NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().min(1).max(65535).default(5000),
     DATABASE_URL: nonEmptyString('DATABASE_URL'),
      FRONTEND_ORIGINS: z
      .string()
      .trim()
      .optional()
      .transform((value) =>
        value
          ? value
              .split(',')
              .map((origin) => origin.trim())
              .filter(Boolean)
          : [],
      ),
})
.superRefine((data, ctx) => {
    if (data.NODE_ENV === 'production' && data.FRONTEND_ORIGINS.length === 0) {
          ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['FRONTEND_ORIGINS'],
        message: 'FRONTEND_ORIGINS is required in production',
      });
    }

})


const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const details = parsedEnv.error.issues
    .map((issue) => {
      const path = issue.path.join('.') || 'env';
      return `${path}: ${issue.message}`;
    })
    .join('\n');

  throw new Error(`Invalid runtime configuration:\n${details}`);
}

export const env = parsedEnv.data;

export type AppEnv = typeof env;
