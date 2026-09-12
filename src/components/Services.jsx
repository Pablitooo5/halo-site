import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { services, workPhotos } from "../data.js";

export default function Services() {
  return (
    <section id="travail" className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="card mx-auto max-w-[1180px] p-6 md:p-12">
        <Reveal className="max-w-[46rem]">
          <p className="label">Le travail</p>
          <h2 className="mt-4 text-[1.9rem] md:text-[2.8rem]">
            Ce qui décide un client avant qu’il entre : vos photos et vos avis.
          </h2>
          <p className="mt-4 max-w-[52ch] text-muted">
            Ce sont les deux premières choses qu’on voit de vous sur Google. Je prends les deux en
            charge, de bout en bout.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const amber = s.accent === "amber";
            return (
              <Reveal key={s.title} delay={i * 110} className="rounded-[24px] bg-page p-5 md:p-7">
                <div className="unveil rounded-[18px]">
                  <Photo photo={workPhotos[i]} ratio="16 / 10" rounded="rounded-[18px]" />
                </div>
                <h3 className="mt-6 text-[1.3rem]">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] text-muted">{s.text}</p>
                <ul className="spec mt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-baseline gap-3">
                      <span
                        className="h-1.5 w-1.5 flex-none rounded-full"
                        style={{ background: amber ? "var(--color-amber)" : "var(--color-blue)" }}
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
