/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xsm: '355px',
      sm: '600px',
      md: '900px',
      lg: '1180px',
      xl: '1440px',
    },
    colors: {
      black: {
        DEFAULT: '#212121',
        original: 'rgba(0, 0, 0, 0.7)',
      },
      white: '#ffffff',
      blue: {
        DEFAULT: '#387CFF',
        transparent: 'rgba(56, 124, 255, 0.1)',
      },
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      red: '#cc0000',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss')],
};
