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
        ['neutral-darker']: {
          500: '#090b0e' // shaded dark blue
        },
        ['neutral-dark']: {
          500: '#36393B' // dark gray and blue
        },
        ['neutral-medium']: {
          500: '#4C4E52' // dark gray and blue
        },
        ['neutral-light']: {
          500: '#63666A'
        },
        ['display']: {
          500: '#eeeeee' // almost white
        },
        ['body']: {
          500: '#a1a1a1' // medium gray
        }
      },
      fontFamily: {
        display: 'Inter Tight, sans-serif',
        body: 'Nunito Sans, sans-serif'
      },
      aspectRatio: {
        '2/3': '2 / 3'
      }
    }
  },
  plugins: []
}
