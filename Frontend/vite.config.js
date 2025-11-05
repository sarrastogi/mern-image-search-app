import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5004",
        changeOrigin: true,
        secure: false,
      },
      "/auth": "http://localhost:5004",
    },
  },
  plugins: [react(), tailwindcss()],
});
