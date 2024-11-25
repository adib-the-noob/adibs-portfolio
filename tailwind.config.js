/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        postgres: {
          blue: '#336791',
          white: '#FFFFFF',
          darkBlue: '#26475E',
        }
      }
    },
  },
  plugins: [],
}

