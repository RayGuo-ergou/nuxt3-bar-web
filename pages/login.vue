<template>
  <div>
    <button @click="login">login</button>
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
    console.log(e)
  }
}
</script>

<style scoped></style>
