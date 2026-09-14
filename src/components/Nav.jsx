import Logo from "./Logo.jsx";
import Arrow from "./Arrow.jsx";

const links = [
  ["#travail", "Le travail"],
  ["#etapes", "Les étapes"],
  ["#tarifs", "Tarifs"],
  ["#moi", "Qui je suis"],
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-page/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[1180px] items-center gap-6 px-4 py-4 md:px-6">
        <a href="#top" className="flex min-h-[44px] items-center gap-2.5" aria-label="Halooo — accueil">
          <Logo size={30} />
          <span className="min-w-0">
            <span className="block font-display text-[1.05rem] font-semibold leading-none">HALOOO</span>
            <span className="label hidden whitespace-nowrap text-[0.6rem] sm:block">Photos et avis Google</span>
          </span>
        </a>

        <ul className="mx-auto hidden items-center gap-8 text-[0.92rem] lg:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="-mx-2 inline-flex min-h-[44px] items-center px-2 text-muted transition-colors hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--amber ml-auto shrink-0 lg:ml-0">
          <span className="hidden sm:inline">État des lieux gratuit</span>
          <span className="sm:hidden">État des lieux</span>
          <span className="btn-arrow"><Arrow /></span>
        </a>
      </nav>
    </header>
  );
}
