import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { icons, Check } from "./Icons.jsx";
import { services, workPhotos } from "../data.js";

export default function Services() {
  return (
    <section id="offre" className="border-b border-line bg-ground">
      <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-20">
        <Reveal as="h2" className="max-w-[20ch] text-[1.7rem] font-bold md:text-[2.2rem]">
          Deux choses, et je m'en occupe entièrement.
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-2 md:gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal
                key={s.title}
                delay={i * 60}
                className="rounded-2xl border border-line bg-paper p-6 md:p-8"
              >
                <span
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    s.icon === "star" ? "bg-gold/12 text-gold" : "bg-accent-soft text-accent"
                  }`}
                >
                  <Icon />
                </span>
                <h3 className="text-[1.25rem] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[1rem] text-muted">{s.text}</p>
                <ul className="mt-5 grid gap-2.5 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[0.95rem]">
                      <span className="mt-0.5 text-accent"><Check size={17} /></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-5 grid grid-cols-3 gap-3 md:gap-5">
          {workPhotos.map((p) => (
            <Photo key={p.slot} photo={p} ratio="4 / 3" compact />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
