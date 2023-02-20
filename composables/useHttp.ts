/**
 * useQuery and query have the different return types
 * useQuery returns AsyncData
 * query returns Promise
 * This matters when frontend handles the error
 * Promise uses try catch
 * AsyncData uses error property
 * NOTICE:
 * useMutation has not implemented in nuxt/trpc yet
 * So every POST request uses try catch
 * wait for useMutation to be implemented
 * @link https://github.com/wobsoriano/trpc-nuxt
 */
import { FeedbackType } from '@prisma/client'

type LoginData = {
  email: string
  password: string
}

type FeedbackData = {
  name: string
  email: string
  phone: number
  feedback: string
  type: FeedbackType
}

type MailSubscriptionData = {
  email: string
  firstName: string
  lastName: string
  phone: number
}

export const useHttp = () => {
  const { $client } = useNuxtApp()
  const auth = {
    /**
     * Test protected route
     * for testing purposes
     */
    testProtected: () => {
      return $client.auth.testProtected.useQuery()
    },
    /**
     * Login
     * @param LoginData
     * @returns AsyncData
     */
    login: (data: LoginData) => {
      // no need to validate data here, it's already validated in the server
      // but the form needs to be validated before calling this function
      return $client.auth.login.useQuery(data)
    },
  }

  const feedback = {
    /**
     * add feedback to the database
     */
    addFeedback: (data: FeedbackData) => {
      return $client.feedback.addFeedback.mutate(data)
    },
  }

  const recaptcha = {
    verify: (token: string) => {
      return $client.recaptcha.verify.mutate({ token })
    },
  }

  const mailchimp = {
    /**
     * Ping the mailchimp server
     * for testing purposes
     */
    ping: () => {
      return $client.mailchimp.ping.useQuery()
    },
    addSubscriber: (data: MailSubscriptionData) => {
      return $client.mailchimp.addSubscriber.mutate(data)
    },
  }

  return {
    auth,
    feedback,
    recaptcha,
    mailchimp,
  }
}
