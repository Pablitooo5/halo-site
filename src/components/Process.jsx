import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import Arrow from "./Arrow.jsx";
import { processSteps, processPhoto } from "../data.js";

/* L'étapier : on choisit une étape à gauche, le texte change à droite. */
export default function Process() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <section id="etapes" className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="card mx-auto max-w-[1180px] p-7 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Reveal>
              <p className="label">La marche à suivre</p>
              <h2 className="mt-4 text-[1.9rem] md:text-[2.6rem]">
                De l’état des lieux à la fiche qui tourne
              </h2>
              <p className="mt-4 max-w-[42ch] text-muted">
                Quatre étapes, et vous n’avez la main que sur la dernière : la validation des
                réponses aux avis négatifs.
              </p>
            </Reveal>

            <Reveal delay={120} as="ul" className="mt-8 grid gap-1" role="tablist" aria-label="Les étapes">
              {processSteps.map((s, i) => (
                <li key={s.num}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-controls="etape-detail"
                    className="step"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="step-num">{s.num}</span>
                    <span className="step-name">{s.name}</span>
                    <span className="dot-arrow"><Arrow /></span>
                  </button>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="unveil rounded-[20px]">
              <Photo photo={processPhoto} ratio="4 / 3" rounded="rounded-[20px]" />
            </div>
            <div id="etape-detail" className="mt-7 grid gap-4">
              {step.body.map((t) => (
                <p key={t} className="max-w-[44ch] text-[0.95rem] text-muted">{t}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
