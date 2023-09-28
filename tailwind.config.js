module.exports = {
  content: ["./index.html", "./src/**/*.{rs,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1b1b1b",
          light: "#f1f1f1",
        },
        secondary: {
          dark: "#0d0d0d",
          light: "#999999",
        },
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
