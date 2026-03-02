/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        // Custom Blue Palette (User Request: #3F8AE2 as Primary)
        blue: {
          50: '#eff8ff',
          100: '#dbeffe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#5a9cf8', // Adjusted focus ring
          600: '#3F8AE2', // TARGET PRIMARY
          700: '#3370b7', // Darker hover state
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
