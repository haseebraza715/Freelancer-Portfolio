const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Add custom light theme colors
        light: {
          background: "#f9f9f7",
          foreground: "#1a202c",
          accent: "#eae8e0",
        },
        // Add custom dark theme colors
        dark: {
          background: "#111827",
          foreground: "#ffffff",
          accent: "#4F46E5",
        },
      },
      animation: {
        // Custom animations
        "gradient-shift": "gradient-animation 10s ease infinite",
      },
      keyframes: {
        // Keyframes for gradient animations
        "gradient-animation": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
