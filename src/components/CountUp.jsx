import { useEffect, useState } from "react";
import { useInView, prefersReducedMotion } from "../hooks.js";

/**
 * Fait défiler le nombre en tête de `value` quand le bloc entre à l'écran.
 * « 490 € » anime 490 et conserve « € ». Figé si l'utilisateur refuse le mouvement.
 */
export default function CountUp({ value, duration = 1000, className = "" }) {
  const [ref, seen] = useInView({ threshold: 0.4 });
  const match = String(value).match(/^(\D*)(\d+)(.*)$/s);
  const target = match ? Number(match[2]) : null;
  const [n, setN] = useState(target === null || prefersReducedMotion() ? target : 0);

  useEffect(() => {
    if (!seen || target === null || prefersReducedMotion()) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, target, duration]);

  if (target === null) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {match[1]}
      {n.toLocaleString("fr-FR")}
      {match[3]}
    </span>
  );
}
