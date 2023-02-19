// @ts-ignore
import mailchimp from '@mailchimp/mailchimp_marketing'
import { publicProcedure, router } from '../trpc'

const config = useRuntimeConfig()

mailchimp.setConfig({
  apiKey: config.mailchimp_key,
  server: config.mailchimp_dc,
})

export const mailchimpRouter = router({
  ping: publicProcedure.query(async ({ ctx }) => {
    console.log('111')
    try {
      const response = await mailchimp.ping.get()
      return response
    } catch (error) {
      return error
    }
  }),
})
