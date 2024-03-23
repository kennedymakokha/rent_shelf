/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./price.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: {
          100: "#001d44",
          200: "#1a3457",
          300: "#334a69",
          400: "#4d617c",
          500: "#66778f",
          600: "#808ea2",
          700: "#99a5b4",
          800: "#b3bbc7",
          900: "#ccd2da", 1000: "#e6e8ec"
        },
        secondary: {

          100: "#199e9e",
          200: "#30a8a8",
          300: "#47b1b1",
          400: "#5ebbbb",
          500: "#75c5c5",
          600: "#8ccfcf",
          700: "#a3d8d8",
          800: "#bae2e2",
          900: "#e8f5f5",
          1000: "#0b1306"
        }
      }
    },
  },
  plugins: [],
}

