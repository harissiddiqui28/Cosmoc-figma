/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/heropic.png')",
        herotwo: "url('/images/ban.png')",
        herothree: "url('/images/bann.png')"

      }
    },
  },
  plugins: [],
}

