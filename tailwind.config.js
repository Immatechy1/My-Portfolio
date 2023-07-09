/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    screens: {
      'sm': "373px",
      'md': '768px',
      'lg': '912px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

