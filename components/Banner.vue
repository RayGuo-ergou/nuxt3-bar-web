<script lang="ts" setup>
const titleRef = ref(null)

defineProps({
  title: {
    type: String,
    default: 'Title',
  },

  subtitle: {
    type: String,
    default: 'Subtitle',
  },

  image: {
    type: String,
    // random image from unsplash
    default:
      'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },

  description: {
    type: String,
    default: '',
  },
})

useAnimation().slowScroll(4, titleRef)
</script>

<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat h-[25vh] md:h-[50vh] lg:h-[75vh] overflow-hidden"
    :style="`background-image: url('${image}')`"
  >
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
    ></div>

    <div
      class="relative mx-auto max-w-xl top-1/3 sm:px-6 lg:px-8 lg:top-2/3 lg:left-10"
    >
      <div ref="titleRef" class="max-w-xl text-center sm:text-left">
        <h1 class="text-3xl font-extrabold sm:text-5xl text-gray-700">
          {{ title }}
          <strong class="block font-extrabold text-primary-700">
            {{ subtitle }}
          </strong>
        </h1>

        <p class="mt-4 text-gray-800 max-w-lg sm:text-xl sm:leading-relaxed">
          {{ description }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
