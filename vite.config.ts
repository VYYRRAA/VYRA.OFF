
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// To deploy to GitHub Pages, set the base option to your repo name, e.g. "/your-repo-name/"
// For local development or normal deployment, just leave this as "/"
const repoBase = process.env.VITE_BASE_PATH || "/";

export default defineConfig(({ mode }) => ({
  base: repoBase, // Change to e.g. "/your-repo-name/" for GitHub Pages
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
