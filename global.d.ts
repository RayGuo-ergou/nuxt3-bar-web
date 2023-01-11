import { VueUseNuxtOptions } from '@vueuse/nuxt'
import { ModuleOptions as NuxtContentModuleOptions } from '@nuxt/content'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    name: string
    author: {
      name: string
      link: string
    }
  }
}

declare module 'nuxt/config' {
  interface NuxtConfig {
    vueuse?: VueUseNuxtOptions
    content?: Partial<NuxtContentModuleOptions>
  }
}

export {}
