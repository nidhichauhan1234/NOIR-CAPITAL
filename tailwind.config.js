/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // This line is CRITICAL
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          dark: "#0D1B2A",  // navy
          gold: "#C5A46D",  // gold
          gray: "#E5E5E5",  // light gray
        }
      },
    },
  },
  plugins: [],
}
