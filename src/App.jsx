import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav.jsx";
import ScrollHero from "./components/ScrollHero.jsx";
import Offer from "./components/Offer.jsx";
import Difference from "./components/Difference.jsx";
import Pricing from "./components/Pricing.jsx";
import Steps from "./components/Steps.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Smooth scroll Lenis + synchronisation avec ScrollTrigger (sauf reduced-motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    if (import.meta.env.DEV) { window.__lenis = lenis; window.__ST = ScrollTrigger; } // aide au test uniquement (dev)
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <ScrollHero />
        <Offer />
        <Difference />
        <Pricing />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
