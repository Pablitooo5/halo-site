import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import Photo from "./Photo.jsx";
import { portrait, googleFactors } from "../data.js";

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

        <Reveal delay={140} className="max-w-[200px]">
          <div className="unveil">
            <Photo photo={portrait} ratio="4 / 5" />
          </div>
        </Reveal>
      </div>

      <div className="mt-14 border-t border-rule pt-9">
        <Reveal>
          <h3 className="max-w-[26ch] text-[1.35rem]">
            Sur quoi Google classe une fiche
          </h3>
          <p className="mt-3 max-w-[54ch] text-muted">
            Google publie lui-même les trois critères qu’il applique. Sur l’un d’eux, personne ne
            peut rien. Sur les deux autres, vos photos et vos avis pèsent directement.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {googleFactors.map((f, i) => (
            <Reveal key={f.name} delay={i * 110}>
              <span
                className="mb-3 block h-[3px] w-12"
                style={{ background: f.actionable ? "var(--color-blue)" : "var(--color-rule)" }}
                aria-hidden="true"
              />
              <p className="font-display text-[1.2rem]">{f.name}</p>
              <p className="mt-2 text-[0.92rem] text-muted">{f.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-7 text-[0.82rem] text-muted">
          Source : documentation publique de Google sur le classement des fiches d’établissement.
        </Reveal>
      </div>
    </Section>
  );
}
