<template>
  <div>111</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'dashboard',
})
onMounted(() => {
  const a = useState('dashboard', () => 'documents')
})
</script>

<style scoped></style>
