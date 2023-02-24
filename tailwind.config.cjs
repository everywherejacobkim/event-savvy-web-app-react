/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#99e2b4",
          200: "#88d4ab",
          300: "#78c6a3",
          400: "#67b99a",
          500: "#469d89",
          600: "#358f80",
          700: "#248277",
          800: "#14746f",
          900: "#036666",
        },
        secondary: {
          100: "#f9f9f9",
          200: "#f3f3f3",
          300: "#e6e6e6",
          400: "#cccccc",
          500: "#b3b3b3",
          600: "#999999",
          700: "#808080",
          800: "#666666",
          900: "#4d4d4d",
        },
      },
      backgroundImage: (theme) => ({
        "gradient-yellowGreen": "url('/src/assets/gradient-yellowGreen.jpg')",
      }),
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        tiltNeon: ["Tilt Neon", "cursive"],
        tiltWrap: ["Tilt Wrap", "cursive"],
        tiltPrism: ["Tilt Prism", "cursive"],
      },
      content: {
        "bonfire": "url('/src/assets/bonfire.jpg')",
        "concert": "url('/src/assets/concert.jpg')",
        "indoor_climbing": "url('/src/assets/indoor_climbing.jpg')",
        "marathon": "url('/src/assets/marathon.jpg')",
        "tech_meetup": "url('/src/assets/tech_meetup.jpg')",
        "yoga_class": "url('/src/assets/yoga_class.jpg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}