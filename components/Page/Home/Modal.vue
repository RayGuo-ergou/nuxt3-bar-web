<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'

const show = useLocalStorage('modalShow', true)
// set document overflow to hidden when modal is open
onMounted(() => {
  if (show.value) {
    document.body.style.overflow = 'hidden'
  }
})

const close = () => {
  show.value = false
  document.body.style.overflow = 'auto'
}
</script>
<template>
  <div v-if="show">
    <div
      class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
    ></div>
    <!-- Main modal -->
    <div
      class="fixed p-4 overflow-x-hidden z-50 overflow-y-auto -translate-y-1/3 lg:top-2/4 lg:left-2/4 lg:-translate-x-2/4 lg:-translate-y-2/4"
    >
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Subscribe to get the latest news
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
              @click="close"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->

          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <NewsLetter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
