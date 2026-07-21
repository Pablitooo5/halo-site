import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Starfield from "./Starfield.jsx";
import Reveal from "./Reveal.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MODULES = [
  { label: "Catégorie · Attributs · Description · Services" },
  { label: "Photos & fraîcheur du contenu" },
  { label: "Collecte & réponses aux avis", gold: true },
  { label: "Cohérence des infos (NAP, annuaires)" },
  { label: "Visibilité IA (GEO)" },
];

// Les panneaux de texte (un seul visible à la fois)
function CopyPanels() {
  return (
    <>
      <div className="sh-text" data-step="intro">
        <p className="sh-kicker">La vitrine</p>
        <h2 className="sh-title">
          Vos clients vous cherchent sur Google.
          <br />
          <span className="sh-accent">Voici ce qu'ils voient.</span>
        </h2>
      </div>
      <div className="sh-text" data-step="avis">
        <p className="sh-kicker">Les avis</p>
        <h2 className="sh-title">
          <span className="sh-num sh-num--gold">47 %</span>
          des gens évitent un commerce de moins de 20 avis.
        </h2>
      </div>
      <div className="sh-text" data-step="photos">
        <p className="sh-kicker">Les photos</p>
        <h2 className="sh-title">
          <span className="sh-num sh-num--accent">7×</span>
          plus de clics pour une fiche complète.
        </h2>
      </div>
      <div className="sh-text" data-step="contact">
        <p className="sh-kicker">Le contact</p>
        <h2 className="sh-title">
          <span className="sh-num sh-num--accent">84 %</span>
          des vues viennent du mobile.
        </h2>
        <p className="sh-sub">Un appel, un itinéraire — tout se joue ici.</p>
      </div>
      <div className="sh-text" data-step="inside">
        <p className="sh-kicker">La mécanique</p>
        <h2 className="sh-title">
          Derrière la vitrine, <span className="sh-accent">des dizaines de réglages.</span>
        </h2>
        <p className="sh-sub">Vos clients ne les voient jamais. Halo s'en occupe, chaque mois.</p>
      </div>
      <div className="sh-text" data-step="final">
        <p className="sh-kicker">Votre fiche, optimisée</p>
        <h2 className="sh-title">
          Elle brille. <span className="sh-accent">Vous récupérez les appels.</span>
        </h2>
        <a className="sh-cta" href="#contact">Recevoir mon audit gratuit</a>
      </div>
    </>
  );
}

