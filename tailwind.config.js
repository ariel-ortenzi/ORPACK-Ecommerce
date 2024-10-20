/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quickSand: "'Quicksand', sans-serif",
        bebas : "'Bebas Neue', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        azulOrpack: '#144681',
        bgColor: '#E0E0E0',
      }
    },
  },
  plugins: [],
}

