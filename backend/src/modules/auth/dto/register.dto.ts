import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
   phone: z.string().min(10).max(15).optional(),
  role: z.enum(['USER', 'OWNER']).default('USER'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password too long'),
});

export type RegisterDto = z.infer<typeof registerSchema>;
