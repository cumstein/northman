import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { phoneNumber } from 'better-auth/plugins'
import { db } from '@/server/db'

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'pg' }),
  session: {
    cookieCache: { enabled: true, maxAge: 60 * 5 },
  },
  plugins: [
    phoneNumber({
      otpLength: 6,
      expiresIn: 300,
      sendOTP: ({ phoneNumber, code }, _request) => {
        // Implement sending OTP code via SMS
        console.log(phoneNumber, code)
      },
      signUpOnVerification: {
        getTempEmail: (phone) => `${phone.replace(/\D/g, '')}@your-app.local`,
        getTempName: (phone) => `user_${phone.replace(/\D/g, '')}`,
      },
      requireVerification: true,
      // allowedAttempts: 3,
    }),
    nextCookies(),
  ],
})
