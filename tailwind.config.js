/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nox: ['"Comic Neue"', 'cursive'],
      },
      colors: {
        'nox-black': '#0f0f0f',
        'nox-gold': '#e0c066',
        'nox-gray': '#1e1e1e',
      },
    },
  },
  plugins: [],
}