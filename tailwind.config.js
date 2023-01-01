/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      width:(theme) => ({
        "container": "380px",
        ...theme("spacing"),
        "1/2": "50%",
      })
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.will-change-trans': { // `will-change-transform` is now included in Tailwind CSS 3.0 so using alternative class name for this example
          willChange: 'transform'
        },
        '.ease': {
          transition: 'ease'
        },
      })
    })
  ]
}
