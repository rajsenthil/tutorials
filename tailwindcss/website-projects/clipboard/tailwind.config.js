module.exports = {
  // content: ["./dist/*.html"],
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        // strongCyan: "#27baa1",
        // lightBlue: "#6173ff",
        // darkGrayishBlue: "#4c545d",
        // grayishBlue: "#9eabb2ff",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
