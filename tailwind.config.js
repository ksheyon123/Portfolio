/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["CourierPrime", "sans-serif"],
      display: ['Oswald'],
    },
    screens: {
      sm: { min: "0px", max: "375px" },
      md: { min: "375px", max: "640px" },
      lg: { min: "640px", max: "960px" },
      xl: { min: "960px", max: "1200px" },
      "2xl": { min: "1200px", max: "100vw" },
    },
    extend: {
      gridTemplateRows : {
        
      },
      animation: {
        "blink-cursor": "blink 1s  infinite normal",
      },
      keyframes: {
        blink: {
          "0%": { "border-right-color": "rgba(0, 0, 0, 0)" },
          "100%": { "border-color": "rgba(255, 255, 255, 1)" },
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
