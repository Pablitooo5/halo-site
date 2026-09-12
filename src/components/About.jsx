import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { portrait, facts } from "../data.js";

export default function About() {
  return (
    <section id="moi" className="border-b border-line bg-ground">
      <div className="mx-auto grid max-w-[1080px] items-start gap-9 px-6 py-14 md:grid-cols-[240px_1fr] md:gap-12 md:py-20">
        <Reveal className="max-w-[240px]">
          <Photo photo={portrait} ratio="1 / 1" rounded="rounded-2xl" />
        </Reveal>

        <Reveal delay={60}>
          <h2 className="text-[1.7rem] font-bold md:text-[2.1rem]">Vous avez un interlocuteur, pas un logiciel.</h2>
          <p className="mt-4 max-w-[56ch] text-muted">
            Je m'appelle Pablo, je suis basé à Bordeaux. C'est moi qui viens photographier votre
            commerce, moi qui écris les réponses à vos avis, et moi qui réponds quand vous appelez.
          </p>
          <p className="mt-4 max-w-[56ch] text-muted">
            Halo démarre : je n'ai pas encore de témoignages à vous montrer, et je préfère vous le
            dire plutôt que d'en inventer. Ce que je peux faire, c'est vous montrer gratuitement
            l'état de votre fiche aujourd'hui. Vous jugerez sur pièce.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.num}>
                <dt className="font-display text-[1.9rem] font-bold leading-none text-accent">{f.num}</dt>
                <dd className="mt-1.5 text-[0.92rem] text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.8rem] text-muted/80">
            Chiffres issus d'études publiques sur la recherche locale, pas de résultats clients Halo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
