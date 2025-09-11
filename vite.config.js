import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://backend.minutos.shop/", // your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
