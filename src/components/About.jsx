import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { portrait, googleFactors } from "../data.js";

export default function About() {
  return (
    <section id="moi" className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="card mx-auto max-w-[1180px] p-7 md:p-12">
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14">
          <Reveal className="max-w-[240px]">
            <div className="unveil rounded-[20px]">
              <Photo photo={portrait} ratio="4 / 5" rounded="rounded-[20px]" />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <p className="label">Qui je suis</p>
            <h2 className="mt-4 text-[1.9rem] md:text-[2.6rem]">Un interlocuteur, pas un logiciel.</h2>
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
        </div>

        <div className="mt-12 rounded-[20px] bg-page p-6 md:p-9">
          <Reveal>
            <h3 className="text-[1.3rem]">Sur quoi Google classe une fiche</h3>
            <p className="mt-3 max-w-[58ch] text-[0.95rem] text-muted">
              Google publie lui-même les trois critères qu’il applique. Sur l’un d’eux, personne ne
              peut rien. Sur les deux autres, vos photos et vos avis pèsent directement.
            </p>
          </Reveal>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {googleFactors.map((f, i) => (
              <Reveal key={f.name} delay={i * 100} className="rounded-[12px] bg-card p-5">
                <span
                  className="mb-4 block h-1 w-10 rounded-full"
                  style={{ background: f.actionable ? "var(--color-blue)" : "#cfccc5" }}
                  aria-hidden="true"
                />
                <p className="font-display text-[1.05rem] font-medium">{f.name}</p>
                <p className="mt-2 text-[0.88rem] text-muted">{f.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 text-[0.78rem] text-muted">
            Source : documentation publique de Google sur le classement des fiches d’établissement.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
