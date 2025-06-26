const { keyframes } = require('@emotion/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mine-shaft": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#2d2d2d",
        },
        'gold': {
          '50': '#fefce8',
          '100': '#fffbc2',
          '200': '#fff487',
          '300': '#ffe643',
          '400': '#ffd419',
          '500': '#efb903',
          '600': '#ce8f00',
          '700': '#a46504',
          '800': '#884f0b',
          '900': '#734010',
          '950': '#432105',
        },
        keyframes: {
          'option-animation': {
            from: { opacity: '0', transform: 'translateX(-20px)' },
            to: { opacity: '1', transform: 'translateX(0)' },
          },
        },
        animation: {
          'option-animation': 'option-animation 200ms ease forwards',
        },
      },
      screens: {
        'xsm': '350px',
        'xs': '476px',
        'sm': '640px',
        'md': '768px',
        'bs': '899px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        
        '2xl-mx': { 'max': '1535px' },
        'xl-mx': { 'max': '1279px' },
        'lg-mx': { 'max': '1023px' },
        'bs-mx': { 'max': '899px' },
        'md-mx': { 'max': '767px' },
        'sm-mx': { 'max': '639px' },
        'xs-mx': { 'max': '475px' },
        'xsm-mx': { 'max': '349px' },
      },
    },
  },
  plugins: [],
};
