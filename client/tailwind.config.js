/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ['pastel-blue']: {
          500: '#525E75'
        },
        ['pastel-green']: {
          200: '#92ba92',
          500: '#78938a'
        },
        ['pastel-yellow']: {
          300: '#f1ddbf'
        }
      }
    }
  },
  plugins: []
}
