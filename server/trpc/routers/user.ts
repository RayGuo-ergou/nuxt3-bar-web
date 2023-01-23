import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { publicProcedure, router } from '../trpc'

const baseURL = 'https://jsonplaceholder.typicode.com'

const FeedbackShape = z.object({
  text: z.string(),
})

const UserShape = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.number(),
  feedbacks: z.array(FeedbackShape).optional(),
})

export type User = z.infer<typeof UserShape>

export const userRouter = router({
  getUsers: publicProcedure.query(() => {
    return $fetch<User[]>(`${baseURL}/users`)
  }),
  getUser: publicProcedure.input(z.number()).query((req) => {
    return $fetch<User>(`${baseURL}/users/${req.input}`)
  }),
  addUser: publicProcedure.input(UserShape).mutation((req) => {
    // TODO: change to upsert
    return req.ctx.prisma.user.upsert({
      where: {
        user_email_phone: {
          email: req.input.email,
          phone: req.input.phone,
        },
      },
      update: {
        feedbacks: {
          create: {
            text: 'This is a sample feedback.',
          },
        },
      },
      create: {
        name: req.input.name,
        email: req.input.email,
        phone: req.input.phone,
        feedbacks: {
          create: {
            text: 'This is a sample feedback.',
          },
        },
      },
      include: {
        feedbacks: true,
      },
    })

    // return $fetch<User>(`${baseURL}/users`, {
    //   method: 'POST',
    //   body: req.input,
    // })
  }),
})
