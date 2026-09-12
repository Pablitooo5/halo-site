import Logo from "./Logo.jsx";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1020px] items-center gap-4 px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Halooo — accueil">
          <Logo size={28} />
          <span className="font-display text-[1.45rem] tracking-tight">Halooo</span>
        </a>
        <span className="label hidden sm:inline">Bordeaux</span>
        <a
          href="#contact"
          className="ml-auto border-b-2 border-amber pb-0.5 text-[0.92rem] font-medium transition-colors hover:text-blue-ink"
        >
          État des lieux gratuit
        </a>
      </nav>
    </header>
  );
}
