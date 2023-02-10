<script lang="ts" setup>
const id = useRoute().params.id
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: `Dashboard - ${id}`,
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>{{ id }}</div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
