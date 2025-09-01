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
        primary: "#1490ca", // Blue
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
