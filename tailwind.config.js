/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFBF7',
          100: '#FFF7ED',
          200: '#FFE4CA',
          300: '#FFD1A7',
          400: '#FFBE84',
          500: '#FFAB61',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E8EFE8',
          200: '#D1DFD1',
          300: '#BACFBA',
          400: '#A3BFA3',
          500: '#8CAF8C',
          600: '#7A9D7A',
          700: '#688B68',
          800: '#567956',
          900: '#2C3B2C',
        },
        rose: {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#FFD1D1',
          300: '#FFBABA',
          400: '#FFA3A3',
          500: '#FF8C8C',
        },
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
