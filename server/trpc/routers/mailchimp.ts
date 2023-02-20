/**
 * @link https://mailchimp.com/developer/marketing/api/
 */
// @ts-ignore
import mailchimp from '@mailchimp/mailchimp_marketing'
import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { publicProcedure, router } from '../trpc'

const config = useRuntimeConfig()
const listId = config.mailchimp_list

mailchimp.setConfig({
  apiKey: config.mailchimp_key,
  server: config.mailchimp_dc,
})

const subscriberSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.number(),
})

export const mailchimpRouter = router({
  ping: publicProcedure.query(async () => {
    const response = await mailchimp.ping.get()
    return response
  }),
  addSubscriber: publicProcedure
    .input(subscriberSchema)
    .mutation(async ({ input, ctx }) => {
      // store in db as backup
      try {
        await ctx.prisma.subscriber.upsert({
          where: {
            Subscriber_email_phone: { email: input.email, phone: input.phone },
          },
          update: {},
          create: {
            email: input.email,
            firstName: input.firstName,
            lastName: input.lastName,
            phone: input.phone,
          },
        })
      } catch (error) {
        console.log(error, 'error')
        throw new TRPCError({
          message: 'Error storing subscriber in database',
          code: 'INTERNAL_SERVER_ERROR',
          cause: error,
        })
      }
      // check if already in mailchimp
      // if so, return
      try {
        await mailchimp.lists.getListMember(listId, input.email)
        return
      } catch (error) {
        // if not, continue
        console.log(error)
      }
      // after storing in db, add to mailchimp
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: input.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: input.firstName,
          LNAME: input.lastName,
          PHONE: input.phone.toString(),
        },
      })

      return response
    }),
})
