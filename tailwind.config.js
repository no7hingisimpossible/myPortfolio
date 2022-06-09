module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {

          primary: "rgb(184, 9, 37)",
          secondary: "#ffb702",
          accent: "#292b2c",

          neutral: "#010101",

          "base-100": "#ffffff",

          info: "#687188",

          success: "#1BBB70",

          warning: "#DF7E07",

          error: "#ffffff",
        },
      },
      
    ],
  },

  plugins: [require("daisyui")],
}