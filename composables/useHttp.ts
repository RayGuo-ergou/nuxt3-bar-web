type LoginData = {
  email: string
  password: string
}

export default function useHttp() {
  const { $client } = useNuxtApp()
  const testProtected = () => {
    return $client.auth.testProtected.useQuery()
  }

  const login = (data: LoginData) => {
    // no need to validate data here, it's already validated in the server
    // but the form needs to be validated before calling this function
    return $client.auth.login.query(data)
  }

  return {
    testProtected,
    login,
  }
}
