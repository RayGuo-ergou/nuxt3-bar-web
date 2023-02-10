import { router } from '../trpc'
import { feedbackRouter } from './feedback'
import { authRouter } from './auth'

export const appRouter = router({
  feedback: feedbackRouter,
  auth: authRouter,
})

export type AppRouter = typeof appRouter
