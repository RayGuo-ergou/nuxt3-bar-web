<script lang="ts" setup>
const { $client } = useNuxtApp()
// const addUser = async () => {
//   try {
//     const x = await $client.feedback.addFeedback.mutate({
//       phone: 121131,
//       name: 'Joh11n Doe',
//       email: '',
//       feedback: 'test',
//     })

//     console.log(x)
//   } catch (e) {
//     console.log(e)
//   }
// }
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'nights',
}))

const test = async () => {
  const { data, error } = await useHttp().mailchimp.ping()
  console.log(data)
  console.log(error)
  if (error.value) {
    console.log('has error')
  }
  if (data.value) {
    console.log('has data')
  }
}
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="PAGE_TITLE" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>PAGE_BODY</div>
        <button @click="test">click</button>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
