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
      md: { min: "376px", max: "640px" },
      lg: { min: "641px", max: "960px" },
      xl: { min: "961px", max: "1200px" },
      "2xl": { min: "1201px", max: "100vw" },
    },
    extend: {
      spacing : {
        420 : "420px"
      },
      gridTemplateRows : {
        
      },
      animation: {
        "blink-cursor": "blink 1s  infinite normal",
        "txt-deco-underline" : "line 0.25s ease-out infinite"
      },
      keyframes: {
        line : {
          "0%" : {
            transform : "scaleX(0)"
          },
          "100%" : {
            transform : "scaleX(1)"
          },
        },
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
