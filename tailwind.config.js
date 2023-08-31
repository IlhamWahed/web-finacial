/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      },

      keyframes: {
        moveup: {
          "0%": { marginTop: "40px", opacity: 0 },
          "50%": { marginTop: "20px", opacity: 0.1 },
          "100%": { marginTop: "0px", opacity: 1 },
        },
      },
      animation: {
        movingUp: "moveup 1s linear forwards",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [rotateY],
};
