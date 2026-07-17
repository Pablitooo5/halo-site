import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { stats } from "../data.js";

export default function Problem() {
  return (
    <section id="probleme" className="py-16 md:py-28">
      <SectionHead eyebrow="Le problème">
        46 % des recherches Google sont locales.
        <br />
        <span className="text-accent">Votre fiche décide qui gagne.</span>
      </SectionHead>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.num}
            delay={i * 60}
            className="rounded-[18px] border border-line bg-surface p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-[#33465f]"
          >
            <div className={`font-display text-[clamp(2.2rem,4vw,2.9rem)] font-bold leading-none ${s.tone === "gold" ? "text-gold" : "text-accent"}`}>
              {s.num}
            </div>
            <p className="mt-3 text-[0.96rem] text-dim">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
