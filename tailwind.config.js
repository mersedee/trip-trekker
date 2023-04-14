/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      gray: {
        50: '#f1f2f8',
        100: '#d6d6d6',
        200: '#cecece',
        300: '#9a9a9a',
        400: '#939396',
        500: '#24282b'
      },
      white: '#fff'
    }
  },
  plugins: []
}
