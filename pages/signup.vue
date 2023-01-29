<template>
  <div>
    <button @click="signup">signup</button>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp()

const signup = async () => {
  try {
    const user = await $client.auth.signup.mutate({
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
