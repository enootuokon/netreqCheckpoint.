/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//npx tailwindcss -i ./src/input.css -o ./output/output.css --watch