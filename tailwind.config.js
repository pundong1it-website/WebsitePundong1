/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pudong-green': '#4A5D4E',
        'pudong-earth': '#D4A373',
      }
    },
  },
  plugins: [],
}