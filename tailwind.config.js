/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkModeGray: "rgba(32,33,36,1)",
        searchBarGray: "rgb(48,49,52)",
        footerGray: "rgb(23,23,23)",
      },
    },
  },
  plugins: [],
};
