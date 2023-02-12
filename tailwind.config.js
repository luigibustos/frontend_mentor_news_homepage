/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      softOrange: "#E9AB53",
      softRed: "#F15E50",
      offWhite: "#FFFDFA",
      grayishBlue: "#C5C6CE",
      darkGrayishBlue: "#5D5F79",
      veryDarkBlue: "#00001A",
    },
    fontFamily: {
      sans: "Inter",
    },
  },
  plugins: [],
};
