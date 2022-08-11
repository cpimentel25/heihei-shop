/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    colors: {
      ...colors,
      ...{ transparent: 'transparent' },
    },
    extend: {
      boxShadow: {
        'btn1': '8px 8px 1px rgba(0,0,0,0.5)',
      }
    },
    fontFamily: {
      'Roboto': ['RobotoMono', 'monospace'],
    },
    fontSize: {
      'small': '1.1rem',
      'base': '1.3rem',
      'tittle': '2rem',
    },
    transitionProperty: {
      'btn': '',
    },
    transitionDelay: {
      'btn': '150ms',
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
