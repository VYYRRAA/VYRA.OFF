
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// For GitHub Pages deployment, set the base path to match your repository name
// Based on the URL in the screenshot: https://vyyra.github.io/VYRA.OF/
const repoBase = process.env.VITE_BASE_PATH || "/VYRA.OF/";

export default defineConfig(({ mode }) => ({
  base: repoBase, // Set to your GitHub repo name with leading and trailing slashes
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode !== 'production',
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
