const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "serif"],
        libre: ["Libre Baskerville", "serif"],
        radley: ["Radley", "serif"],
      },
      colors: {
        light: {
          background: "#f9f9f7",
          foreground: "#1a202c",
          accent: "#eae8e0",
        },
        dark: {
          background: "#111827",
          foreground: "#ffffff",
          accent: "#4F46E5",
        },
        // Add your custom yellow colors here
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
      },
      animation: {
        "gradient-shift": "gradient-animation 10s ease infinite",
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        "gradient-animation": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};