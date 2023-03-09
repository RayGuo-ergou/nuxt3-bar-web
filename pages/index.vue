<template>
  <NuxtLayout name="page">
    <template #cover>
      <!-- <ClientOnly> -->
      <PageHomeBanner />
      <!-- <template #fallback> -->
      <!-- <div class="pb-[56.25%] relative">
            <Loader class="absolute top-1/2 left-1/2" :size="'xl'" />
          </div> -->
      <!-- </template> -->
      <!-- </ClientOnly> -->
    </template>
    <ClientOnly>
      <PageHomeModal />
    </ClientOnly>
    <PageWrapper>
      <PageHeader>
        <PageTitle text="Some title(Place Holder)" class="text-center" />
      </PageHeader>
      <PageBody>
        <PageSection>
          <PageHomeIntro />
        </PageSection>
      </PageBody>
    </PageWrapper>
  </NuxtLayout>
</template>
