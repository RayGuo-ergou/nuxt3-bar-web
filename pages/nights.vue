<script lang="ts" setup>
const { $client } = useNuxtApp()
const addUser = async () => {
  try {
    const x = await $client.user.addUser.mutate({
      phone: 121131,
      name: 'Joh11n Doe',
      email: '',
    })

    console.log(x)
  } catch (e) {
    console.log(e)
  }
}
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'nights',
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="PAGE_TITLE" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>PAGE_BODY</div>
        <button @click="addUser">click</button>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
