import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/docs": { target: "http://127.0.0.1:4321", changeOrigin: true },
      "/doc": {
        target: "http://127.0.0.1:4321",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/doc/, "/docs"),
      },
    },
  },
})
