/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    'node_modules/flowbite//*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-vue//.{js,jsx,ts,tsx}',
    'node_modules/flowbite-datepicker/**/.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

