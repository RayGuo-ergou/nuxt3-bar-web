<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'services',
}))
</script>

<template>
  <PageWrapper>
    <template #banner>
      <Banner />
    </template>
    <PageHeader>
      <PageTitle text="service" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>PAGE_BODY</div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
