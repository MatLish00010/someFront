/** @type {import('tailwindcss').Config} */
const {nextui} = require('@nextui-org/react');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        logo: '#000',
        darkMode: {
          logo: '#fff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
