/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        ss: "375px",
        xs: "425px",
        "1xl": "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
