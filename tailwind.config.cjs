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
          400: "#bde0fe",
          500: "#a2d2ff",
          600: "#779be7",
        }
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
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}