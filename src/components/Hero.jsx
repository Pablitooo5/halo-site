import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import Arrow from "./Arrow.jsx";
import Stars from "./Stars.jsx";
import { heroPhoto, heroChips, heroTiles } from "../data.js";

/* La carte d'ouverture : une grande image, le titre par-dessus,
   les mots-clés en bas à gauche, deux vignettes en bas à droite. */
export default function Hero() {
  return (
    <section id="top" className="px-4 md:px-6">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px]">
        <Photo photo={heroPhoto} tone="dark" rounded="rounded-[30px]" fill tagCorner="tr" />

        {/* voile pour garder le titre lisible quelle que soit la photo */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(6,16,36,0.82) 0%, rgba(6,16,36,0.55) 42%, rgba(6,16,36,0.15) 74%)" }}
          aria-hidden="true"
        />

        <div className="relative flex min-h-[500px] flex-col justify-between gap-10 p-6 md:min-h-[640px] md:gap-14 md:p-12">
          <Reveal className="max-w-[660px] pt-4 md:pt-8">
            <h1 className="text-[2.3rem] text-white sm:text-[3rem] md:text-[3.7rem]">
              J’améliore l’image et la réputation de votre commerce sur Google.
            </h1>
            <p className="mt-6 max-w-[40ch] text-[1rem] text-white/75">
              Des photos faites sur place au matériel professionnel, une plaque sans contact à
              votre comptoir, et une réponse à chacun de vos avis sous 24 heures.
            </p>
            <a href="#contact" className="btn btn--amber mt-8">
              Demander un état des lieux
              <span className="btn-arrow"><Arrow /></span>
            </a>
          </Reveal>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal delay={160} className="flex max-w-[26rem] flex-wrap gap-2">
              {heroChips.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </Reveal>

            <Reveal delay={240} className="hidden gap-3 lg:flex">
              {heroTiles.map((t) => (
                <div key={t.title} className="flex w-[236px] items-center gap-3 rounded-[20px] bg-card p-3">
                  <div className="w-[62px] flex-none">
                    <Photo photo={t.photo} ratio="1 / 1" rounded="rounded-[14px]" tag={false} />
                  </div>
                  <div className="min-w-0">
                    <p className="label text-[0.6rem]">{t.kicker}</p>
                    <p className="mt-0.5 truncate font-display text-[0.92rem] font-medium">{t.title}</p>
                    {t.kicker === "Réputation" && <Stars size={11} />}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
