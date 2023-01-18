/** @type {import('tailwindcss').Config} */

const MyTheme = {
  colors: {
    green: {
      DEFAULT: '#3BA676',
      50: '#B4E4CF',
      100: '#A5DFC5',
      200: '#87D4B2',
      300: '#69CA9E',
      400: '#4BBF8B',
      500: '#3BA676',
      600: '#2C7D59',
      700: '#1E533B',
      800: '#0F2A1E',
      900: '#000000',
    },
    blue: {
      DEFAULT: '#0096FF',
      50: '#B8E2FF',
      100: '#A3D9FF',
      200: '#7AC8FF',
      300: '#52B8FF',
      400: '#29A7FF',
      500: '#0096FF',
      600: '#0075C7',
      700: '#00548F',
      800: '#003357',
      900: '#00121F',
    },
    red: {
      DEFAULT: '#FF6464',
      50: '#FFFFFF',
      100: '#FFFFFF',
      200: '#FFDEDE',
      300: '#FFB6B6',
      400: '#FF8D8D',
      500: '#FF6464',
      600: '#FF2C2C',
      700: '#F30000',
      800: '#BB0000',
      900: '#830000',
    },
    slate: {
      DEFAULT: '#64748B',
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
  },
}
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './composables/**/*.{js,ts}',
    './content/**/*.md',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './app.vue',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'wiggle 2s',
      },

      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        // primary: MyTheme.colors.green,
        // if want to change primary color to blue
        primary: MyTheme.colors.blue,
        green: MyTheme.colors.green,
        blue: MyTheme.colors.blue,
        red: MyTheme.colors.red,
        slate: MyTheme.colors.slate,
      },
      // fontFamily: {
      //   sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
