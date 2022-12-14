/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#1A1A21",
      "black-task-area": "#16161C",
      "global-bg-and-task-bg": "#1E1E26",
      gray: "#2D2D3B",
      white: "#F9F9F9",
      "task-title": "#EE69AC",
    },
    extend: {
      keyframes: {
        "enter-filter-animation": {
          "0%": {
            opacity: 0,
            display: "none",
            width: "30px",
          },
          "100%": {
            opacity: 1,
            width: "100%",
            display: "flex",
          },
        },
        "leave-filter-animation": {
          "0%": {
            opacity: 1,
            display: "flex",
            width: "100%",
          },
          "100%": {
            opacity: 0,
            width: "0px",
            visibility: "hidden",
          },
        },
      },
      animation: {
        "enter-filter-animation": "enter-filter-animation .8s forwards",
        "leave-filter-animation": "leave-filter-animation .8s forwards",
      },
      backgroundImage: {
        "my-gradient":
          "linear-gradient(249.73deg, #F29682 0%, #EE69AC 50%, #CB4BCF 100%)",
      },
      gridTemplateColumns: {
        "lg-columns": "minmax(300px,400px) 1fr",
        "md-columns": "minmax(240px,330px) 1fr",
        "sm-columns": "1fr",
      },
    },
  },
  plugins: [],
};
