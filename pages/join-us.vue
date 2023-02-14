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
  <Banner />
  <PageWrapper>
    <PageHeader>
      <PageTitle text="PAGE_TITLE" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection> </PageSection>
    </PageBody>
  </PageWrapper>
</template>
