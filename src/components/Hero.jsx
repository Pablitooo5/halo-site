import Photo from "./Photo.jsx";
import { StarFilled } from "./Icons.jsx";
import { heroPhoto } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 px-6 py-14 md:grid-cols-[1.15fr_1fr] md:gap-14 md:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-[0.82rem] font-semibold text-accent">
            Bordeaux et alentours
          </p>

          <h1 className="text-[2.1rem] font-bold sm:text-[2.6rem] md:text-[3.1rem]">
            Je photographie votre commerce et je réponds à tous vos avis Google.
          </h1>

          <p className="mt-5 max-w-[46ch] text-[1.06rem] text-muted">
            Vous n'avez rien à faire. Je viens sur place quatre fois par an, je publie les photos
            sur votre fiche, et chaque avis reçoit une réponse sous 24 heures.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-[1rem] font-semibold text-white transition-colors hover:bg-[#1547b5]"
            >
              Recevoir mon état des lieux gratuit
            </a>
            <a
              href="#tarifs"
              className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3.5 text-[1rem] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Voir les tarifs
            </a>
          </div>

          <p className="mt-5 text-[0.9rem] text-muted">
            490 € de mise en route, puis 249 € par mois · Sans engagement · Réponse sous 48 h
          </p>
        </div>

        <div>
          <Photo photo={heroPhoto} ratio="4 / 5" className="shadow-[0_18px_40px_-24px_rgba(13,27,42,0.45)]" />
          <p className="mt-3 flex items-center gap-2 text-[0.85rem] text-muted">
            <span className="flex text-gold" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => <StarFilled key={i} size={14} />)}
            </span>
            Ce que vos clients voient avant de pousser votre porte.
          </p>
        </div>
      </div>
    </section>
  );
}
