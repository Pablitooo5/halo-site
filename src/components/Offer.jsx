import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { icons } from "./Icons.jsx";
import { offers } from "../data.js";

export default function Offer() {
  return (
    <section id="offre" className="py-16 md:py-28">
      <SectionHead eyebrow="L'offre">
        Tout ce que Halo gère <span className="text-accent">pour vous.</span>
      </SectionHead>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[22px] px-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((o, i) => {
          const Icon = icons[o.icon];
          return (
            <Reveal
              key={o.title}
              delay={(i % 3) * 60}
              className={`relative overflow-hidden rounded-[18px] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${
                o.feature
                  ? "border-accent/50 shadow-[0_0_0_1px_rgba(79,143,255,0.25),0_24px_60px_rgba(79,143,255,0.10)]"
                  : "border-line bg-surface hover:border-[#33465f]"
              }`}
            >
              {o.feature && (
                <div className="pointer-events-none absolute -right-[30%] -top-[40%] h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(79,143,255,0.18),transparent_70%)]" />
              )}
              <div className="relative z-10">
                {o.tag && (
                  <span className="mb-3.5 inline-block rounded-full border border-accent/30 bg-accent/15 px-2.5 py-[3px] text-[0.72rem] font-semibold tracking-[0.06em] text-accent">
                    {o.tag}
                  </span>
                )}
                <div
                  className={`mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-xl border ${
                    o.gold ? "border-gold/30 bg-gold/15 text-gold" : "border-accent/25 bg-accent/15 text-accent"
                  }`}
                  aria-hidden="true"
                >
                  <Icon width={24} height={24} />
                </div>
                <h3 className="mb-2 text-[1.15rem] font-semibold">{o.title}</h3>
                <p className="text-[0.97rem] text-dim">{o.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
