import { z } from 'zod'
import { protectedProcedure, publicProcedure, router } from '../trpc'

export const authRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { data, error } = await ctx.supabase.auth.signUp({
        email: input.email,
        password: input.password,
      })

      if (error) {
        throw new Error(error.message)
      }

      return data.user
    }),

  testProtected: protectedProcedure.query((req) => {
    return 'success'
  }),
})
