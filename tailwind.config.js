/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'malibu': {
          DEFAULT: '#6db7ff',
          '50': '#eef7ff',
          '100': '#daecff',
          '200': '#bddfff',
          '300': '#90ccff',
          '400': '#6db7ff',
          '500': '#358dfc',
          '600': '#1f6df1',
          '700': '#1757de',
          '800': '#1947b4',
          '900': '#1a3f8e',
          '950': '#152856',
        }
      },
    },
  },
  plugins: [],
}

