import { router } from '../trpc'
import { todoRouter } from './todo'
import { userRouter } from './user'
import { authRouter } from './auth'

export const appRouter = router({
  todo: todoRouter,
  user: userRouter,
  auth: authRouter,
})

export type AppRouter = typeof appRouter
