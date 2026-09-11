import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { pricing } from "../data.js";

function Check() {
  return (
    <span className="absolute left-0 top-[2px] grid h-[18px] w-[18px] place-items-center rounded-full bg-accent/15" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4F8FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  return (
    <section id="tarifs" className="py-16 md:py-28">
      <SectionHead eyebrow="Les tarifs">
        Deux lignes, <span className="text-accent">affichées.</span>
      </SectionHead>

      <Reveal as="p" className="mx-auto -mt-4 mb-10 max-w-[640px] px-6 text-center text-[1.02rem] text-dim">
        Pas de devis à rallonge, pas de prix sur demande. Voilà ce que ça coûte.
      </Reveal>

      <div className="mx-auto grid max-w-[880px] grid-cols-1 items-stretch gap-[22px] px-6 md:grid-cols-2">
        {pricing.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 80}
            className={`relative flex flex-col rounded-[18px] border p-[30px] ${
              p.featured
                ? "border-accent shadow-[0_0_0_1px_rgba(79,143,255,0.3),0_26px_70px_rgba(79,143,255,0.14)]"
                : "border-line bg-surface"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-[13px] left-1/2 inline-flex -translate-x-1/2 items-center whitespace-nowrap rounded-full bg-accent px-3.5 py-[5px] text-[0.76rem] font-bold text-[#06101f]">
                {p.badge}
              </span>
            )}
            <div className={`font-display text-[0.95rem] font-bold uppercase tracking-[0.04em] ${p.featured ? "text-accent" : "text-dim"}`}>
              {p.name}
            </div>
            <div className="mb-1 mt-2.5 font-display text-[2.4rem] font-bold">
              {p.price}
              <span className="font-body text-base font-medium text-dim"> {p.period}</span>
            </div>
            <ul className="mt-6 grid gap-3">
              {p.items.map((it) => (
                <li key={it} className="relative pl-7 text-[0.96rem] text-dim">
                  <Check />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="mx-auto mt-8 max-w-[880px] px-6 text-center text-[0.98rem] text-dim">
        Plaque supplémentaire <span className="text-ink">29 €</span> · Tarif dégressif pour plusieurs établissements.
        <br className="hidden sm:block" />
        <span className="text-dim">Rien ne se souscrit ni ne se paie sur ce site : on commence toujours par un audit gratuit.</span>
      </Reveal>

      <Reveal className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[1.02rem] font-semibold text-[#06101f] shadow-[0_8px_30px_rgba(79,143,255,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(79,143,255,0.42)]"
        >
          Demander mon audit gratuit
        </a>
      </Reveal>
    </section>
  );
}
