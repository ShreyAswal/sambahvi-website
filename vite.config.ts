import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Netlify + React Router configuration
export default defineConfig({
  plugins: [react()],
  base: "./", // keeps asset paths relative so they work on Netlify
});
