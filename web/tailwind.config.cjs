/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        dark: '#121214',
        cloudy: '#2A2634',
        rainy: '#1b1922'
      }
    },
  },
  plugins: [],
}
