import Reveal from "./Reveal.jsx";
import Arrow from "./Arrow.jsx";
import { pricing, pricingNotes } from "../data.js";

export default function Pricing() {
  return (
    <section id="tarifs" className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="card on-dark mx-auto max-w-[1180px] p-7 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.25fr] md:gap-14">
          <Reveal>
            <p className="label">Le tarif</p>
            <h2 className="mt-4 text-[1.9rem] md:text-[2.6rem]">Un seul tarif, le même pour tous.</h2>
            <p className="mt-4 max-w-[34ch] text-muted">
              Quelle que soit la taille du commerce. Tout est écrit ici, il n’y a pas de ligne en
              plus à la fin du mois.
            </p>
            <a href="#contact" className="btn btn--amber mt-8">
              Demander un état des lieux
              <span className="btn-arrow"><Arrow /></span>
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pricing.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 110}
                className="rounded-[20px] p-6"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <span
                  className="mb-5 block h-1 w-12 rounded-full"
                  style={{ background: p.accent === "amber" ? "var(--color-amber)" : "var(--color-blue)" }}
                  aria-hidden="true"
                />
                <p className="label">{p.name}</p>
                <p className="mt-3 font-display text-[2.6rem] font-semibold leading-none">{p.price}</p>
                <p className="mt-2 text-[0.88rem] text-muted">{p.period}</p>
                <ul className="mt-6 grid gap-3 border-t border-line pt-6 text-[0.9rem] text-muted">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full"
                        style={{ background: p.accent === "amber" ? "var(--color-amber)" : "var(--color-blue)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 border-t border-line pt-8">
          <p className="label">Les précisions</p>
          <ul className="mt-5 grid gap-3 text-[0.88rem] text-muted sm:grid-cols-2 lg:grid-cols-3">
            {pricingNotes.map((n) => (
              <li key={n} className="rounded-[12px] p-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
