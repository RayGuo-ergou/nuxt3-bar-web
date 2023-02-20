<template>
  <vue-recaptcha
    ref="recaptchaRef"
    :key="recaptchaReloadKey"
    :sitekey="recaptchaKey"
    :theme="theme"
    @verify="onVerify"
    @error="onError"
    @expired="onExpired"
  />
</template>

<script setup lang="ts">
import { VueRecaptcha } from 'vue-recaptcha'
import { ITheme } from '~~/utils/theme'

const emits = defineEmits(['verify'])
const recaptchaRef = ref<VueRecaptcha>()
const recaptchaReloadKey = ref(0)
const recaptchaKey = useRuntimeConfig().public.reCAPTCHA_key
const theme = useState<ITheme>('theme.current')

// watch theme when change reload recaptcha
watch(theme, () => {
  recaptchaReloadKey.value += 1
})
const reset = () => {
  if (recaptchaRef.value) {
    recaptchaRef.value.reset()
  }
}
const onExpired = () => {
  reset()
}

const onVerify = async (token: string) => {
  try {
    const { success, 'error-codes': errorCodes } =
      await useHttp().recaptcha.verify(token)
    // first check if errors
    if (errorCodes) {
      // error codes convert to string, fill with ,
      const errorAll = errorCodes.join(', ')
      useToast().error(`Google reCAPTCHA error: ${errorAll}`)
      reset()
    }
    // because if errorCodes is not null, success is false
    // so we don't need to check success
    // TODO: send emit
    emits('verify', success)
  } catch (e) {
    useToast().error(`${useTRPCError(e)}. Please try again later.`)
  }
}

const onError = (error: string) => {
  // do something
  console.log(error)
}

defineExpose({ reset })
</script>
