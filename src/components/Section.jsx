import Reveal from "./Reveal.jsx";

/**
 * Gabarit de section : un numéro et un intitulé dans la marge de gauche,
 * le contenu à droite. Sur petit écran, la marge repasse au-dessus.
 */
export default function Section({ id, num, kicker, children, className = "" }) {
  return (
    <section id={id} className={`border-b border-rule ${className}`}>
      <div className="mx-auto grid max-w-[1020px] gap-6 px-6 py-14 md:grid-cols-[110px_1fr] md:gap-10 md:py-20">
        <Reveal className="md:pt-2">
          <p className="label">
            {num} <span className="mx-1 text-rule">/</span> {kicker}
          </p>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
