import { router } from '../trpc'
import { feedbackRouter } from './feedback'
import { authRouter } from './auth'
import { recaptchaRouter } from './recaptcha'

export const appRouter = router({
  feedback: feedbackRouter,
  auth: authRouter,
  recaptcha: recaptchaRouter,
})

export type AppRouter = typeof appRouter
