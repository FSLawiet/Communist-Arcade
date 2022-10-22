/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        900: "#141212",
        800: "#242020",
        400: "#8A7C7C",
        200: "#CCC4C4",
        100: "#E6E1E1",
      },
      red: {
        500: "#F78181",
        300: "#FAAFAF",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
  },
  plugins: [],
};
