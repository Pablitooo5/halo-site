import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import { pricing } from "../data.js";

export default function Pricing() {
  return (
    <Section id="tarifs" num="02" kicker="Le tarif">
      <Reveal>
        <h2 className="max-w-[20ch] text-[1.8rem] md:text-[2.5rem]">Un seul tarif, le même pour tous.</h2>
        <p className="mt-4 max-w-[52ch] text-muted">
          Quelle que soit la taille du commerce. Rien ne s’achète sur ce site : on en parle
          d’abord, vous décidez ensuite.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <div className="border-t border-ink pt-4">
              <p className="label">{p.name}</p>
              <p className="mt-3 font-display text-[3rem] leading-none">{p.price}</p>
              <p className="mt-2 text-[0.95rem] text-muted">{p.period}</p>
              <ul className="dash-list mt-6 grid gap-1.5 text-[0.95rem] text-muted">
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 max-w-[60ch] text-[0.88rem] text-muted">
        Prix nets, TVA non applicable (article 293 B du CGI). Vous restez propriétaire de votre
        fiche Google et de toutes les photos.
      </Reveal>
    </Section>
  );
}
