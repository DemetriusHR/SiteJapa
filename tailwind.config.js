const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      background: "#272727",
      ...colors
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
};
