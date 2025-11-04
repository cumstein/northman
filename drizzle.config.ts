import { env } from '@/core/env'
import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/server/db/schema',
  out: './src/server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: { url: env.DATABASE_URL },
  strict: true,
  verbose: true,
})
