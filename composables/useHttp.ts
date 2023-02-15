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

export const useHttp = () => {
  const { $client } = useNuxtApp()

  const auth = {
    testProtected: () => {
      return $client.auth.testProtected.useQuery()
    },

    login: (data: LoginData) => {
      // no need to validate data here, it's already validated in the server
      // but the form needs to be validated before calling this function
      return $client.auth.login.query(data)
    },
  }

  const feedback = {
    addFeedback: (data: FeedbackData) => {
      return $client.feedback.addFeedback.mutate(data)
    },
  }

  return {
    auth,
    feedback,
  }
}
