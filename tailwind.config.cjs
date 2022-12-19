/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#6419E6",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
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
        contrast: "#4EBF9D",
        "accent-light": "#667793",
      },
    },
  },
  plugins: [require("daisyui")],
};
