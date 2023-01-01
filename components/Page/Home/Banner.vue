<template>
  <div class="carousel w-full" style="scroll-margin-top: 100px">
    <template v-for="(slide, index) in slides" :key="index">
      <div :id="'slide' + (index + 1)" class="carousel-item relative w-full">
        <PageTitle
          :text="slide.title"
          class="absolute text-blue-700 lg:(top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2) text-5xl lg:text-7xl z-20"
        />
        <video
          v-if="slide.type === 'video'"
          class="w-full h-auto z-0"
          :src="slide.src"
          autoplay
          muted
          loop
          disablePictureInPicture
          playsinline
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <!-- if first one go to last -->
          <a
            v-if="index === 0"
            :href="'#slide' + slides.length"
            class="btn btn-circle"
          >
            <IconIcBaselineArrowBackIosNew />
          </a>
          <a
            v-else
            :href="'#slide' + (((index - 1) % slides.length) + 1)"
            class="btn btn-circle"
          >
            <IconIcBaselineArrowBackIosNew />
          </a>
          <a
            :href="'#slide' + (((index + 1) % slides.length) + 1)"
            class="btn btn-circle"
          >
            <IconIcBaselineArrowForwardIos />
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const slides = [
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    type: 'video',
    title: 'Slide 1',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    type: 'video',
    title: 'Slide 2',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    type: 'video',
    title: 'Slide 3',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    type: 'video',
    title: 'Slide 4',
  },
]
</script>

<style lang="scss" scoped>
// .carousel-item {
//   scroll-padding-top: 0;
// }
// video {
//   scroll-margin-top: 48px;
// }
</style>
