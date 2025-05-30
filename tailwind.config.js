/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1331d2',
        secondary: '#00B8FF',
        accent: '#F9FAFB'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '14px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
    }
  },
  plugins: [],
} 