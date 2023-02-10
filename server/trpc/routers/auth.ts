import { z } from 'zod'
import { Session } from '@supabase/gotrue-js'
import { CookieSerializeOptions } from 'cookie-es'
import { protectedProcedure, publicProcedure, router } from '../trpc'

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
} as CookieSerializeOptions

export const authRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string(),
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
  login: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { data, error } = await ctx.supabase.auth.signInWithPassword({
        email: input.email,
        password: input.password,
      })

      if (error) {
        throw new Error(error.message)
      }

      // set cookies
      /* eslint-disable camelcase */
      const { access_token, expires_in, refresh_token } =
        data.session as Session
      setCookie(ctx.event, 'sb-access-token', access_token, {
        ...cookieOptions,
        expires: new Date(Date.now() + expires_in * 1000),
      })

      return data.user
    }),
  logout: publicProcedure.query(async ({ ctx }) => {
    const { error } = await ctx.supabase.auth.signOut()

    if (error) {
      throw new Error(error.message)
    }

    return true
  }),
  user: publicProcedure.query(async ({ ctx }) => {
    const token = getCookie(ctx.event, 'sb-access-token')
    const { data, error } = await ctx.supabase.auth.getUser(token)

    if (error) {
      throw new Error(error.message)
    }

    return { data, error }
  }),
  testProtected: protectedProcedure.query((req) => {
    return 'success'
  }),
})
