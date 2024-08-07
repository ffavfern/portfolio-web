/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001021',
        secondary: '#FDFFFC',
        specials: '#C97D60',
      },
    },
  },
  plugins: [],
}
