import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import { useParallax } from "../hooks.js";
import { heroPhoto } from "../data.js";

/* Le titre et le texte restent dans la colonne de lecture (max 1020 px).
   La photo, elle, file jusqu'au bord droit de la page.
   La colonne de gauche est calée sur la marge du titre : sa largeur
   utile vaut la demi-colonne (510 px) et son ml-auto la ramène
   exactement sous le « J » du titre, quelle que soit la largeur d'écran. */
export default function Hero() {
  const [photoRef, y] = useParallax(26);

  return (
    <section id="top" className="overflow-hidden border-b border-rule">
      <div className="mx-auto max-w-[1020px] px-6 pt-16 md:pt-24">
        <Reveal>
          <span className="tick brand-gradient" />
          <p className="label">Photos et avis Google · Bordeaux</p>
        </Reveal>

        <Reveal delay={90} as="h1" className="mt-5 max-w-[18ch] text-[2.3rem] leading-[1.08] sm:text-[3rem] md:text-[3.9rem]">
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
      </div>

      <div className="mt-12 grid gap-10 pb-16 md:grid-cols-2 md:gap-0 md:pb-24">
        <Reveal delay={160} className="mx-auto w-full max-w-[1020px] px-6 md:ml-auto md:mr-0 md:max-w-[510px] md:pr-10">
          <p className="max-w-[42ch] text-[1.08rem] text-muted">
            Des photos faites sur place, une réponse écrite à chaque avis. Ce que vos clients
            voient avant de pousser votre porte, je m’en occupe — vous n’avez rien à faire.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn text-center">Demander un état des lieux</a>
            <a href="#travail" className="btn btn--ghost text-center">Voir le travail</a>
          </div>

          <p className="mt-6 text-[0.92rem] text-muted">
            Gratuit, sans suite obligatoire. Réponse sous 48 heures.
          </p>
        </Reveal>

        <Reveal delay={220} className="px-6 md:px-0">
          <figure className="m-0" ref={photoRef}>
            <div className="unveil" style={{ transform: `translateY(${y}px)` }}>
              <Photo photo={heroPhoto} ratio="5 / 4" />
            </div>
            <figcaption className="caption mt-3 block pr-0 md:pr-6">
              La devanture, telle qu’elle apparaît sur la fiche.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
