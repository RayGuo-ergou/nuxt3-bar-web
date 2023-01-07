<script lang="ts" setup>
import { PropType } from 'vue'
type Item = {
  url: string
  title: string
  description: string
  // XXX: maybe should use emit instead of prop
  onClick?: Function
}

// define items props with type { text: string; color: string; variant: string; onClick: () => void }[]
defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => [
      {
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'upcoming event',
        description: 'Description1',
        onClick: () => {},
      },
      {
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'past events',
        description: 'Description2',
        onClick: () => {},
      },
    ],
  },
})
</script>

<template>
  <div class="flex flex-row w-full h-[50vh] md:h-[85vh]">
    <!-- use v-for list 2 item -->
    <div
      v-for="item in items"
      :key="item.title"
      class="group transition-all ease-in-out duration-1000 h-full bg-center bg-cover flex-1 bg-no-repeat saturate-[75%] hover:shadow-2xl hover:saturate-100 hover:flex-[7]"
      :style="`background-image: url('${item.url}')`"
    >
      <div class="flex flex-col items-center pt-24 md:pt-40">
        <p
          class="text-5xl text-primary-500 underline hover:cursor-pointer md:text-8xl capitalize opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700"
          @click="item.onClick"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>
