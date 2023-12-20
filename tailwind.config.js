/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ['accent']: '#FF9000',
        ['primary']: '#000000',
        ['secondary']: '#0E0E0E',
        ['tertiary']: '#1B1B1B',
        ['secondary-hover']: '#252525',
      },
    },
  },
  plugins: [],
};
