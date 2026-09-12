import { Ring } from "./Icons.jsx";

/* Barre simple : le nom, deux repères, une seule action. Pas de menu déroulant. */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1080px] items-center gap-4 px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[1.15rem] font-bold" aria-label="Halo — accueil">
          <Ring />
          <span>Halo</span>
        </a>

        <span className="ml-3 hidden text-[0.9rem] text-muted sm:inline">Photos et avis Google · Bordeaux</span>

        <a
          href="#contact"
          className="ml-auto rounded-lg bg-accent px-4 py-2.5 text-[0.92rem] font-semibold text-white transition-colors hover:bg-[#1547b5]"
        >
          État des lieux gratuit
        </a>
      </nav>
    </header>
  );
}
