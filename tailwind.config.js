/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["CourierPrime", "sans-serif"],
    },
    screens: {
      sm: { min: "0px", max: "375px" },
      md: { min: "375px", max: "640px" },
      lg: { min: "640px", max: "960px" },
      xl: { min: "960px", max: "1200px" },
      "2xl": { min: "1200px", max: "100vw" },
    },
    extend: {
      animation: {
        typing:
          "typing 5s steps(60) infinite normal both, blinkTextCursor 500ms steps(60) infinite normal",
      },
      keyframes: {
        typing: {
          from: { width: "0px" },
          to: { width: "100%" },
        },
        blinkTextCursor: {
          "0%, 100% ": { "border-right-color": "rgba(0, 0, 0, 1)" },
          "50%": { "border-color": "rgba(255, 255, 255, 1)" },
        },
      },
    },
  },
  plugins: [],
};
