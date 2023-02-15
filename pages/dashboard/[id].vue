<script lang="ts" setup>
const id = useRoute().params.id
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: `Dashboard - ${id}`,
}))

const test = async () => {
  try {
    const res = await useHttp().auth.testProtected()
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div>
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
  </div>
</template>
