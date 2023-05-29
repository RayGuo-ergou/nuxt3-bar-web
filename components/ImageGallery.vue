<template>
  <div>
    <div
      ref="container"
      class="flex max-w-xl flex-row overflow-auto"
      @mouseenter="stopAutoScroll"
      @mouseleave="startAutoScroll"
    >
      <img v-for="image in props.images" :key="image" :src="image" alt="" />
      <img v-for="image in props.images" :key="image" :src="image" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const container = ref<HTMLElement | null>(null)
let totalWidth = 0
let autoScrollInterval: ReturnType<typeof setTimeout> | null = null

const props = withDefaults(
  defineProps<{
    images?: string[]
  }>(),
  {
    images: () => [
      'https://source.unsplash.com/featured/300x201',
      'https://source.unsplash.com/featured/300x202',
      'https://source.unsplash.com/featured/300x203',
    ],
  }
)

const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    // console.log('scrolling')
    if (container.value) {
      container.value.scrollLeft += 1
      if (container.value.scrollLeft >= totalWidth / 2) {
        container.value.scrollLeft = 0
      }
    }
  }, 1000 / 60) // 60 fps
}

const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
}

onMounted(() => {
  if (container.value) {
    totalWidth = container.value.scrollWidth
  }
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})
</script>

<style scoped></style>
