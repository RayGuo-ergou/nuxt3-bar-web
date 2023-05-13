import path from 'path'
import { createRequire } from 'module'
import IconsResolver from 'unplugin-icons/resolver'

const require = createRequire(import.meta.url)

const prismaClient = require
  .resolve('@prisma/client')
  .replace(
    /@prisma(\/|\\)client(\/|\\)index\.js/,
    '.prisma/client/index-browser.js'
  )

const prismaIndexBrowser = path.normalize(
  path.relative(process.cwd(), prismaClient)
)

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    '.prisma/client/index-browser': prismaIndexBrowser,
  },

  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // css
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],

  // plugins
  plugins: [],

  // build
  build: {
    transpile: ['@headlessui/vue', 'trpc-nuxt'],
  },

  // modules
  modules: [
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  devServer: {
    host: '0.0.0.0',
  },

  // auto import components
  components: true,

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // content
  content: {
    documentDriven: false,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

  runtimeConfig: {
    public: {
      reCAPTCHA_key: process.env.RECAPTCHA_SITE_KEY,
    },
    reCAPTCHA_server_key: process.env.RECAPTCHA_SECRET_KEY,
    mailchimp_key: process.env.MAILCHIMP_API_KEY,
    mailchimp_dc: process.env.MAILCHIMP_DC,
    mailchimp_list: process.env.MAILCHIMP_LIST_ID,
  },

  devtools: {
    enabled: true,
  },
})
