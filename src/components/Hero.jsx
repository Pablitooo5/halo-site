import Photo from "./Photo.jsx";
import { heroPhoto } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-[1020px] px-6 py-14 md:py-24">
        <p className="label">Photos et avis Google · Bordeaux</p>

        <h1 className="mt-6 max-w-[18ch] text-[2.3rem] leading-[1.08] sm:text-[3rem] md:text-[3.9rem]">
          J’améliore l’image et la réputation de votre commerce sur Google.
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          <div>
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
          </div>

          <figure className="m-0">
            <Photo photo={heroPhoto} ratio="5 / 4" />
            <figcaption className="caption mt-3 block">
              La devanture, telle qu’elle apparaît sur la fiche.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
