import { useEffect, useState } from "react";
import { Ring } from "./Icons.jsx";

const links = [
  { href: "#offre", label: "L'offre" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Verrouille le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg0/85 to-transparent" />
      <nav className="relative mx-auto flex max-w-[1180px] items-center gap-5 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-bold" aria-label="Halo — accueil">
          <Ring />
          <span>Halo</span>
        </a>

        <ul className="ml-auto hidden items-center gap-7 text-[0.95rem] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-dim transition-colors hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-1 hidden rounded-full bg-accent px-5 py-2.5 text-[0.95rem] font-semibold text-[#06101f] shadow-[0_8px_30px_rgba(79,143,255,0.28)] transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
        >
          Audit gratuit
        </a>

        <button
          className="ml-auto flex flex-col gap-[5px] p-2 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 rounded bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Panneau mobile */}
      {open && (
        <div className="absolute right-4 top-16 z-50 flex w-56 flex-col gap-3.5 rounded-2xl border border-line bg-surface p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-dim transition-colors hover:text-ink" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-1 rounded-full bg-accent px-5 py-2.5 text-center font-semibold text-[#06101f]"
            onClick={() => setOpen(false)}
          >
            Audit gratuit
          </a>
        </div>
      )}
    </header>
  );
}
