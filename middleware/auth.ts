const { $client } = useNuxtApp()

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { data, error } = await $client.auth.user.useQuery()

  if (!data.value) {
    console.log(error.value)
    return navigateTo('/login')
  }
})
