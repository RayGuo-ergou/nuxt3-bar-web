<script lang="ts" setup>
const showList = ref(false)
// create a ref called tab, the value can only be 'new' or 'old' or undefined
const tab = ref<'new' | 'old' | undefined>(undefined)

// compiler macro
definePageMeta({
  layout: 'page',
})

const items = [
  {
    url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'upcoming event',
    description: 'Description1',
    onClick: async () => {
      showList.value = true
      tab.value = 'new'
      await nextTick()
      const e = document.getElementById('newEvent')
      if (e) {
        e.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
  {
    url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'past events',
    description: 'Description2',
    onClick: async () => {
      showList.value = true
      tab.value = 'old'
      await nextTick()
      const e = document.getElementById('oldEvent')
      if (e) {
        e.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
]
</script>

<template>
  <div>
    <!-- <Banner :buttons="buttons" /> -->
    <PageEventsBanner :items="items" />
    <div
      class="mx-auto max-w-7xl w-full h-full"
      :class="[showList ? 'min-h-[500px]' : '']"
    >
      <PageWrapper>
        <div
          v-if="showList && tab === 'new'"
          id="newEvent"
          class="scroll-mt-12"
        >
          <PageHeader>
            <PageTitle text="New events" class="capitalize" />
          </PageHeader>
          <PageBody>
            <ContentList v-slot="{ list }" path="/events/new">
              <PageSection v-for="article in list" :key="article._path">
                <div
                  class="block hover:no-underline p-6 space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]"
                >
                  <div
                    class="mt-1 text-slate-600 dark:text-gray-400 text-right"
                  >
                    <div>{{ article.date }}</div>
                    <Anchor
                      class="text-sm flex items-center justify-end space-x-1"
                      :href="`https://www.github.com/${article.author}`"
                    >
                      <icon-mdi:github-face class="text-xs" />
                      <span>{{ article.author }}</span>
                    </Anchor>
                  </div>
                  <div class="flex flex-col">
                    <div
                      class="text-xl font-semibold text-slate-800 dark:text-gray-50"
                    >
                      {{ article.title }}
                    </div>
                    <div class="text-slate-700 dark:text-gray-300 mb-1">
                      {{ article.description }}
                    </div>
                    <div class="flex">
                      <Anchor
                        class="text-sm flex space-x-1 items-center text-primary-500"
                        :to="article._path"
                      >
                        <span>{{ $t('others.learn_more') }}</span>
                        <icon:ic:baseline-arrow-right-alt class="text-sm" />
                      </Anchor>
                    </div>
                  </div>
                </div>
              </PageSection>
            </ContentList>
          </PageBody>
        </div>
        <div
          v-if="showList && tab === 'old'"
          id="oldEvent"
          class="scroll-mt-12"
        >
          <PageHeader>
            <PageTitle text="old events" class="capitalize" />
          </PageHeader>
          <PageBody>
            <ContentList v-slot="{ list }" path="/events/old">
              <PageSection v-for="article in list" :key="article._path">
                <div
                  class="block hover:no-underline p-6 space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]"
                >
                  <div
                    class="mt-1 text-slate-600 dark:text-gray-400 text-right"
                  >
                    <div>{{ article.date }}</div>
                    <Anchor
                      class="text-sm flex items-center justify-end space-x-1"
                      :href="`https://www.github.com/${article.author}`"
                    >
                      <icon-mdi:github-face class="text-xs" />
                      <span>{{ article.author }}</span>
                    </Anchor>
                  </div>
                  <div class="flex flex-col">
                    <div
                      class="text-xl font-semibold text-slate-800 dark:text-gray-50"
                    >
                      {{ article.title }}
                    </div>
                    <div class="text-slate-700 dark:text-gray-300 mb-1">
                      {{ article.description }}
                    </div>
                    <div class="flex">
                      <Anchor
                        class="text-sm flex space-x-1 items-center text-primary-500"
                        :to="article._path"
                      >
                        <span>{{ $t('others.learn_more') }}</span>
                        <icon:ic:baseline-arrow-right-alt class="text-sm" />
                      </Anchor>
                    </div>
                  </div>
                </div>
              </PageSection>
            </ContentList>
          </PageBody>
        </div>
      </PageWrapper>
    </div>
  </div>
</template>
