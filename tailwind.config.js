/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        khmer: ['Noto Sans Khmer', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'r-1': '-4px 0px 10px rgba(0, 0, 0, 0.1)',
      }
    },
   
  },
  plugins: [],
}

