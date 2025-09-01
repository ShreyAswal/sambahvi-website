/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"], // body text
        heading: ["Poppins", "sans-serif"], // headings
      },

      colors: {
        primary: {
          primary: "#1490ca", // Base brand blue
          vibrant: "#2563eb", // Vibrant blue (buttons/CTAs)
          light: "#4fb5e0", // Light blue (hover/bg highlights)
          dark: "#0e6b99", // Dark blue (sections, contrast)
          darker: "#084766", // Extra dark (footers/headers if needed)
        },
        accent: "#27acea", // Aqua
        gold: "#d4af37", // Premium gold
        amberCustom: "#f59e0b", // Warm amber
        lightGray: "#f9fafb", // Soft bg
        borderGray: "#e5e7eb", // Neutral border
      },
    },
  },
  plugins: [],
};
