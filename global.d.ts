import { VueUseNuxtOptions } from '@vueuse/nuxt'
import { ModuleOptions as NuxtContentModuleOptions } from '@nuxt/content'
import { ModuleOptions as supabaseOptions } from '@nuxtjs/supabase'

declare module 'nuxt/config' {
  interface NuxtConfig {
    vueuse?: VueUseNuxtOptions
    content?: Partial<NuxtContentModuleOptions>
    supabase?: supabaseOptions
  }
}

export {}
