import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// GitHub Pages serves 404.html for any path without a matching file, so shipping a
// copy of index.html lets client-side routes like /collection load on a direct visit.
const spaFallback = (): Plugin => ({
  name: "spa-404-fallback",
  enforce: "post",
  generateBundle(_options, bundle) {
    const index = bundle["index.html"];
    if (index?.type === "asset") {
      this.emitFile({
        type: "asset",
        fileName: "404.html",
        source: index.source,
      });
    }
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    spaFallback(),
    ViteImageOptimizer({
        png: {
        // https://sharp.pixelplumbing.com/api-output#png
          quality: 50,
        },
      })
    ,],
  base: "/",
});
