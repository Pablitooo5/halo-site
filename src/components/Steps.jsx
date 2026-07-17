import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { steps } from "../data.js";

export default function Steps() {
  return (
    <section id="etapes" className="py-16 md:py-28">
      <SectionHead eyebrow="Comment ça marche">
        Trois étapes, <span className="text-accent">et vous n'avez rien à faire.</span>
      </SectionHead>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 80} className="pt-2">
            <div className="font-display text-5xl font-bold leading-none text-line">{s.num}</div>
            <h3 className="mb-2 mt-3 text-[1.25rem] font-semibold">{s.title}</h3>
            <p className="text-dim">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
