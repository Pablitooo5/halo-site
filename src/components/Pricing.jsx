import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { Star } from "./Icons.jsx";
import { plans } from "../data.js";

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
        Des prix clairs, <span className="text-accent">affichés.</span>
      </SectionHead>

      {/* Setup */}
      <Reveal className="mx-auto mb-7 flex max-w-[1180px] flex-col items-start justify-between gap-2 rounded-[18px] border border-dashed border-line bg-surface px-6 py-[22px] sm:flex-row sm:items-center md:px-7">
        <div>
          <span className="font-display text-2xl font-bold">Setup initial · 290 €</span>{" "}
          <span className="font-semibold text-accent">— offert dès 6 mois d'abonnement</span>
        </div>
        <span className="text-[0.95rem] text-dim">Optimisation complète + shooting photo de départ.</span>
      </Reveal>

      {/* Formules */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-stretch gap-[22px] px-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 60}
            className={`relative flex flex-col rounded-[18px] border p-[30px] transition-transform duration-300 hover:-translate-y-1 ${
              p.featured
                ? "order-first border-accent shadow-[0_0_0_1px_rgba(79,143,255,0.3),0_26px_70px_rgba(79,143,255,0.14)] md:order-none"
                : "border-line bg-surface hover:border-[#33465f]"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-[13px] left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-3.5 py-[5px] text-[0.76rem] font-bold text-[#06101f]">
                <Star className="text-gold" filled />
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
            <ul className="my-6 grid gap-3">
              {p.items.map((it) => (
                <li key={it} className="relative pl-7 text-[0.96rem] text-dim">
                  <Check />
                  {it}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                p.featured
                  ? "bg-accent text-[#06101f] shadow-[0_8px_30px_rgba(79,143,255,0.28)]"
                  : "border border-line text-ink hover:border-accent hover:bg-accent/15"
              }`}
            >
              Commencer par un audit
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="mx-auto mt-7 max-w-[1180px] px-6 text-center text-[0.98rem] text-dim">
        Option visibilité IA <span className="text-ink">+79 €/mois</span> · Supports NFC/QR{" "}
        <span className="text-ink">dès 39 €</span> · <span className="text-ink">Tarif dégressif</span> multi-établissements. Tout sans engagement.
      </Reveal>
      <Reveal className="mt-7 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[1.02rem] font-semibold text-[#06101f] shadow-[0_8px_30px_rgba(79,143,255,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(79,143,255,0.42)]"
        >
          Commencer par un audit gratuit
        </a>
      </Reveal>
    </section>
  );
}
