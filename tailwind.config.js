/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#37C0FF",
        shadowBlue: "#f7fdff",
        shadowOrange: "#fffff7",
        shadowGreen: "#f7fff7",
        shadowRed: "#fff8f7",
      },
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.6rem",
        xs: "0.75rem",
        sm: "0.875rem",
        normal: "0.89rem",
      },
    },
  },
  plugins: [nextui()],
};
