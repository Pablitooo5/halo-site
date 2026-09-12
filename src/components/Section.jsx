import Reveal from "./Reveal.jsx";

/**
 * Gabarit de section : filet coloré, numéro et intitulé dans la marge,
 * le contenu à droite. Sur petit écran, la marge repasse au-dessus.
 */
export default function Section({ id, num, kicker, children, className = "", deep = false }) {
  return (
    <section id={id} className={`${deep ? "on-deep" : "border-b border-rule"} ${className}`}>
      <div className="mx-auto grid max-w-[1020px] gap-6 px-6 py-16 md:grid-cols-[120px_1fr] md:gap-10 md:py-24">
        <Reveal className="reveal--side md:pt-2">
          <span className="tick brand-gradient" />
          <p className={deep ? "label" : "label label--blue"}>
            {num}
          </p>
          <p className="label mt-1">{kicker}</p>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
