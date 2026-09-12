import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import { useParallax } from "../hooks.js";
import { heroPhoto } from "../data.js";

export default function Hero() {
  const [photoRef, y] = useParallax(26);

  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      {/* halo diffus aux couleurs du logo, très en retrait */}
      <div
        className="pointer-events-none absolute -right-48 -top-52 h-[620px] w-[620px] rounded-full opacity-[0.13] blur-3xl"
        style={{ background: "radial-gradient(circle, #4F93FE 0%, #4F93FE 34%, #F5B01E 68%, transparent 78%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1020px] px-6 py-16 md:py-24">
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

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          <Reveal delay={160}>
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

          <Reveal delay={220}>
            <figure className="m-0" ref={photoRef}>
              <div className="unveil" style={{ transform: `translateY(${y}px)` }}>
                <Photo photo={heroPhoto} ratio="5 / 4" />
              </div>
              <figcaption className="caption mt-3 block">
                La devanture, telle qu’elle apparaît sur la fiche.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
