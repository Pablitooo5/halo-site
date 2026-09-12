import { useScrollProgress } from "../hooks.js";

/** Jauge de lecture en haut de fenêtre, aux couleurs de la marque. */
export default function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div
      className="progress brand-gradient"
      style={{ transform: `scaleX(${p})` }}
      aria-hidden="true"
    />
  );
}
