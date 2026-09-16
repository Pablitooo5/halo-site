import Reveal from "./Reveal.jsx";
import Arrow from "./Arrow.jsx";
import { pricingBody, pricingNotes } from "../data.js";

/* Les montants sont retirés le temps que la grille se cale.
   Le bloc reste debout et transforme l'absence de prix en prise de contact :
   pas de « bientôt disponible », qui ferait site inachevé. */
export default function Pricing() {
  return (
    <section id="tarifs" className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="card on-dark mx-auto max-w-[1180px] p-7 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="label">Le tarif</p>
            <h2 className="mt-4 text-[1.9rem] md:text-[2.6rem]">Un seul tarif, le même pour tous.</h2>
            <a href="#contact" className="btn btn--amber mt-8">
              Demander un rendez-vous
              <span className="btn-arrow"><Arrow /></span>
            </a>
          </Reveal>

          <Reveal delay={110}>
            {pricingBody.map((t, i) => (
              <p key={t} className={`max-w-[46ch] text-[1.02rem] text-muted ${i ? "mt-4" : ""}`}>
                {t}
              </p>
            ))}

            <ul className="mt-9 grid gap-0 border-t border-line">
              {pricingNotes.map((n) => (
                <li
                  key={n}
                  className="flex items-start gap-3 border-b border-line py-3.5 text-[0.92rem] text-muted"
                >
                  <span
                    className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: "var(--color-amber)" }}
                    aria-hidden="true"
                  />
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
