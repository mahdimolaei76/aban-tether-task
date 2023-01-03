/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      width:(theme) => ({
        "container": "320px",
        ...theme("spacing"),
        "1/2": "50%",
      })
    },
  },
  plugins: []
}
