<template>
  <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

  <section class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <p class="max-w-xl text-lg">
            {{ info }}
          </p>

          <div v-if="type === FeedbackType.CONTACT" class="mt-8">
            <!-- TODO: use a ref or reactive for the phone number -->
            <a
              href="tel:+496170961709"
              class="text-2xl font-bold text-cyan-600"
            >
              0151 475 4450
            </a>

            <address class="mt-2 not-italic">
              282 Kevin Brook, Imogeneborough, CA 58517
            </address>
          </div>
        </div>

        <div
          class="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg lg:col-span-3 lg:p-8"
        >
          <div class="text-center mb-4">
            <div class="text-3xl">{{ title }}</div>
            <div class="text-sm">{{ subTitle }}</div>
          </div>
          <form class="space-y-4" @submit.prevent="onSubmit">
            <div>
              <label class="sr-only" for="name">Name</label>
              <input
                id="name"
                v-model="name"
                class="w-full rounded-lg dark:text-gray-600 border-gray-200 p-3 text-sm"
                placeholder="Your full name"
                type="text"
                required
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  id="email"
                  v-model="email"
                  class="w-full rounded-lg dark:text-gray-600 border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  required
                />
              </div>

              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                  id="phone"
                  v-model="phone"
                  class="w-full rounded-lg dark:text-gray-600 border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="number"
                  pattern="[0-9]*"
                  required
                />
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">Message</label>
              <textarea
                id="message"
                v-model="message"
                class="w-full rounded-lg dark:text-gray-600 border-gray-200 p-3 text-sm"
                :placeholder="messagePlaceholder"
                rows="8"
                required
              ></textarea>
            </div>
            <vue-recaptcha
              ref="recaptchaRef"
              :key="recaptchaReloadKey"
              :sitekey="recaptchaKey"
              :theme="theme"
              @verify="onVerify"
              @error="onError"
              @expired="onExpired"
            />

            <div class="mt-4">
              <button
                type="submit"
                class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
              >
                <span class="font-medium"> Send Enquiry </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FeedbackType } from '@prisma/client'
import { PropType } from 'vue'
import { VueRecaptcha } from 'vue-recaptcha'
import { ITheme } from '~~/utils/theme'

const recaptchaReloadKey = ref(0)
const theme = useState<ITheme>('theme.current')
const recaptchaKey = useRuntimeConfig().public.reCAPTCHA_key
const recaptchaRef = ref<VueRecaptcha>()
const name = ref('')
const email = ref('')
const phone = ref<number>()
const message = ref('')
const recaptchaPass = ref<boolean>(false)

const props = defineProps({
  type: {
    type: String as PropType<FeedbackType>,
    required: true,
  },
})

// a computed based on props.type return different strings
const title = computed(() => {
  if (props.type === FeedbackType.CONTACT) {
    return 'Contact Us'
  }
  return 'Join Us'
})

const subTitle = computed(() => {
  if (props.type === FeedbackType.CONTACT) {
    return 'Feel free to contact us for any questions, comments, or inquiries you may have.'
  }
  return "We're looking forward to having you on the team!"
})

const messagePlaceholder = computed(() => {
  if (props.type === FeedbackType.CONTACT) {
    return 'Do you have any questions or comments? Please let us know.'
  }
  return 'Please kindly let us know which position you are interested in, and share with us the skills and experience that you believe would make you a strong candidate. We would greatly appreciate hearing more about your background.'
})

const info = computed(() => {
  if (props.type === FeedbackType.CONTACT) {
    return 'Contact us TODO: add contact info'
  }
  return 'Join us TODO: add join info'
})

// watch theme when change reload recaptcha
watch(theme, () => {
  recaptchaReloadKey.value += 1
})

const onExpired = () => {
  if (recaptchaRef.value) {
    recaptchaRef.value.reset()
  }
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
      recaptchaRef.value?.reset()
    }
    // because if errorCodes is not null, success is false
    // so we don't need to check success
    recaptchaPass.value = success
  } catch (e) {
    useToast().error(`${useTRPCError(e)}. Please try again later.`)
  }
}

const onError = (error: string) => {
  // do something
  console.log(error)
}

const onSubmit = async () => {
  if (!recaptchaPass.value) {
    useToast().error('Please verify that you are not a robot.')
    return
  }
  try {
    await useHttp().feedback.addFeedback({
      name: name.value,
      email: email.value,
      // phone field is required in the form
      // so we can safely cast it to number
      phone: phone.value as number,
      feedback: message.value,
      type: props.type,
    })
    useToast().success('Thank you for your message!')
  } catch (e: any) {
    useToast().error(`${useTRPCError(e)}. Please try again later.`)
  }

  // reset all fields
  name.value = ''
  email.value = ''
  phone.value = undefined
  message.value = ''
  recaptchaPass.value = false
  recaptchaRef.value?.reset()
}
</script>
