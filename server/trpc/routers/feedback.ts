import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

// create own type with zod instead of using prisma generated type
// because we don't want to expose all the fields
// and zod can be used to validate input
const InputShape = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.number(),
  feedback: z.string(),
})

export const feedbackRouter = router({
  // add feedback
  addFeedback: publicProcedure.input(InputShape).mutation((req) => {
    return req.ctx.prisma.enquirer.upsert({
      where: {
        Enquirer_email_phone: {
          email: req.input.email,
          phone: req.input.phone,
        },
      },
      update: {
        feedbacks: {
          create: {
            text: req.input.feedback,
          },
        },
      },
      create: {
        name: req.input.name,
        email: req.input.email,
        phone: req.input.phone,
        feedbacks: {
          create: {
            text: req.input.feedback,
          },
        },
      },
      include: {
        feedbacks: true,
      },
    })
  }),
})
