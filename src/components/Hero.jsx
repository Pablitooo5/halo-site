import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import Stars from "./Stars.jsx";
import HeroBackdrop from "./HeroBackdrop.jsx";
import { useParallax } from "../hooks.js";
import { heroPhoto } from "../data.js";

/* Deux colonnes franches : le texte à gauche, la photo à droite,
   alignées sur la même ligne haute. Pas d'escalier entre les deux. */
export default function Hero() {
  const [photoRef, y] = useParallax(20);

  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <HeroBackdrop />

      <div className="relative mx-auto grid max-w-[1020px] gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-24">
        <div>
          <Reveal>
            <span className="tick brand-gradient" />
            <p className="label">Photos et avis Google · Bordeaux</p>
          </Reveal>

          <Reveal delay={90} as="h1" className="mt-5 text-[2.2rem] leading-[1.1] sm:text-[2.7rem] md:text-[3.1rem]">
            J’améliore{" "}
            <span className="relative whitespace-nowrap text-blue-mid">
              l’image
              <span className="brand-gradient absolute -bottom-1 left-0 h-[3px] w-full" aria-hidden="true" />
            </span>{" "}
            et la{" "}
            <span className="relative whitespace-nowrap text-blue-mid">
              réputation
              <span className="brand-gradient absolute -bottom-1 left-0 h-[3px] w-full" aria-hidden="true" />
            </span>{" "}
            de votre commerce sur Google.
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[44ch] text-[1.06rem] text-muted">
              Des photos faites sur place, au matériel professionnel. Des avis travaillés pour de
              bon : une plaque sans contact à votre comptoir pour en récolter, et des réponses
              rapides à ceux qui arrivent.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn text-center">Demander un état des lieux</a>
              <a href="#travail" className="btn btn--ghost text-center">Voir le travail</a>
            </div>

            <p className="mt-6 text-[0.92rem] text-muted">
              Gratuit, sans suite obligatoire. Réponse sous 48 heures.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <figure className="m-0" ref={photoRef}>
            <div className="unveil" style={{ transform: `translateY(${y}px)` }}>
              <Photo photo={heroPhoto} ratio="5 / 4" />
            </div>
            <figcaption className="mt-3 flex items-center gap-2.5">
              <Stars />
              <span className="caption">La devanture, telle qu’elle apparaît sur la fiche.</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
