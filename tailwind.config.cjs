/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#D8E1FC",

          secondary: "#377DFF",

          accent: "#12CFAF",

          neutral: "#4E5D78",

          "base-100": "#fff",

          info: "#4974E9",

          success: "#58E9AA",

          warning: "#FFD101",

          error: "#EB464C",
          sidebar: "#eaedf2",

          "sidebar-text": "#123354",
          "main-text": "#141414",
          "muted-text-light": "#BABABA",
          "muted-text": "#969899",
          "extra-text": "#fafafa",
          "extra-text-more": "#e3e8ec",
        },
      },
    ],
  },
  /*  theme: {
    extend: {
      colors: {
        contrast: "#12cfaf",
        "contrast-dark": "#43AA8B",
        "accent-dark": "#172B4D",
        light: "#D9D9D9",

        "accent-light": "#667793",
      },
    },
  }, */
  plugins: [require("daisyui")],
};
