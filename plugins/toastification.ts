/**
 * XXX: This is a workaround for
 * A plugin must either be a function or an object with an "install" function.
 * @link https://github.com/Maronato/vue-toastification/issues/341
 */
// @ts-ignore
import Toast from 'vue-toastification/dist/index.mjs'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast)
})
