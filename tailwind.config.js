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
        't-1': '0px -2px 10px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(100% - 1px), rgba(204, 204, 204, 0.5) calc(100% - 1px)), 
                         linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(100% - 1px), rgba(204, 204, 204, 0.5) calc(100% - 1px))`,
      },
      backgroundSize: {
        'grid-size': '30px 30px',
      },
      colors: {
        'primary': '#FFC107',
        'secondary': '#FFA000',
        'accent': '#FF5722',
        'success': '#4CAF50',
        'info': '#03A9F4',
        'warning': '#FFC107',
        'error': '#FF5722',
        'dark': '#0f172a',
        'light': '#F5F5F5',
        'white': '#FFFFFF',
        'dark-light': '#1e293b',
      },
    },

  },
  plugins: [],
}

