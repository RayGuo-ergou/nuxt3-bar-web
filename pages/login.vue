<template>
  <div>
    <button @click="login">login</button>
    <br />
    <button @click="logout">logout</button>
  </div>
</template>

<script setup lang="ts">
const login = async () => {
  try {
    const user = await useHttp().auth.login({
      email: 'test@test.com',
      password: 'testtest',
    })

    console.log(user)
  } catch (e) {
    console.log(useTRPCError(e))
    console.log(e)
  }
}
const logout = async () => {
  try {
    const data = await useHttp().auth.logout()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped></style>
