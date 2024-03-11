/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ['primary']: {
          400: '#5f3fb8',
          500: '#4b2fa4', // pruple dark
          600: '#412594'
        },
        ['secondary']: {
          500: '#c18fff' // pruple light
        },
        ['tertiary']: {
          400: '#66bfff',
          500: '#33a9ff', // blue light
          600: '#1a8fe6'
        },
        ['neutral-dark']: {
          500: '#090b0e' // shaded dark blue
        },
        ['neutral-light']: {
          500: '#111316' // dark gray and blue
        },
        ['display']: {
          500: '#EEEEEE' // almost white
        },
        ['body']: {
          500: '#A1A1A1' // medium gray
        }
      },
      fontFamily: {
        display: 'Inter Tight, sans-serif',
        body: 'Nunito Sans, sans-serif'
      }
    }
  },
  plugins: []
}
