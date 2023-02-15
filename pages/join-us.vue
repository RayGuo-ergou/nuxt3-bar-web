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
  <div>
    <Banner />
    <PageWrapper>
      <PageHeader>
        <PageTitle text="PAGE_TITLE" class="capitalize" />
      </PageHeader>
      <PageBody>
        <PageSection> </PageSection>
      </PageBody>
    </PageWrapper>
  </div>
</template>
