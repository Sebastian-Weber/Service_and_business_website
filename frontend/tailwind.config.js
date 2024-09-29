/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfairDisplay: ['Playfair Display', 'serif'],
        ebGaramond: ['EB Garamond', 'serif'],
        bodoniModa: ['Bodoni Moda', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}