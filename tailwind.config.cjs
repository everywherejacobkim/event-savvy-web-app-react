/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          100: "#ffc8dd",
          200: "#ffafcc",
          300: "#cdb4db",
        },
        cool: {
          100: "#bde0fe",
          200: "#a2d2ff",
          300: "#779be7",
        },
        text: {
          primary: "#e1ecf7",
          selected: "#a7cced",
        },
      },
      backgroundImage: (theme) => ({
        "gradient-yellowGreen": "url('/src/assets/textures/gradient-yellowGreen.jpg')",
      }),
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        tiltNeon: ["Tilt Neon", "cursive"],
        tiltWrap: ["Tilt Wrap", "cursive"],
        tiltPrism: ["Tilt Prism", "cursive"],
      },
      content: {
        bonfire: "url('/src/assets/images/bonfire.jpg')",
        concert: "url('/src/assets/images/concert.jpg')",
        indoor_climbing: "url('/src/assets/images/indoor_climbing.jpg')",
        marathon: "url('/src/assets/images/marathon.jpg')",
        tech_meetup: "url('/src/assets/images/tech_meetup.jpg')",
        yoga_class: "url('/src/assets/images/yoga_class.jpg')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1060px",
    }
  },
  plugins: [],
}