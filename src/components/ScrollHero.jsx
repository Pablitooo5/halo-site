import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Starfield from "./Starfield.jsx";
import Reveal from "./Reveal.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const B = import.meta.env.BASE_URL; // "/" en dev, "/halo-site/" en prod (Pages)

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Zones du badge (fractions de la boîte image) : centre visé + échelle de zoom */
const ZONES = {
  stars: { cx: 0.545, cy: 0.45, scale: 1.9 },
  photo: { cx: 0.73, cy: 0.655, scale: 2.2 },
  contact: { cx: 0.38, cy: 0.775, scale: 2.35 },
  center: { cx: 0.5, cy: 0.5, scale: 1 },
};

const STAR_PATH = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z";

/* ---------- Sous-composants ---------- */

function CopyPanels() {
  return (
    <>
      <div className="sh-text" data-step="intro">
        <p className="sh-kicker intro-el">Photos &amp; avis Google · Bordeaux</p>
        <h1 className="sh-title">
          <span className="intro-line intro-el">Je photographie votre commerce.</span>
          <span className="intro-line intro-el sh-accent">Je réponds à tous vos avis.</span>
        </h1>
      </div>
      <div className="sh-text" data-step="avis">
        <p className="sh-kicker">Les avis</p>
        <h2 className="sh-title">
          <span className="sh-num sh-num--gold">47 %</span>
          des gens évitent un commerce de moins de 20 avis.
        </h2>
        <p className="sh-sub">Je collecte les vôtres, et je réponds à chacun.</p>
      </div>
      <div className="sh-text" data-step="photos">
        <p className="sh-kicker">Les photos</p>
        <h2 className="sh-title">
          <span className="sh-num sh-num--accent">7×</span>
          plus de clics pour une fiche complète.
        </h2>
        <p className="sh-sub">Je viens photographier votre établissement.</p>
      </div>
      <div className="sh-text" data-step="contact">
        <p className="sh-kicker">Le contact</p>
        <h2 className="sh-title">
          <span className="sh-num sh-num--accent">84 %</span>
          des vues viennent du mobile.
        </h2>
        <p className="sh-sub">C'est ici que se déclenche l'appel.</p>
      </div>
      <div className="sh-text" data-step="final">
        <p className="sh-kicker">Votre fiche, vivante</p>
        <h2 className="sh-title">
          Elle brille. <span className="sh-accent">Vous récupérez les appels.</span>
        </h2>
        <a className="sh-cta" href="#contact">Voir ce que Google montre de moi</a>
      </div>
    </>
  );
}

function BadgeStack() {
  return (
    <div data-float>
      <div className="zoom-wrap" data-zoom>
        <div className="scrollhero-persp">
          <div className="badge-glow" data-glow aria-hidden="true" />
          <div className="scrollhero-badge" data-badge>
            <div className="badge-face">
              <div className="front-clip">
                <div className="front-filter" data-filter>
                  <img
                    src={`${B}assets/badge-front-hd.webp`}
                    width={1024}
                    height={1536}
                    alt="Fiche Google Business Halo : SEO, référencement, visibilité — noté 4,9 sur 5 avec 512 avis, Bordeaux."
                    decoding="async"
                  />
                  <span className="patch patch--note" data-patch-note aria-hidden="true" />
                  <span className="patch patch--avis" data-patch-avis aria-hidden="true" />
                </div>
                <div className="front-ov" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="ov-star" style={{ left: `${43.6 + i * 8.05}%`, top: "42.8%" }}>
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d={STAR_PATH} /></svg>
                    </span>
                  ))}
                  <span className="ov-note" data-ov-note>0,0</span>
                  <span className="ov-avis" data-ov-avis>0 avis</span>
                  <span className="zone-frame zone-frame--stars" data-zf="stars" />
                  <span className="zone-frame zone-frame--photo" data-zf="photo" />
                  <span className="zone-frame zone-frame--contact" data-zf="contact" />
                  <span className="mini mini--1" />
                  <span className="mini mini--2" />
                  <span className="mini mini--3" />
                  <span className="pulse-ring" data-pulse />
                </div>
              </div>
            </div>
          </div>
          <div className="power-flash" data-flash aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Fallback reduced-motion : crops statiques ---------- */

