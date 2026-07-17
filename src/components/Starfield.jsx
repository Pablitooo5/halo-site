import { useEffect, useMemo, useRef } from "react";

const STAR_COUNT = 46;

export default function Starfield() {
  const ref = useRef(null);

  // Champ d'étoiles fixes (généré une fois)
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => {
        const size = (Math.random() * 1.6 + 0.8).toFixed(2);
        return {
          key: i,
          gold: Math.random() > 0.82,
          style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${(Math.random() * 100).toFixed(2)}%`,
            top: `${(Math.random() * 100).toFixed(2)}%`,
            "--tw": `${(Math.random() * 2.5 + 2.5).toFixed(2)}s`,
            animationDelay: `${(Math.random() * 3).toFixed(2)}s`,
          },
        };
      }),
    []
  );

  // Étoiles filantes à intervalles aléatoires (désactivées en reduced-motion)
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer;
    let alive = true;
    const spawn = () => {
      if (!alive) return;
      const el = document.createElement("div");
      el.className = "shooting";
      const angle = 18 + Math.random() * 24;
      el.style.setProperty("--angle", `${angle}deg`);
      el.style.setProperty("--len", `${(440 + Math.random() * 220).toFixed(0)}px`);
      el.style.setProperty("--dur", `${(1.2 + Math.random() * 0.8).toFixed(2)}s`);
      el.style.left = `${(Math.random() * 55 - 5).toFixed(1)}%`;
      el.style.top = `${(Math.random() * 45).toFixed(1)}%`;
      el.addEventListener("animationend", () => el.remove());
      host.appendChild(el);
      timer = setTimeout(spawn, 3000 + Math.random() * 3000);
    };
    timer = setTimeout(spawn, 1500 + Math.random() * 2000);

    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} className="hero-stars" aria-hidden="true">
      {stars.map((s) => (
        <span key={s.key} className="hero-star" style={{ ...s.style, background: s.gold ? "#F0B429" : "#fff" }} />
      ))}
    </div>
  );
}
