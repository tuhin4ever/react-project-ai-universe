/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#14e0b0",

          secondary: "#e87fae",

          accent: "#0a2d72",

          neutral: "#1C1C27",

          "base-100": "#323F5D",

          info: "#3F69F3",

          success: "#20D5C6",

          warning: "#F3CA4F",

          error: "#EF5252",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
