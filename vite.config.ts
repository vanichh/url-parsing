import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

import { name } from "./package.json";

export default defineConfig({
  plugins: [react()],
  base: `/${name}/`,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
});
