/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txt-link-grey': '#636363',
        'txt-link-hover': '#61CE70',
        'btn-gradient-start': '#55c48b',
        'btn-gradient-end': '#01849f',
      },
      containers: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      },
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
