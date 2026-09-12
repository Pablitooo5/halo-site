/* Bandeau : le nom, et une seule action. Aucun pictogramme. */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1020px] items-baseline gap-5 px-6 py-4">
        <a href="#top" className="font-display text-[1.45rem] tracking-tight" aria-label="Halooo — accueil">
          Halooo
        </a>
        <span className="label hidden sm:inline">Bordeaux</span>
        <a
          href="#contact"
          className="ml-auto self-center border-b border-ink pb-0.5 text-[0.92rem] font-medium"
        >
          État des lieux gratuit
        </a>
      </nav>
    </header>
  );
}
