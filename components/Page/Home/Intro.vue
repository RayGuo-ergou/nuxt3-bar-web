<template>
  <div>
    <div class="px-4 py-1 mx-0 sm:py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div
          class="grid p-6 bg-gray-300 dark:bg-gray-50 rounded place-content-center sm:p-8"
        >
          <div class="max-w-md mx-auto text-center lg:text-left">
            <header>
              <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Some title
              </h2>

              <p class="mt-4 text-grey-900 dark:text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                rerum quam amet provident nulla error!
              </p>
            </header>

            <a
              href="#"
              class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
            >
              button
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 lg:py-8">
          <div>
            <a href="#" class="block group">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                alt=""
                class="object-cover w-full rounded aspect-square"
              />

              <div class="mt-3">
                <h3
                  class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Simple Watch
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-0 px-4 py-1 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <img
              alt="House"
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div class="relative flex items-center bg-gray-300 dark:bg-gray-50">
          <span
            class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 bg-gray-300 lg:dark:bg-gray-50"
          ></span>

          <div class="p-8 sm:p-16 lg:p-24">
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>

            <p class="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>

            <MediaLogo
              class="flex mt-4 space-x-6 sm:justify-center lg:justify-end lg:text-end"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
