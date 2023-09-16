/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hoc/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      xxs: { max: '320px' },
      xs: {
        min: '321px',
        max: '639px',
      },
      ...defaultTheme.screens,
    },
  },
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  plugins: [require('flowbite/plugin')],
};
