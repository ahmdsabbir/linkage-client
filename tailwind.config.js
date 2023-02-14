/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      minHeight: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      colors: {
        "dodger-blue": {
          DEFAULT: "#377DFF",
          50: "#EFF4FF",
          100: "#DAE7FF",
          200: "#B1CDFF",
          300: "#89B2FF",
          400: "#6098FF",
          500: "#377DFF",
          600: "#0059FE",
          700: "#0045C6",
          800: "#00328E",
          900: "#001E56",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
    require("tailwindcss-fluid-type")({
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },

      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        "2xl": [3, 1.2],
        "3xl": [4, 1.2],
        "4xl": [5, 1.1],
        "5xl": [6, 1.1],
        "6xl": [7, 1.1],
        "7xl": [8, 1],
        "8xl": [9, 1],
        "9xl": [10, 1],
      },
    }),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#377DFF",
          "primary-focus": "#3b82f6",
          "primary-content": "#ffffff",
          secondary: "#7B92B2",
          "secondary-focus": "#7B92B5",
          "secondary-content": "#ffffff",
          accent: "#12CFAF",
          "accent-focus": "#12CFAE",
          "accent-content": "#ffffff",
          neutral: "#2a2e37",
          "neutral-focus": "#181A2A",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#E6E6E6",
          "base-300": "#CFCFCF",
          "base-content": "#ebecf0",
          info: "#36D399",
          success: "#87d039",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
