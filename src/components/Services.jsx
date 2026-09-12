import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import Photo from "./Photo.jsx";
import { services, workPhotos } from "../data.js";

export default function Services() {
  return (
    <Section id="travail" num="01" kicker="Le travail">
      <Reveal as="h2" className="max-w-[22ch] text-[1.8rem] md:text-[2.5rem]">
        Deux choses, et je m’en occupe entièrement.
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <h3 className="border-t border-ink pt-4 text-[1.35rem]">{s.title}</h3>
            <p className="mt-3 text-muted">{s.text}</p>
            <ul className="dash-list mt-5 grid gap-1.5 text-[0.95rem] text-muted">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {workPhotos.map((p) => (
            <Photo key={p.slot} photo={p} ratio="4 / 3" />
          ))}
        </div>
        <p className="caption mt-3">
          Un passage suffit à alimenter la fiche pendant des mois.
        </p>
      </Reveal>
    </Section>
  );
}
