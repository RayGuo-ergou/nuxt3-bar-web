<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'join-us',
}))
const { $client } = useNuxtApp()
const test = async () => {
  try {
    const result = await $client.auth.testProtected.useQuery()
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <Banner />
  <PageWrapper>
    <PageHeader>
      <PageTitle text="PAGE_TITLE" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>PAGE_BODY</div>
        <button @click="test">click</button>
        <RichTextEditor />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
