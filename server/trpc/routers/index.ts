import { router } from '../trpc'
import { feedbackRouter } from './feedback'
import { authRouter } from './auth'
import { recaptchaRouter } from './recaptcha'
import { mailchimpRouter } from './mailchimp'

export const appRouter = router({
  feedback: feedbackRouter,
  auth: authRouter,
  recaptcha: recaptchaRouter,
  mailchimp: mailchimpRouter,
})

export type AppRouter = typeof appRouter
