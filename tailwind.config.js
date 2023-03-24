/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   sm: "375px",
    //   md: "640px",
    //   lg: "960px",
    //   xl: "100vw",
    // },
    extend: {
      animation: {
        typing:
          "typing 6s steps(44) 500ms 1 normal both, blinkTextCursor 500ms steps(44) infinite normal",
      },
      keyframes: {
        typing: {
          from: { width: "0px" },
          to: { width: "100%" },
        },
        blinkTextCursor: {
          "0%, 100% ": { "border-right-color": "rgba(0, 0, 0, 0)" },
          "50%": { "border-color": "rgba(255, 255, 255, 0)" },
        },
      },
    },
  },
  plugins: [],
};
