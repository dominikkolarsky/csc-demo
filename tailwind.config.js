/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/**/*.{html, js}"],
// prefix: 'tw-',
theme: {
  screens: {
    'xs': '375px',
    'sm': '480px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    // '3xl': '1960px'
  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
  },
  extend: {
    colors: {
      customBlack: '#2C2C2C',
      customWhite: '#FFFFFF',
      customPrimaryBlue: '#4361ee',
      customLightBlue1: '#DFE3EA',
      customDarkBlue1: '#043565',
      customDarkBlue2: '#222933',
      customRed1: '#043565',
      customRed2: '#4361ee',
      csBgGrey: '#313741',
    }
  },
},
plugins: [],
}
