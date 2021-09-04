module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],//uneccessary lines of code willl be removed by this
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        apurva:
{
  50: '#fffbdb',
  100: '#fff3af',
  200: '#ffea7e',
  300: '#ffe24d',
  400: '#ffda1e',
  500: '#e6c007',
  600: '#b39500',
  700: '#806b00',
  800: '#4d4000',
  900: '#1c1500',
},
navCol:
{
  50: '#ede4ff',
  100: '#c7b3ff',
  200: '#a280fd',
  300: '#7e4efc',
  400: '#5a1efb',
  500: '#4106e2',
  600: '#3203b0',
  700: '#24017e',
  800: '#15004d',
  900: '#07001d',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
