import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Pages({
      dirs: "src/pages",
      extensions: ["tsx", "ts", "jsx", "js"],
      resolver: "react",
      routeStyle: "next",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../packages/ui"),
    },
  },
});
