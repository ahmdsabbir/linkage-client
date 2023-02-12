import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  root: "src",
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://192.168.101.14:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
