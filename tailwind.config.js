/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors extracted from your Design System image
        primary: "#DC00D3",  // The Pink/Purple
        secondary: "#0CFFFF", // The Cyan/Blue
        dark: "#100425",      // The Deep Background
        card: "#180a36",      // Slightly lighter for cards
        textGray: "#F8F8F8"
      },
      fontFamily: {
        // Fonts from your Design System
        sans: ['"Josefin Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}