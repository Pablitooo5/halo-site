import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import Arrow from "./Arrow.jsx";
import { heroPhoto, heroMeta } from "../data.js";

/* Carte d'ouverture en deux volets : le texte sur un aplat profond,
   la photo dans son propre cadre à droite. Sur téléphone, la photo
   passe au-dessus et le texte suit. */
export default function Hero() {
  return (
    <section id="top" className="px-4 md:px-6">
      <div className="card mx-auto grid max-w-[1180px] overflow-hidden md:grid-cols-[1.05fr_0.95fr]">
        {/* volet image */}
        <div className="relative order-1 min-h-[240px] sm:min-h-[300px] md:order-2 md:min-h-[600px]">
          <Photo photo={heroPhoto} tone="dark" rounded="rounded-none" fill tagCorner="tr" />
        </div>

        {/* volet texte */}
        <div className="on-dark order-2 flex flex-col justify-between gap-10 p-7 md:order-1 md:gap-14 md:p-12">
          <Reveal>
            <p className="label">Photos et avis Google · Bordeaux</p>
            <h1 className="mt-5 text-[2.1rem] sm:text-[2.6rem] md:text-[3.2rem]">
              J’améliore l’image et la réputation de votre commerce sur Google.
            </h1>
            <p className="mt-6 max-w-[46ch] text-[1rem] text-muted">
              Des photos faites sur place au matériel professionnel, une plaque sans contact à
              votre comptoir, et une réponse à chacun de vos avis sous 24 heures.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#contact" className="btn btn--amber">
                Demander un rendez-vous
                <span className="btn-arrow"><Arrow /></span>
              </a>
              <a href="#travail" className="text-[0.94rem] text-white/70 underline underline-offset-4 transition-colors hover:text-white">
                Voir comment je travaille
              </a>
            </div>
          </Reveal>

          <Reveal delay={140} as="dl" className="meta">
            {heroMeta.map((m) => (
              <div key={m.k}>
                <dt>{m.k}</dt>
                <dd>{m.v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
