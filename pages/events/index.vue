<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'Event',
}))
</script>

<template>
  <div>
    <Banner class="h-[25vh] md:h-[50vh] lg:h-[75vh]" />
    <PageEventsCardList class="max-w-screen-2xl mx-auto" />
  </div>
</template>
