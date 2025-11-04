import { z } from 'zod'
import 'dotenv/config'

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z
    .string()
    .refine((v) => v.startsWith('postgres://') || v.startsWith('postgresql://'), {
      message: 'DATABASE_URL باید postgres:// یا postgresql:// باشد',
    }),
  POSTGRES_HOST: z.string().min(1),
  POSTGRES_PORT: z.coerce.number().int().positive().default(5432),
  POSTGRES_DB: z.string().min(1),
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().min(1),
})

const _serverEnv = serverEnvSchema.safeParse(process.env)

if (!_serverEnv.success) {
  console.error('❌ خطا در اعتبارسنجی ENV‌ها:', _serverEnv.error.flatten().fieldErrors)
  throw new Error('Environment validation failed')
}

export const env = _serverEnv.data
