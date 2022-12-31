<script lang="ts" setup>
import { UseElementVisibility } from '@vueuse/components'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'about',
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="PAGE_TITLE" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div style="padding-bottom: 2000px">PAGE_BODY</div>
        <UseElementVisibility v-slot="{ isVisible }">
          <div
            :class="isVisible ? 'animate-spin animate-repeat-1' : ''"
            class=""
          >
            Is Visible: {{ isVisible }}
          </div>
        </UseElementVisibility>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
