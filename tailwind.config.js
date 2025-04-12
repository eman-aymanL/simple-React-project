/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        onPrimary: '#B6E2AF',
      }
    },
  },
  plugins: [],
  darkMode:'class'
}

