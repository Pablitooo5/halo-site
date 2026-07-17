import Starfield from "./Starfield.jsx";
import Badge from "./Badge.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-6 pb-16 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:pb-24 md:pt-12 md:min-h-[min(88vh,760px)]"
    >
      {/* Texte */}
      <div className="relative z-10 order-2 md:order-1">
        <p className="mb-5 inline-block rounded-full border border-line bg-accent/15 px-3.5 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Fiches Google Business · Bordeaux
        </p>
        <h1 className="mb-5 text-[clamp(2.1rem,5.2vw,3.6rem)] font-bold">
          Vos clients vous cherchent sur Google.
          <br />
          <span className="text-accent">C'est le concurrent qui apparaît.</span>
        </h1>
        <p className="mb-7 max-w-[32ch] text-[clamp(1.05rem,1.5vw,1.22rem)] text-dim">
          Halo optimise votre fiche Google, l'anime chaque mois et fait grimper vos avis. Vous récupérez les appels.
        </p>
        <div className="mb-7 flex flex-wrap gap-3.5">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[1.02rem] font-semibold text-[#06101f] shadow-[0_8px_30px_rgba(79,143,255,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(79,143,255,0.42)]"
          >
            Recevoir mon audit gratuit
          </a>
          <a
            href="#etapes"
            className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-[1.02rem] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/15"
          >
            Voir comment ça marche
          </a>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2.5 text-[0.88rem] text-dim">
          {["Sans engagement", "Résultats mesurés chaque mois", "Vous restez propriétaire de votre fiche"].map((t) => (
            <li key={t} className="relative pl-5">
              <span className="absolute left-0 top-[0.5em] h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_1px_rgba(79,143,255,0.6)]" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Visuel — badge 3D + effets */}
      <div className="relative order-1 grid min-h-[400px] place-items-center md:order-2 md:min-h-[620px]">
        <Starfield />
        <div className="hero-halo" aria-hidden="true" />
        <Badge />
      </div>
    </section>
  );
}
