/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00668A',
        secondary: {
          100: '#004E71',
          200: '#002C50'
        }
      }
    },
    fontFamily: {
      Ubuntu: ['Ubuntu', 'sans-serif']
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: []
}
