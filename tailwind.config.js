module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   fontSize: {
    'tiny': '.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem',
  },
  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
    '50%': '50%',
    '16': '4rem',
  },
   plugins: [],
 }