function cropStyle(cx, cy, zoom) {
  // container 16/10, image aspect 2/3 (w/h)
  const Rv = 2.4 * zoom; // hauteur image / hauteur conteneur
  const px = Math.max(0, Math.min(100, ((zoom * cx - 0.5) / (zoom - 1)) * 100));
  const py = Math.max(0, Math.min(100, ((Rv * cy - 0.5) / (Rv - 1)) * 100));
  return {
    backgroundImage: `url(${B}assets/badge-front-hd.webp)`,
    backgroundSize: `${zoom * 100}% auto`,
    backgroundPosition: `${px.toFixed(1)}% ${py.toFixed(1)}%`,
    backgroundColor: "#0f1729",
  };
}

function StaticFallback() {
  return (
    <section className="relative">
      <div className="relative scrollhero-fallback">
        <Reveal className="scrollhero-badgewrap">
          <img src={`${B}assets/badge-front-hd.webp`} width={1024} height={1536} alt="Fiche Google Business Halo : notée 4,9 sur 5 avec 512 avis, Bordeaux." style={{ width: "100%", height: "auto" }} />
        </Reveal>
        <Reveal>
          <div className="sh-text">
            <p className="sh-kicker">Fiches Google Business · Bordeaux</p>
            <h1 className="sh-title">Je photographie votre commerce. <span className="sh-accent">Je réponds à tous vos avis.</span></h1>
          </div>
        </Reveal>
        <Reveal>
          <div className="sh-text">
            <h2 className="sh-title"><span className="sh-num sh-num--gold">47 %</span>des gens évitent un commerce de moins de 20 avis.</h2>
            <p className="sh-sub">Je collecte les vôtres, et je réponds à chacun.</p>
          </div>
        </Reveal>
        <Reveal><div className="crop" style={cropStyle(0.545, 0.45, 2.2)} role="img" aria-label="Zoom sur la note 4,9 et les avis de la fiche" /></Reveal>
        <Reveal>
          <div className="sh-text">
            <h2 className="sh-title"><span className="sh-num sh-num--accent">7×</span>plus de clics pour une fiche complète.</h2>
            <p className="sh-sub">Je viens photographier votre établissement.</p>
          </div>
        </Reveal>
        <Reveal><div className="crop" style={cropStyle(0.73, 0.655, 2.2)} role="img" aria-label="Zoom sur les photos de la fiche" /></Reveal>
        <Reveal>
          <div className="sh-text">
            <h2 className="sh-title"><span className="sh-num sh-num--accent">84 %</span>des vues viennent du mobile.</h2>
            <p className="sh-sub">C'est ici que se déclenche l'appel.</p>
          </div>
        </Reveal>
        <Reveal><div className="crop" style={cropStyle(0.38, 0.775, 2.4)} role="img" aria-label="Zoom sur les boutons d'appel et d'itinéraire" /></Reveal>
        <Reveal>
          <div className="sh-text">
            <h2 className="sh-title">Elle brille. <span className="sh-accent">Vous récupérez les appels.</span></h2>
            <a className="sh-cta" href="#contact" style={{ alignSelf: "center" }}>Voir ce que Google montre de moi</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Composant principal ---------- */

export default function ScrollHero() {
  const root = useRef(null);
  const stage = useRef(null);
  const introRef = useRef(null);
  const [act, setAct] = useState(0);
  const [dotCount, setDotCount] = useState(4);

  useGSAP(
    () => {
      if (reduceMotion()) return;

      const q = gsap.utils.selector(root);
      const zoomEl = q("[data-zoom]")[0];
      const floatEl = q("[data-float]")[0];
      const filterEl = q("[data-filter]")[0];
      const badgeEl = q("[data-badge]")[0];
      const haloEl = q(".hero-halo")[0];
      const starsEl = q(".hero-stars")[0];
      const noteEl = q("[data-ov-note]")[0];
      const avisEl = q("[data-ov-avis]")[0];

      const isMobile = window.innerWidth < 900;

      /* Translation pour centrer une zone du badge à l'échelle s */
      const zx = (z) => () => (0.5 - ZONES[z].cx) * zoomEl.offsetWidth * ZONES[z].scale;
      const zy = (z) => () => (0.5 - ZONES[z].cy) * zoomEl.offsetHeight * ZONES[z].scale;

      /* ================= ÉTATS INITIAUX (badge éteint) ================= */
      gsap.set(".sh-text", { autoAlpha: 0, y: 14 });
      gsap.set(".intro-el", { autoAlpha: 0, y: 18 });
      gsap.set('.sh-text[data-step="intro"]', { autoAlpha: 1, y: 0 });
      gsap.set(filterEl, { filter: "grayscale(1) brightness(0.5)" });
      gsap.set(haloEl, { autoAlpha: 0, scale: 0.8 });
      gsap.set(starsEl, { autoAlpha: 0.18 });
      gsap.set(".ov-star", { autoAlpha: 0, scale: 0.2, transformOrigin: "50% 50%" });
      gsap.set([noteEl, avisEl], { autoAlpha: 0 });
      gsap.set(".zone-frame, .mini, [data-pulse], [data-glow]", { autoAlpha: 0 });

      const floatTween = gsap.to(floatEl, {
        y: 10, duration: 2.3, yoyo: true, repeat: -1, ease: "sine.inOut", paused: true,
      });

      /* ================= L'ARRIVÉE : mise sous tension (≤2,5 s) ================= */
      const noteProxy = { v: 0 };
      const avisProxy = { v: 0 };
      const fmtNote = () => { noteEl.textContent = noteProxy.v.toFixed(1).replace(".", ","); };
      const fmtAvis = () => { avisEl.textContent = `${Math.round(avisProxy.v)} avis`; };

      const intro = gsap.timeline({ paused: false, defaults: { ease: "power2.out" } });
      introRef.current = intro;

      intro
        .to("[data-flash]", { autoAlpha: 1, scale: 1.6, duration: 0.22, ease: "power1.in" }, 0.15)
        .to("[data-flash]", { autoAlpha: 0, scale: 2.4, duration: 0.3 }, 0.37)
        .to(filterEl, { filter: "grayscale(0) brightness(1)", duration: 0.7 }, 0.2)
        .to(haloEl, { autoAlpha: 1, scale: 1, duration: 0.8 }, 0.25)
        .to([noteEl, avisEl], { autoAlpha: 1, duration: 0.15 }, 0.35)
        .to(noteProxy, { v: 4.9, duration: 0.95, ease: "power1.inOut", onUpdate: fmtNote }, 0.35)
        .to(avisProxy, { v: 512, duration: 0.95, ease: "power1.inOut", onUpdate: fmtAvis }, 0.35)
        .to(".ov-star", { autoAlpha: 1, scale: 1, duration: 0.32, stagger: 0.08, ease: "back.out(2.2)" }, 0.45)
        .to(starsEl, { autoAlpha: 1, duration: 0.5 }, 1.15)
        .add(() => floatTween.play(), 1.2)
        .to(".intro-el", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.16 }, 1.3)
        .to([".ov-star", noteEl, avisEl], { autoAlpha: 0, duration: 0.25 }, 2.05)
        .to("[data-patch-note], [data-patch-avis]", { autoAlpha: 0, duration: 0.25 }, 2.05);

      // Skippable : déjà scrollé au chargement → état final direct
      if (window.scrollY > 10) intro.progress(1);
      if (import.meta.env.DEV) { window.__intro = intro; window.__ST = ScrollTrigger; }

      /* ================= LE SCROLLYTELLING : zooms réels ================= */
      let floatKilled = false;
      const segEnds = [];

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: isMobile ? "+=225%" : "+=280%",
          pin: stage.current,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.004 && !floatKilled) {
              floatKilled = true;
              if (intro.progress() < 1) intro.progress(1); // skip de l'arrivée
              floatTween.pause();
              gsap.to(floatEl, { y: 0, duration: 0.3, overwrite: "auto" });
            }
            const t = self.progress * tl.duration();
            let a = segEnds.findIndex((e) => t < e);
            if (a === -1) a = segEnds.length - 1;
            setAct(a);
          },
        },
      });

      const zoomTo = (z, d = 0.1, pos) =>
        tl.to(zoomEl, { x: zx(z), y: zy(z), scale: ZONES[z].scale, duration: d }, pos);
      const copyOut = (step, pos) =>
        tl.to(`.sh-text[data-step="${step}"]`, { autoAlpha: 0, y: -14, duration: 0.04 }, pos);
      const copyIn = (step, pos) =>
        tl.to(`.sh-text[data-step="${step}"]`, { autoAlpha: 1, y: 0, duration: 0.05 }, pos);

      /* --- Étape 1 : les avis (zoom étoiles + compteur) --- */
      copyOut("intro");
      zoomTo("stars", 0.1, "<");
      tl.to('[data-zf="stars"]', { autoAlpha: 1, duration: 0.04 }, "<+0.05");
      copyIn("avis", "<+0.02");
      // le compteur d'avis rejoue, lié au scroll
      const avisScrub = { v: 128 };
      avisEl.textContent = "128 avis";
      tl.to("[data-patch-avis]", { autoAlpha: 1, duration: 0.02 }, "<")
        .to(avisEl, { autoAlpha: 1, duration: 0.02 }, "<")
        .to(avisScrub, {
          v: 512, duration: 0.14, ease: "power2.out",
          onUpdate: () => { avisEl.textContent = `${Math.round(avisScrub.v)} avis`; },
        })
        .to({}, { duration: 0.04 });
      segEnds.push(tl.duration());

      /* --- Étape 2 : les photos (zoom vignette + miniatures) --- */
      tl.to(['[data-zf="stars"]', avisEl, "[data-patch-avis]"], { autoAlpha: 0, duration: 0.03 });
      copyOut("avis", "<");
      zoomTo("photo", 0.1, "<");
      tl.to('[data-zf="photo"]', { autoAlpha: 1, duration: 0.04 }, "<+0.05");
      copyIn("photos", "<+0.02");
      tl.to(".mini", { autoAlpha: 1, scale: 1, y: 0, duration: 0.05, stagger: 0.045, ease: "back.out(1.6)" }, "<")
        .to({}, { duration: 0.07 });
      segEnds.push(tl.duration());

      /* --- Étape 3 : le contact (desktop uniquement) --- */
      if (!isMobile) {
        tl.to(['[data-zf="photo"]', ".mini"], { autoAlpha: 0, duration: 0.03 });
        copyOut("photos", "<");
        zoomTo("contact", 0.1, "<");
        tl.to('[data-zf="contact"]', { autoAlpha: 1, duration: 0.04 }, "<+0.05");
        tl.to("[data-pulse]", { autoAlpha: 1, duration: 0.03 }, "<");
        copyIn("contact", "<+0.02");
        tl.to({}, { duration: 0.08 });
        segEnds.push(tl.duration());
      }

      /* --- Étape finale : dézoom, la fiche entière s'allume --- */
      tl.to(".zone-frame, .mini, [data-pulse]", { autoAlpha: 0, duration: 0.03 });
      copyOut(isMobile ? "photos" : "contact", "<");
      tl.to(zoomEl, { scale: 1, x: 0, y: 0, duration: 0.12, ease: "power1.out" }, "<")
        .to(haloEl, { autoAlpha: 1, scale: 1.1, duration: 0.12 }, "<")
        .to("[data-glow]", { autoAlpha: 1, duration: 0.07 }, "-=0.05");
      copyIn("final", "-=0.08");
      tl.to({}, { duration: 0.1 });
      segEnds.push(tl.duration());

      setDotCount(segEnds.length);
    },
    { scope: root }
  );

  /* Skip de l'arrivée au premier geste (molette, touche, tactile) */
  useEffect(() => {
    if (reduceMotion()) return;
    const skip = () => {
      const intro = introRef.current;
      if (intro && intro.progress() < 1) intro.progress(1);
    };
    const keys = (e) => {
      if (["ArrowDown", "PageDown", "Space", " "].includes(e.key)) skip();
    };
    window.addEventListener("wheel", skip, { passive: true, once: true });
    window.addEventListener("touchmove", skip, { passive: true, once: true });
    window.addEventListener("keydown", keys);
    return () => {
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
      window.removeEventListener("keydown", keys);
    };
  }, []);

  if (reduceMotion()) return <StaticFallback />;

  return (
    <section ref={root} className="relative" aria-label="Ce que vos clients voient sur votre fiche Google">
      <div ref={stage} className="scrollhero-stage">
        <Starfield />
        <div className="hero-halo" aria-hidden="true" />

        <div className="scrollhero-grid">
          <div className="scrollhero-copy">
            <CopyPanels />
          </div>
          <div className="scrollhero-badgewrap">
            <BadgeStack />
          </div>
        </div>

        <ul className="scrollhero-dots" aria-hidden="true">
          {Array.from({ length: dotCount }, (_, i) => (
            <li key={i} className="scrollhero-dot" data-on={act === i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
