<template>
  <div>
    <slot name="trigger">
      <div class="text-center">
        <button
          id="show-drawer"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          Show navigation
        </button>
      </div>
    </slot>

    <div
      id="drawer-navigation"
      class="fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        {{ title }}
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Drawer } from 'flowbite'
import type { DrawerOptions, DrawerInterface } from 'flowbite'
import { onMountedInterval } from '~~/utils/flowbite'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
onMountedInterval(['drawer-navigation', 'show-drawer'], () =>
  // if slot name="trigger" is not provided, then use the default button
  {
    // set the drawer menu element
    const $targetEl: HTMLElement = document.getElementById('drawer-navigation')!

    // options with default values
    const options: DrawerOptions = {
      onHide: () => {
        console.log('drawer is hidden')

        // make sure to remove the backdrop element
        // get element that has attribute drawer-backdrop
        const $backdrop: HTMLElement =
          document.querySelector('[drawer-backdrop]')!
        // if element exists, then remove it
        if ($backdrop) {
          $backdrop.remove()
        }
      },
      onShow: () => {
        console.log('drawer is shown')
      },
      onToggle: () => {
        console.log('drawer has been toggled')
      },
    }

    /*
     * $targetEl: required
     * options: optional
     */
    const drawer: DrawerInterface = new Drawer($targetEl, options)
    const $showDrawerBtn: HTMLButtonElement = document.getElementById(
      'show-drawer'
    ) as HTMLButtonElement
    $showDrawerBtn.addEventListener('click', () => {
      // show the drawer
      drawer.toggle()
    })
  }
)
</script>
