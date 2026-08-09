import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/docs": { target: "http://127.0.0.1:4321", changeOrigin: true },
      // Astro's development renderer emits Vite module URLs outside the
      // /docs prefix (notably /@fs). Forward them as well so the docs page
      // is not accidentally compiled by the marketing Vite instance.
      "/@fs": { target: "http://127.0.0.1:4321", changeOrigin: true },
      "/@id": { target: "http://127.0.0.1:4321", changeOrigin: true },
      "/doc": {
        target: "http://127.0.0.1:4321",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/doc/, "/docs"),
      },
    },
  },
})
