import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

/**
 * @example
 * {
 *   "success": true|false,
 *   "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
 *   "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
 *   "error-codes": [...]        // optional
 * }
 */
type reCAPTCHAResponse = {
  success: boolean
  challenge_ts: Date
  hostname: string
  'error-codes': string[] | null
}

const InputShape = z.object({
  token: z.string(),
})

/**
 * API Request
 * URL: https://www.google.com/recaptcha/api/siteverify METHOD: POST*
 * POST Parameter	Description
 * secret	Required. The shared key between your site and reCAPTCHA.
 * response	Required. The user response token provided by the reCAPTCHA client-side integration on your site.
 * remoteip	Optional. The user's IP address.
 *
 */

const baseURL = 'https://www.google.com/recaptcha/api/siteverify'
export const recaptchaRouter = router({
  verify: publicProcedure.input(InputShape).mutation(async (req) => {
    const secret = useRuntimeConfig().reCAPTCHA_server_key
    const data = await $fetch<reCAPTCHAResponse>(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

      query: {
        secret,
        response: req.input.token,
      },
    })

    return data
  }),
})
