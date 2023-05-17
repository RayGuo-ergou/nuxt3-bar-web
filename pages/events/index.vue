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
    <DrawerWrapper title="Filter">
      <DrawerSectionWrapper>
        <DrawerSection drop-down name="test" />
        <DrawerSection :drop-down="false" name="test" />
        <DrawerSection drop-down name="test" />
        <DrawerSection :drop-down="false" name="test" />
      </DrawerSectionWrapper>
    </DrawerWrapper>

    <div class="max-w-screen-3xl mx-auto">
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

    <!-- XXX: For now I think only new event and old event, so no need of using V-for. -->
  </div>
</template>
