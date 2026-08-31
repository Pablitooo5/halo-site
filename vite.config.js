import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base = "/" par défaut (Vercel, domaine perso, dev).
// GitHub Pages sert le site sous /halo-site/ : son workflow définit VITE_BASE.
export default defineConfig(() => ({
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
}));
