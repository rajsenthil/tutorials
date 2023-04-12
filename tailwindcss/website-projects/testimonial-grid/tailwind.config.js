/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      letterSpacing: {
        widest: ".3em",
      },
      colors: {
        myHSLColor: "hsl(207,30%,22%)",
      },
    },
  },
  plugins: [],
};
