import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { publicProcedure, router } from '../trpc'

const baseURL = 'https://jsonplaceholder.typicode.com'

const UserShape = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.number(),
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
    return req.ctx.prisma.user.create({
      data: {
        name: req.input.name,
        email: req.input.email,
        phone: req.input.phone,
      },
    })

    // return $fetch<User>(`${baseURL}/users`, {
    //   method: 'POST',
    //   body: req.input,
    // })
  }),
})
