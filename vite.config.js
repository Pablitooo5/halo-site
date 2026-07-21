import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// En production (GitHub Pages), le site est servi sous /halo-site/.
// En dev, base reste "/" pour ne pas changer l'URL locale.
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/halo-site/" : "/",
  plugins: [react(), tailwindcss()],
}));
