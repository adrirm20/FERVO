/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00A082',
        'primary-light': '#E6F6F3',
        'primary-dark': '#008067',
        secondary: '#FFE031',
      },
    },
  },
  plugins: [],
};