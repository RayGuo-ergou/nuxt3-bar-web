<script lang="ts" setup>
import { FeedbackType } from '@prisma/client'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'contact',
}))
</script>

<template>
  <div>
    <Banner />

    <ClientOnly>
      <div class="mx-auto max-w-screen-2.5xl w-full pt-2">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ><a href="https://www.maps.ie/distance-area-calculator.html"
            >measure area map</a
          ></iframe
        >
      </div>
      <template #fallback>
        <div class="h-[600px] relative">
          <Loader :size="'xl'" class="absolute top-10 left-1/2" />
        </div>
      </template>
    </ClientOnly>

    <ContactForm :type="FeedbackType.CONTACT" />
  </div>
</template>
