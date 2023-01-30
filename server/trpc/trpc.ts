import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'
import type { Context } from './context'

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause!.flatten()
            : null,
      },
    }
  },
})

const isAuth = t.middleware(async ({ ctx, next }) => {
  const token = getCookie(ctx.event, 'sb-access-token')
  console.log(token)
  if (!token) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not authenticated' })
  }
  // get user from token
  const { data, error } = await ctx.supabase.auth.getUser(token)
  console.log('data', data)
  console.log('error', error)
  if (error) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not authenticated' })
  }

  return next({
    ctx: {
      ...ctx,
      user: data.user,
    },
  })
})

/**
 * Create a router
 * @see https://trpc.io/docs/v10/router
 */
export const router = t.router

/**
 * Create an unprotected procedure
 * @see https://trpc.io/docs/v10/procedures
 **/
export const publicProcedure = t.procedure

/**
 * @see https://trpc.io/docs/v10/middlewares
 */
export const middleware = t.middleware

/**
 * @see https://trpc.io/docs/v10/merging-routers
 */
export const mergeRouters = t.mergeRouters

export const protectedProcedure = t.procedure.use(isAuth)
