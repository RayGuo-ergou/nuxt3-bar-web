<template>
  <div class="max-w-screen-3xl mx-auto text-center">
    <h1 class="my-4 text-3xl font-extrabold md:text-5xl lg:text-6xl">
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >{{ title }}</span
      >
    </h1>

    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
