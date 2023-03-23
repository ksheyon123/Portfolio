/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "640px",
      lg: "960px",
      xl: "1200px",
      xl2: "1920px",
    },
    extend: {},
  },
  plugins: [],
};
