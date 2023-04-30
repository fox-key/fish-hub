/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{js,tx,tsx,jsx,vue}'
  ],
  theme: {
    extend: {},
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    }
  },
  plugins: [],
}

