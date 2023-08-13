/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '400px',
      'md': '600px',
      'lg' : '920px',
    },
    fontFamily: {
      'special' : 'Stinger Fit Trial, sans-serif',
      'special1' : 'Heading Now Trial, sans-serif'
    }
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [],
};
