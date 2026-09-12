import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import Photo from "./Photo.jsx";
import { portrait, facts } from "../data.js";

export default function About() {
  return (
    <Section id="moi" num="03" kicker="L’interlocuteur" className="bg-ground">
      <div className="grid gap-10 md:grid-cols-[1fr_200px] md:gap-12">
        <Reveal>
          <h2 className="max-w-[20ch] text-[1.8rem] md:text-[2.5rem]">
            Un interlocuteur, pas un logiciel.
          </h2>
          <p className="mt-5 max-w-[54ch] text-muted">
            Je m’appelle Pablo. Je photographie les commerces de Bordeaux et je m’occupe de leur
            présence sur Google. C’est moi qui viens sur place, moi qui écris les réponses à vos
            avis, et moi que vous avez au téléphone.
          </p>
          <p className="mt-4 max-w-[54ch] text-muted">
            Pas de centre d’appels, pas de logiciel qui publie à votre place. Vous restez
            propriétaire de votre fiche et de toutes les photos, et vous arrêtez quand vous voulez.
          </p>
        </Reveal>

        <Reveal delay={60} className="max-w-[200px]">
          <Photo photo={portrait} ratio="4 / 5" />
        </Reveal>
      </div>

      <Reveal className="mt-12 border-t border-rule pt-8">
        <dl className="grid gap-8 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.num} className="flex items-baseline gap-4">
              <dt className="font-display text-[2.4rem] leading-none">{f.num}</dt>
              <dd className="max-w-[26ch] text-[0.95rem] text-muted">{f.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[0.82rem] text-muted">
          Études publiques sur la recherche locale. Ces chiffres décrivent le marché, pas des
          résultats clients.
        </p>
      </Reveal>
    </Section>
  );
}
