import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base fixes asset URLs for GitHub Pages project sites (…/repo/) and avoids
// broken /assets/… requests that can return wrong MIME types. For a user site at
// repo root (nyakorare.github.io), ./ still resolves to the same URLs as /.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
