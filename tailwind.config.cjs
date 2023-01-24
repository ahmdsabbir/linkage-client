/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          // primary: "#a7ff9e",

          secondary: "#c8ce1c",

          accent: "#abf492",

          neutral: "#212C3B",

          "base-100": "#F8F7F8",

          info: "#4974E9",

          success: "#58E9AA",

          warning: "#D0A106",

          error: "#F76983",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        contrast: "#4EBF9D",
        "contrast-dark": "#43AA8B",
        "accent-dark": "#172B4D",
        light: "#D9D9D9",

        "accent-light": "#667793",
      },
    },
  },
  plugins: [require("daisyui")],
};
