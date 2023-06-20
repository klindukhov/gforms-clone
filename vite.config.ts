import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/ui/styles"),
      "@components": path.resolve(__dirname, "./src/ui/components"),
      "@pages": path.resolve(__dirname, "./src/ui/pages"),
    },
  },
  plugins: [react()],
});
