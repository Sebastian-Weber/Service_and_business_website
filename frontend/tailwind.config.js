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

        'paul-light-beige': '#F2E0C5', 
        'paul-beige': '#E1CAA8',
        'paul-dark-beige': '#DDC9AC',

        'paul-light-green': '#D2D1C3',
        'paul-green': '#C0C0AE',
        'paul-dark-green': '#A5A487',

        'paul-light-purple': '#D2D1D9',
        'paul-purple': '#AAA5B9',
        'paul-dark-purple': '#A8A4B4',

        'paul-light-rose': '#DAC6C8', 
        'paul-rose': '#BB989C',
        'paul-dark-rose': '#B58D90',

        'paul-dark-violet': '#2E2936',
        'paul-bright-button-text': '#FEF5E7',
        'paul-dark-button-bg': '#423E4A',
        
        // 'paul-light-olive': '#A5A487',
        // 'paul-olive': '#A5A487',
        // 'paul-dark-olive': '#A5A487',

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
        DEFAULT: '#2E2936',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.custom-button-primary': {
          'background-color': '#F2E0C5', // paul-light-beige
          'font-weight': '600', // font-semibold
          'font-size': '0.875rem', // text-sm
          'padding-left': '1rem', // px-4
          'padding-right': '1rem', // px-4
          'padding-top': '0.5rem', // py-2
          'padding-bottom': '0.5rem', // py-2
          'border-radius': '0.375rem', // rounded-md
          'transition': 'opacity 0.15s ease-in-out, box-shadow 0.3s ease-in-out', // transition ease-in-out delay-150
          '&:hover': {
            'opacity': '0.5', // hover:opacity-50
            'box-shadow': '4px 4px 12px 4px rgba(0, 0, 0, 0.3)', // more intense shadow, moved further to bottom-right
          },
        },
        '.custom-button-secondary': {
          'background-color': '#423E4A', // paul-dark-button-bg
          'color': '#FFF8ED', // button text color
          'font-weight': '600', // font-semibold
          'font-size': '0.875rem', // text-sm
          'padding-left': '1rem', // px-4
          'padding-right': '1rem', // px-4
          'padding-top': '0.5rem', // py-2
          'padding-bottom': '0.5rem', // py-2
          'border-radius': '0.375rem', // rounded-md
          'transition': 'opacity 150s ease-in-out', // transition ease-in-out delay-150
          '&:hover': {
            'box-shadow': '4px 4px 12px 4px rgba(0, 0, 0, 0.3)', // more intense shadow, moved further to bottom-right
          },
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};