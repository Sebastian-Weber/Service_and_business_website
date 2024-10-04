/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
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
      colors: {
        'paul-beige': '#F2E0C5',
        'paul-green': '#D2D1C3',
        'paul-purple': '#DAC6C8',
        'paul-violet': '#D2D1D9',
        'paul-olive': '#A5A487',
        'paul-rose': '#DAC6C8', 
        
        'cyan-bluish-gray': '#abb8c3',
        'pale-pink': '#f78da7',
        'vivid-red': '#cf2e2e',
        'luminous-vivid-orange': '#ff6900',
        'luminous-vivid-amber': 'fcb900;',
        'light-green-cyan': '#7bdcb5',
        'vivid-green-cyan': '#00d084',
        'pale-cyan-blue': '#0693e3',
        'vivid-purple': '#9b51e0',
      },
      textColor: {
        DEFAULT: '#44403c',
      },
    },
  },
  plugins: [],
};