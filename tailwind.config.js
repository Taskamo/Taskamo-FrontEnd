/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blackA500: "#22262E",
        primaryA100: "#4F9DFF1A",
        primaryA500: "#4F9DFF",
        redA10: "#ef44441a",
        boxgroundA700: "#11181A80",
        boxgroundA100: "#FFFFFF0D",
        boxgroundA800: "#2C3644",
      },
    },
  },
  plugins: [],
};
