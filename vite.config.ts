import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Netlify + React Router configuration
export default defineConfig({
  plugins: [react()],
  base: "/", // ensures all image paths are absolute and load correctly
});
