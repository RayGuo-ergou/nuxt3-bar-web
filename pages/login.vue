<template>
  <div>
    <button @click="login">login</button>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp()
const login = async () => {
  try {
    const user = await $client.auth.login.query({
      email: 'test@test.com',
      password: 'testtest',
    })
    console.log(user)
  } catch (e) {
    console.log(e)
  }
}
</script>

<style scoped></style>