// L'intérieur du badge — la mécanique cachée (acte 3)
function BadgeInner() {
  return (
    <div className="badge-inner" aria-hidden="true">
      <p className="badge-inner-title">Réglages Halo</p>
      <svg className="badge-inner-spine" viewBox="0 0 2 100" preserveAspectRatio="none">
        <path className="spine-path" d="M1 0 V100" pathLength="1" />
      </svg>
      <ul className="badge-modules">
        {MODULES.map((m) => (
          <li key={m.label} className={`module ${m.gold ? "module--gold" : ""}`}>
            <span className="module-dot" />
            <span style={{ flex: 1 }}>
              <span className="module-label">{m.label}</span>
              <span className="module-bar"><span className="module-fill" /></span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const B = import.meta.env.BASE_URL; // "/" en dev, "/halo-site/" en prod (Pages)

function Badge3D({ badgeRef }) {
  return (
    <div className="scrollhero-persp" data-persp>
      <div className="badge-glow" data-glow aria-hidden="true" />
      <div className="scrollhero-badge" ref={badgeRef}>
        <div className="badge-face badge-face--front">
          <img
            src={`${B}assets/badge-front.webp`}
            srcSet={`${B}assets/badge-front-500.webp 500w, ${B}assets/badge-front.webp 800w`}
            sizes="(max-width: 900px) 260px, 360px"
            width={800}
            height={1200}
            alt="Fiche Google Business Halo : SEO, référencement, visibilité — noté 4,9 sur 5 avec 512 avis, Bordeaux."
            decoding="async"
          />
          <span className="spot spot--stars" aria-hidden="true" />
          <span className="spot spot--photo" aria-hidden="true" />
          <span className="spot spot--contact" aria-hidden="true" />
        </div>
        <div className="badge-face badge-face--back" aria-hidden="true">
          <img src={`${B}assets/badge-back.webp`} srcSet={`${B}assets/badge-back-500.webp 500w, ${B}assets/badge-back.webp 800w`} sizes="(max-width: 900px) 260px, 360px" width={800} height={1200} alt="" decoding="async" />
        </div>
      </div>
      <BadgeInner />
    </div>
  );
}

export default function ScrollHero() {
  const root = useRef(null);
  const stage = useRef(null);
  const badge = useRef(null);
  const [act, setAct] = useState(0);

  useGSAP(
    () => {
      if (reduceMotion()) return;

      const persp = root.current.querySelector("[data-persp]");
      const halo = root.current.querySelector(".hero-halo");
      const zoom = window.innerWidth < 900 ? 1.32 : 1.6;

      gsap.set(".sh-text", { autoAlpha: 0, y: 14 });
      gsap.set('.sh-text[data-step="intro"]', { autoAlpha: 1, y: 0 });
      gsap.set(".spot", { autoAlpha: 0 });
      gsap.set(".badge-inner", { autoAlpha: 0 });
      gsap.set("[data-glow]", { autoAlpha: 0 });
      gsap.set(".spine-path", { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set(".module", { autoAlpha: 0, x: -14 });
      gsap.set(".module-fill", { scaleX: 0 });
      gsap.set(badge.current, { rotateY: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=350%", // ~3,5 écrans pour les 4 actes
          pin: stage.current,
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            setAct(p < 0.09 ? 0 : p < 0.5 ? 1 : p < 0.86 ? 2 : 3);
          },
        },
      });

      /* ============ ACTE 1 — la vitrine ============ */
      tl.to({}, { duration: 0.16 });

      /* ============ ACTE 2 — les faces ============ */
      // → Avis
      tl.to('.sh-text[data-step="intro"]', { autoAlpha: 0, y: -14, duration: 0.05 })
        .to('.sh-text[data-step="avis"]', { autoAlpha: 1, y: 0, duration: 0.05 }, "<")
        .to(".spot--stars", { autoAlpha: 1, duration: 0.05 }, "<")
        .to({}, { duration: 0.12 });

      // → Photos (un tour complet)
      tl.to(".spot--stars", { autoAlpha: 0, duration: 0.04 })
        .to('.sh-text[data-step="avis"]', { autoAlpha: 0, y: -14, duration: 0.05 }, "<")
        .to(badge.current, { rotateY: 360, duration: 0.18 }, "<")
        .to('.sh-text[data-step="photos"]', { autoAlpha: 1, y: 0, duration: 0.05 })
        .to(".spot--photo", { autoAlpha: 1, duration: 0.05 }, "<")
        .to({}, { duration: 0.12 });

      // → Contact (un tour complet)
      tl.to(".spot--photo", { autoAlpha: 0, duration: 0.04 })
        .to('.sh-text[data-step="photos"]', { autoAlpha: 0, y: -14, duration: 0.05 }, "<")
        .to(badge.current, { rotateY: 720, duration: 0.18 }, "<")
        .to('.sh-text[data-step="contact"]', { autoAlpha: 1, y: 0, duration: 0.05 })
        .to(".spot--contact", { autoAlpha: 1, duration: 0.05 }, "<")
        .to({}, { duration: 0.14 });

      /* ============ ACTE 3 — la plongée à l'intérieur ============ */
      tl.to(".spot--contact", { autoAlpha: 0, duration: 0.04 })
        .to('.sh-text[data-step="contact"]', { autoAlpha: 0, y: -14, duration: 0.05 }, "<")
        // zoom : la caméra entre dans le badge
        .to(persp, { scale: zoom, duration: 0.16, ease: "power1.in" }, "<")
        .to(halo, { opacity: 1, scale: 1.18, duration: 0.16 }, "<")
        // la face avant se fond, l'intérieur se révèle
        .to(badge.current, { autoAlpha: 0, duration: 0.08 }, "-=0.06")
        .to(".badge-inner", { autoAlpha: 1, duration: 0.08 }, "<")
        .to('.sh-text[data-step="inside"]', { autoAlpha: 1, y: 0, duration: 0.05 });

      // la colonne s'illumine puis les modules s'allument un à un
      tl.to(".spine-path", { strokeDashoffset: 0, duration: 0.22 }, "<")
        .to(".module", { autoAlpha: 1, x: 0, duration: 0.055, stagger: 0.075 }, "<+0.04")
        .to(".module-fill", { scaleX: 1, duration: 0.05, stagger: 0.075 }, "<+0.03")
        .to({}, { duration: 0.1 });

      /* ============ ACTE 4 — la sortie, fiche allumée ============ */
      tl.to('.sh-text[data-step="inside"]', { autoAlpha: 0, y: -14, duration: 0.05 })
        .to(".badge-inner", { autoAlpha: 0, duration: 0.07 })
        .to(badge.current, { autoAlpha: 1, duration: 0.08 }, "<")
        .to(persp, { scale: 1, duration: 0.13, ease: "power1.out" }, "<")
        .to(halo, { scale: 1.06, duration: 0.12 }, "<")
        .to("[data-glow]", { autoAlpha: 1, duration: 0.08 }, "-=0.05")
        .to('.sh-text[data-step="final"]', { autoAlpha: 1, y: 0, duration: 0.06 })
        .to({}, { duration: 0.12 });
    },
    { scope: root }
  );

  /* ---- Fallback statique (prefers-reduced-motion) : 4 actes empilés ---- */
  if (reduceMotion()) {
    return (
      <section className="relative">
        <div className="relative scrollhero-fallback">
          <Reveal className="scrollhero-badgewrap" style={{ animation: "none" }}>
            <div className="scrollhero-persp">
              <div className="scrollhero-badge">
                <div className="badge-face badge-face--front">
                  <img src={`${B}assets/badge-front.webp`} width={800} height={1200} alt="Fiche Google Business Halo : noté 4,9 sur 5 avec 512 avis, Bordeaux." />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal><div className="sh-text"><p className="sh-kicker">La vitrine</p><h2 className="sh-title">Vos clients vous cherchent sur Google. <span className="sh-accent">Voici ce qu'ils voient.</span></h2></div></Reveal>
          <Reveal><div className="sh-text"><h2 className="sh-title"><span className="sh-num sh-num--gold">47 %</span>des gens évitent un commerce de moins de 20 avis.</h2></div></Reveal>
          <Reveal><div className="sh-text"><h2 className="sh-title"><span className="sh-num sh-num--accent">7×</span>plus de clics pour une fiche complète.</h2></div></Reveal>
          <Reveal><div className="sh-text"><h2 className="sh-title"><span className="sh-num sh-num--accent">84 %</span>des vues viennent du mobile.</h2></div></Reveal>
          <Reveal>
            <div className="sh-text">
              <p className="sh-kicker">La mécanique</p>
              <h2 className="sh-title">Derrière la vitrine, <span className="sh-accent">des dizaines de réglages.</span></h2>
            </div>
          </Reveal>
          <Reveal style={{ width: "min(100%, 360px)" }}>
            <BadgeInner />
          </Reveal>
          <Reveal>
            <div className="sh-text">
              <h2 className="sh-title">Elle brille. <span className="sh-accent">Vous récupérez les appels.</span></h2>
              <a className="sh-cta" href="#contact" style={{ alignSelf: "center" }}>Recevoir mon audit gratuit</a>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section ref={root} className="relative" aria-label="Ce que vos clients voient sur Google — et ce que Halo règle derrière">
      <div ref={stage} className="scrollhero-stage">
        <Starfield />
        <div className="hero-halo" aria-hidden="true" />

        <div className="scrollhero-grid">
          <div className="scrollhero-copy">
            <CopyPanels />
          </div>
          <div className="scrollhero-badgewrap">
            <Badge3D badgeRef={badge} />
          </div>
        </div>

        <ul className="scrollhero-dots" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <li key={i} className="scrollhero-dot" data-on={act === i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
