import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allow external connections for Docker
    port: 5173,
    watch: {
      usePolling: true, // Enable polling for Docker volumes on Windows
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
});
