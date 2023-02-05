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
    <!-- TODO: for different sections like new and old events -->
    <ContentList v-slot="{ list }" path="/events/new">
      <PageEventsCardList class="max-w-screen-3xl mx-auto" :list="list" />
    </ContentList>
  </div>
</template>
