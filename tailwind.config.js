module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#1a1a1a",
      },
      animation: {
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        hero: "url('/images/background.jpeg')", // Add background image
        battleMap: "url('/images/background.jpeg')", // Reuse if needed for other sections
        footer: "linear-gradient(to right, #1a1a1a, #333333)", // Example gradient for footer
      },
    },
  },
  plugins: [],
};