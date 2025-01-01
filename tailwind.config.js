/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        asap: ["Asap", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 2px 0 #6f9a37',
      },
      screens: {
        'xs': '375px',
      }
    },
  },
  plugins: [],
}
