import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { compare } from "../data.js";

export default function Difference() {
  return (
    <section id="difference" className="py-16 md:py-28">
      <SectionHead eyebrow="La différence">
        Ni un logiciel, <span className="text-accent">ni un démarcheur.</span>
      </SectionHead>

      <div className="mx-auto mb-9 grid max-w-[1180px] grid-cols-1 gap-[22px] px-6 md:grid-cols-3">
        {compare.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 60}
            className={`rounded-[18px] border p-[30px] ${
              c.halo
                ? "border-accent bg-gradient-to-b from-accent/10 to-surface shadow-[0_24px_60px_rgba(79,143,255,0.12)]"
                : "border-line bg-surface"
            } ${c.muted ? "opacity-[0.78]" : ""}`}
          >
            <p className={`mb-2.5 text-[0.8rem] uppercase tracking-[0.08em] ${c.halo ? "text-accent" : "text-dim"}`}>
              {c.kicker}
            </p>
            <h3 className="mb-3 text-[1.2rem] font-semibold">{c.title}</h3>
            <p className="text-[0.98rem] text-dim">{c.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="relative mx-auto max-w-[900px] overflow-hidden rounded-[18px] border border-line bg-surface2 px-6 py-8 text-center text-[1.05rem] md:px-9">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(79,143,255,0.10),transparent_60%)]" />
        <p className="relative z-10">
          <strong className="font-semibold text-accent">Pas de faux avis. Pas de fausse promesse de position.</strong>{" "}
          Pas de filtrage de vos clients — c'est interdit par Google et ça fait suspendre votre fiche. Halo travaille proprement, c'est le seul moyen de durer.
        </p>
      </Reveal>
    </section>
  );
}
