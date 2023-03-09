<template>
  <li v-if="!dropDown">
    <a
      href="#"
      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <slot name="logo"></slot>
      <span class="ml-3">{{ name }}</span>
    </a>
  </li>
  <li v-else>
    <button
      id="dropdownButton"
      type="button"
      class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      aria-controls="dropdown-example"
      data-collapse-toggle="dropdown-example"
    >
      <svg
        aria-hidden="true"
        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="flex-1 ml-3 text-left whitespace-nowrap">E-commerce</span>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <ul id="dropdownMenu" class="py-2 space-y-2">
      <li>
        <a
          href="#"
          class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >Products</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >Billing</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >Invoice</a
        >
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { Dropdown } from 'flowbite'
import type { DropdownOptions, DropdownInterface } from 'flowbite'
import { onMountedInterval } from '~~/utils/flowbite'

defineProps({
  dropDown: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
})

onMountedInterval(['dropdownMenu', 'dropdownButton'], () => {
  // set the dropdown menu element
  const $targetEl: HTMLElement = document.getElementById(
    'dropdownMenu'
  ) as HTMLElement

  // set the element that trigger the dropdown menu on click
  const $triggerEl: HTMLElement = document.getElementById(
    'dropdownButton'
  ) as HTMLElement

  // options with default values
  const options: DropdownOptions = {
    placement: 'bottom-start',
    onHide: () => {
      console.log('dropdown has been hidden')
    },
    onShow: () => {
      console.log('dropdown has been shown')
    },
    onToggle: () => {
      console.log('dropdown has been toggled')
    },
  }

  const dropdown: DropdownInterface = new Dropdown(
    $targetEl,
    $triggerEl,
    options
  )

  /*
   * targetEl: required
   * triggerEl: required
   * options: optional
   */
})
</script>

<style scoped></style>
