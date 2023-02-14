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
    <Banner />

    <!-- XXX: For now I think only new event and old event, so no need of using V-for. -->
    <ContentList path="/events/new">
      <template #default="{ list }">
        <PageEventsCard :title="'Upcoming Events'">
          <PageEventsCardList :list="list" />
        </PageEventsCard>
      </template>
      <template #not-found>
        <PageEventsCardNotFound />
      </template>
    </ContentList>
    <ContentList path="/events/old">
      <template #default="{ list }">
        <PageEventsCard :title="'Past Events'">
          <PageEventsCardList :list="list" />
        </PageEventsCard>
      </template>
      <template #not-found>
        <PageEventsCardNotFound />
      </template>
    </ContentList>
  </div>
</template>
