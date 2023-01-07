<script lang="ts" setup>
import { PropType } from 'vue'
type Item = {
  url: string
  title: string
  description: string
}

// define items props with type { text: string; color: string; variant: string; onClick: () => void }[]
defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => [
      {
        url: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        title: 'Title',
        description: 'Description',
      },
      {
        url: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        title: 'Title',
        description: 'Description',
      },
    ],
  },
})
</script>

<template>
  <div class="flex flex-row w-screen h-[50vh] md:h-screen">
    <!-- use v-for list 2 item -->
    <div
      v-for="item in items"
      :key="item.title"
      class="transition-all ease-in-out duration-1000 h-full bg-center bg-cover flex-1 bg-no-repeat saturate-[75%] hover:shadow-2xl hover:saturate-100 hover:contrast-125 hover:flex-[7]"
      :class="`bg-[url('${item.url}')]`"
    ></div>
  </div>
</template>
