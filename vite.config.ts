import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site: https://nyakorare.github.io/ — served from repo root, base is "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
