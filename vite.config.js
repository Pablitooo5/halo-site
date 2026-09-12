import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base = "/" par défaut (Vercel, domaine perso, dev).
// GitHub Pages sert le site sous /halo-site/ : son workflow définit VITE_BASE.
export default defineConfig(() => ({
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
  // Le port du serveur de dev peut être imposé par l'environnement (aperçu intégré).
  server: process.env.PORT ? { port: Number(process.env.PORT), strictPort: true } : undefined,
}));
