import Reveal from "./Reveal.jsx";
import { Check } from "./Icons.jsx";
import { pricing } from "../data.js";

export default function Pricing() {
  return (
    <section id="tarifs" className="border-b border-line">
      <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-20">
        <Reveal>
          <h2 className="text-[1.7rem] font-bold md:text-[2.2rem]">Le tarif, sans détour.</h2>
          <p className="mt-3 max-w-[52ch] text-muted">
            Un seul tarif pour tous les commerces, quelle que soit leur taille. Rien ne s'achète sur
            ce site : on en parle d'abord, vous décidez ensuite.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-2 md:gap-6">
          {pricing.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 60}
              className={`rounded-2xl border p-6 md:p-8 ${
                p.featured ? "border-accent bg-accent-soft" : "border-line bg-paper"
              }`}
            >
              <h3 className="text-[1.05rem] font-semibold text-muted">{p.name}</h3>
              <p className="mt-2 font-display text-[2.6rem] font-bold leading-none">{p.price}</p>
              <p className="mt-1.5 text-[0.92rem] text-muted">{p.period}</p>
              <ul className="mt-6 grid gap-2.5 border-t border-line pt-6">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem]">
                    <span className="mt-0.5 text-accent"><Check size={17} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 text-[0.88rem] text-muted">
          Prix nets, TVA non applicable (article 293 B du CGI). Vous restez propriétaire de votre
          fiche Google et de toutes les photos.
        </Reveal>
      </div>
    </section>
  );
}
