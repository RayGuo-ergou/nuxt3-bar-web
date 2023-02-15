<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'join-us',
}))
</script>

<template>
  <PageWrapper>
    <template #banner>
      <Banner />
    </template>
    <PageHeader>
      <PageTitle text="PAGE_TITLE" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection> </PageSection>
    </PageBody>
  </PageWrapper>
</template>
