import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import Photo from "./Photo.jsx";
import { services, workPhotos } from "../data.js";

export default function Services() {
  return (
    <Section id="travail" num="01" kicker="Le travail">
      <Reveal as="h2" className="max-w-[24ch] text-[1.8rem] md:text-[2.5rem]">
        Ce qui décide un client avant qu’il entre : vos photos et vos avis.
      </Reveal>
      <Reveal delay={80} className="mt-4 max-w-[54ch] text-muted">
        Ce sont les deux premières choses qu’on voit de vous sur Google. Je prends les deux en
        charge, de bout en bout.
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {services.map((s, i) => {
          const amber = s.accent === "amber";
          return (
            <Reveal key={s.title} delay={i * 120}>
              <span
                className="mb-4 block h-[3px] w-16"
                style={{ background: amber ? "var(--color-amber)" : "var(--color-blue)" }}
                aria-hidden="true"
              />
              <h3 className="text-[1.35rem]">{s.title}</h3>
              <p className="mt-3 text-muted">{s.text}</p>
              <ul className={`mark-list ${amber ? "mark-list--amber" : ""} mt-5 grid gap-2 text-[0.95rem] text-muted`}>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-14 grid grid-cols-3 gap-3 md:gap-4">
        {workPhotos.map((p, i) => (
          <Reveal key={p.slot} delay={i * 130}>
            <div className="unveil">
              <Photo photo={p} ratio="4 / 3" />
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="caption mt-3">
        Un passage suffit à alimenter la fiche pendant des mois.
      </Reveal>
    </Section>
  );
}
