// @ts-ignore
import mailchimp from '@mailchimp/mailchimp_marketing'
import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const config = useRuntimeConfig()
const listId = config.mailchimp_list

mailchimp.setConfig({
  apiKey: '1' + config.mailchimp_key,
  server: config.mailchimp_dc,
})

const subscriberSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.number(),
})

export const mailchimpRouter = router({
  ping: publicProcedure.query(async ({ ctx }) => {
    const response = await mailchimp.ping.get()
    return response
  }),
  addSubscriber: publicProcedure
    .input(subscriberSchema)
    .mutation(async ({ input }) => {
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
