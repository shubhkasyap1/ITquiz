/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#788492",
        secondary: "#919AA7",
        button1: "#0B1A70",
        footer:"#1A8FCF",
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

