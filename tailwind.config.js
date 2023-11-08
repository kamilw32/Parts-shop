/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        vents: "url('/public/vents.jpg')"
      },
    },
  },
  plugins: [],
}
