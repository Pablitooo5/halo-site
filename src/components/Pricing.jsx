import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import { pricing, pricingNotes } from "../data.js";

export default function Pricing() {
  return (
    <Section id="tarifs" num="02" kicker="Le tarif" deep>
      <Reveal>
        <h2 className="max-w-[20ch] text-[1.8rem] md:text-[2.5rem]">Un seul tarif, le même pour tous.</h2>
        <p className="mt-4 max-w-[54ch] text-muted">
          Quelle que soit la taille du commerce. Tout est écrit ici, il n’y a pas de ligne en plus
          à la fin du mois.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <span
              className="mb-4 block h-[3px] w-16"
              style={{ background: p.accent === "amber" ? "var(--color-amber)" : "var(--color-blue)" }}
              aria-hidden="true"
            />
            <p className="label">{p.name}</p>
            <p className="mt-3 font-display text-[3.2rem] leading-none">{p.price}</p>
            <p className="mt-2 text-[0.95rem] text-muted">{p.period}</p>
            <ul className="mark-list mark-list--amber mt-6 grid gap-2 text-[0.95rem] text-muted">
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 border-t border-rule pt-8">
        <p className="label">Les précisions</p>
        <ul className="mark-list mt-4 grid max-w-[62ch] gap-2 text-[0.92rem] text-muted">
          {pricingNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <a href="#contact" className="btn btn--light mt-8 inline-block">Demander un état des lieux</a>
      </Reveal>
    </Section>
  );
}
