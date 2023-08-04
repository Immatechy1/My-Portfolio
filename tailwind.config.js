/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
    screens: {
      'md': '869px',
      'lg': '500px',
      'xl' : '1500px'
      
     
    },
    fontFamily: {
      'special' : 'Stinger Fit Trial, sans-serif',
      'special1' : 'Heading Now Trial, sans-serif'
    }
  },
  plugins: [],
};
