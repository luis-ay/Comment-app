const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss
  ],
};