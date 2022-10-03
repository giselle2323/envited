/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F2FF",
        gray1: "#4F4F4F"
      },
      
    },
   fontFamily: {
      helvetica: ['Helvetica', 'sans-serif'],
    }, 
  },
  plugins: [],
}