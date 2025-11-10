import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
        png: {
        // https://sharp.pixelplumbing.com/api-output#png
          quality: 50,
        },
      })
    ,],
  base: "/",
});
