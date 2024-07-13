/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        vs: "335px",
        ss: "375px",
        xs: "425px",
        "1xl": "1440px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
