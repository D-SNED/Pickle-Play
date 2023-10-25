/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx, html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#666375",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "player-pattern": "url('/src/assets/images/greenbg.jpg')",
      },
    },
  },
  plugins: [],
};
