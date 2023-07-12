/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    screens: {
      sm: { max: "375px" },
      md: "550px",
      lg: "820px",
      xl: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
