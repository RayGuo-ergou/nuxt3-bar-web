<script lang="ts" setup>
import { PropType } from 'vue'

type Button = {
  text: string
  color: string
  variant: string
  onClick: Function
}

defineProps({
  buttons: {
    type: Array as PropType<Button[]>,
    default: () => [
      {
        text: 'Button',
        color: 'primary',
        variant: 'solid',
        onClick: () => {},
      },
    ],
  },

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
</script>

<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat"
    :class="`bg-[url('${image}')]`"
  >
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
    ></div>

    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
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
          <div v-for="button in buttons" :key="button.text">
            <a
              :color="button.color"
              :variant="button.variant"
              class="block w-full rounded px-12 py-3 text-sm font-medium text-white shadow focus:outline-none sm:w-auto"
              :class="`bg-${button.color}-${
                button.variant === 'solid' ? '600' : '100'
              } hover:bg-${button.color}-${
                button.variant === 'solid' ? '700' : '200'
              } focus:ring-${button.color}-${
                button.variant === 'solid' ? '500' : '200'
              } active:bg${button.color}-${
                button.variant === 'solid' ? '500' : '100'
              }}`"
              @click="button.onClick"
            >
              {{ button.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
