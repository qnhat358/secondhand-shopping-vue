/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite/**/*.{vue,js,jsx,ts,tsx}',
    'node_modules/flowbite-vue/**/*.{vue,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '100%': { right: 0 },
        },
      },
      animation: {
        'slide-from-right': 'slide 0.5s forwards',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
