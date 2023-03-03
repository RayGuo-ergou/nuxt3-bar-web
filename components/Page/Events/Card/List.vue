<script setup lang="ts">
import { PropType } from 'vue'
import { CardInfo } from '~~/types/card'

defineProps({
  list: {
    type: Array as PropType<CardInfo[]> | [],
    required: true,
  },
})
</script>
<template>
  <div
    v-if="list.length > 0"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-2"
  >
    <template v-for="card in list" :key="card.title">
      <div
        class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3"
      >
        <img
          class="rounded-t-lg w-80 h-72 object-cover"
          :src="card.thumbnail"
          alt="alt"
        />

        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ card.title }}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ card.description }}
          </p>
          <a
            :href="card.externalLink ? card.externalLink : card._path"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </template>
  </div>
</template>
