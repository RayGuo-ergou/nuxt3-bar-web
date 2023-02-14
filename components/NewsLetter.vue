<script lang="ts" setup>
const onSubmitLetter = () => {
  alert('submit')

  // TODO: connect mailchimp and store the user info in db
}
</script>
<template>
  <div>
    <div class="mx-auto max-w-screen-md sm:text-center">
      <h2
        class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white"
      >
        Sign up for our newsletter
      </h2>
      <p
        class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400"
      >
        Stay up to date with the roadmap progress, announcements and exclusive
        discounts feel free to sign up with your email.
      </p>
      <form @submit.prevent="onSubmitLetter">
        <div
          class="items-center mx-auto mb-3 space-y-4 space-x-0 max-w-screen-sm sm:flex sm:space-y-0 sm:space-x-4"
        >
          <div class="relative w-full">
            <label
              for="firstName"
              class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Email address</label
            >
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <IconMaterialSymbolsContactEmergency
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
              />
            </div>

            <input
              id="firstName"
              class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your first name"
              type="text"
              required
            />
          </div>
          <div class="relative w-full">
            <label
              for="lastName"
              class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Email address</label
            >
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <IconMaterialSymbolsContactEmergencyOutline
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
              />
            </div>

            <input
              id="lastName"
              class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your last name"
              type="text"
              required
            />
          </div>
        </div>
        <div class="items-center mx-auto mb-3 max-w-screen-sm">
          <div class="relative w-full">
            <label
              for="phone"
              class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Phone number</label
            >
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <IconMaterialSymbolsPhoneAndroidOutline
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
              />
            </div>

            <input
              id="phone"
              class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your phone number"
              type="number"
              pattern="[0-9]*"
              required
            />
          </div>
        </div>
        <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm">
          <div class="relative w-full">
            <label
              for="email"
              class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Email address</label
            >
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <IconMaterialSymbolsAlternateEmail
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
              />
            </div>

            <input
              id="email"
              class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
        </div>
        <div class="items-center mx-auto mb-3 max-w-screen-sm">
          <button
            type="submit"
            class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Subscribe
          </button>
        </div>
        <div
          class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300"
        >
          We care about the protection of your data.
          <a
            href="#"
            class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >Read our Privacy Policy</a
          >.
        </div>
      </form>
    </div>
  </div>
</template>
