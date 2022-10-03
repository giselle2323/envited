/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLanding: "#F6F2FF",
        backgroundEvent: "#FBFAFF",
        gray1: "#4F4F4F",
        heading: "#240D57",
        gray2: "#828282"
      },
      dropShadow: {
        'iconBox': '0 0px 5px rgba(0, 0, 0, 0.1)',
      }
      
    },
   fontFamily: {
      helvetica: ['Helvetica', 'sans-serif'],
    }, 
  },
  plugins: [],
}