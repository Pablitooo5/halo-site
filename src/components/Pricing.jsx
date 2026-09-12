import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import { pricing } from "../data.js";

export default function Pricing() {
  return (
    <Section id="tarifs" num="02" kicker="Le tarif" deep>
      <Reveal>
        <h2 className="max-w-[20ch] text-[1.8rem] md:text-[2.5rem]">Un seul tarif, le même pour tous.</h2>
        <p className="mt-4 max-w-[52ch] text-muted">
          Quelle que soit la taille du commerce. Rien ne s’achète sur ce site : on en parle
          d’abord, vous décidez ensuite.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <span
              className="mb-4 block h-[3px] w-16"
              style={{ background: i === 0 ? "var(--color-blue)" : "var(--color-amber)" }}
              aria-hidden="true"
            />
            <p className="label">{p.name}</p>
            <p className="mt-3 font-display text-[3.2rem] leading-none">{p.price}</p>
            <p className="mt-2 text-[0.95rem] text-muted">{p.period}</p>
            <ul className="dash-list dash-list--light mt-6 grid gap-1.5 text-[0.95rem] text-muted">
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-col gap-5 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[46ch] text-[0.88rem] text-muted">
          Prix nets, TVA non applicable (article 293 B du CGI). Vous restez propriétaire de votre
          fiche Google et de toutes les photos.
        </p>
        <a href="#contact" className="btn btn--light shrink-0 text-center">Demander un état des lieux</a>
      </Reveal>
    </Section>
  );
}
