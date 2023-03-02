<template>
  <div class="relative">
    <!-- Carousel wrapper -->
    <div class="relative h-0 overflow-hidden pb-[56.25%]">
      <!-- Items -->
      <template v-for="(video, index) in videos" :key="video.title">
        <div
          :id="`carousel-item-${index + 1}`"
          class="hidden duration-700 ease-in-out"
        >
          <span
            class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800"
            >{{ video.title }}</span
          >
          <video
            class="w-full h-auto z-0"
            :src="video.src"
            autoplay
            muted
            loop
            disablePictureInPicture
            playsinline
          />
        </div>
      </template>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <template v-for="(video, index) in videos" :key="video.src">
        <button
          :id="`carousel-indicator-${index + 1}`"
          type="button"
          class="w-3 h-3 rounded-full"
          :aria-current="index === 0"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </template>
    </div>
    <!-- Slider controls -->
    <button
      id="data-carousel-prev"
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="hidden">Previous</span>
      </span>
    </button>
    <button
      id="data-carousel-next"
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="hidden">Next</span>
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {
  Carousel,
  CarouselItem,
  CarouselOptions,
  IndicatorItem,
} from 'flowbite'
const videos = [
  {
    title: 'First Slide',
    src: './videos/first-slide.mp4',
  },
  {
    title: 'Second Slide',
    src: './videos/first-slide.mp4',
  },
  {
    title: 'Third Slide',
    src: './videos/first-slide.mp4',
  },
  {
    title: 'Fourth Slide',
    src: './videos/first-slide.mp4',
  },
]
onMounted(() => {
  const carouselItems = videos.map(
    (video, index) =>
      ({
        position: index,
        el: document.getElementById(`carousel-item-${index + 1}`),
      } as CarouselItem)
  )

  const options: CarouselOptions = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
      activeClasses: 'bg-white dark:bg-gray-800',
      inactiveClasses:
        'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
      items: videos.map(
        (video, index) =>
          ({
            position: index,
            el: document.getElementById(`carousel-indicator-${index + 1}`),
          } as IndicatorItem)
      ),
    },
  }

  if (document.getElementById('carousel-item-1')) {
    const carousel = new Carousel(carouselItems, options)
    carousel.cycle()
    // set event listeners for prev and next buttons
    const prevButton = document.getElementById('data-carousel-prev')
    const nextButton = document.getElementById('data-carousel-next')
    prevButton?.addEventListener('click', () => {
      carousel.prev()
    })
    nextButton?.addEventListener('click', () => {
      carousel.next()
    })
  }
})
</script>
