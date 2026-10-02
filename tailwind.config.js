/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        butter: {
          light: '#FDFBF2',
          DEFAULT: '#F5EBC4', // Wall butter tone
          dark: '#E7D9A6',
          border: '#E2D3A1',
        },
        tamarillo: {
          light: '#A6262F',
          DEFAULT: '#8C1D24', // Box red tone
          dark: '#681117',
        },
      },
    },
  },
  plugins: [],
}