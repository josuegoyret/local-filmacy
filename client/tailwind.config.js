/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ['primary']: {
          500: '#4b2fa4' // pruple dark
        },
        ['secondary']: {
          500: '#c18fff' // pruple light
        },
        ['tertiary']: {
          500: '#33a9ff' // blue light
        },
        ['neutral-dark']: {
          500: '#090b0e' // shaded dark blue
        },
        ['neutral-light']: {
          500: '#111316' // dark gray and blue
        },
        ['text-display']: {
          500: '#EEEEEE' // almost white
        },
        ['text-body']: {
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
