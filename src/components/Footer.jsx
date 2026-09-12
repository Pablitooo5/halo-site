import Logo from "./Logo.jsx";
import { CONTACT_EMAIL } from "../data.js";

const legal = [
  ["legal/mentions.html", "Mentions légales"],
  ["legal/cgv.html", "Conditions de prestation"],
  ["legal/confidentialite.html", "Confidentialité"],
];

export default function Footer() {
  return (
    <footer>
      <div className="brand-gradient h-[3px]" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1020px] flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={24} />
            <p className="font-display text-[1.35rem]">Halooo</p>
          </div>
          <p className="mt-2 text-[0.92rem] text-muted">
            Photos et avis Google · Bordeaux et alentours
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-block border-b border-amber text-[0.92rem]">
            {CONTACT_EMAIL}
          </a>
        </div>

        <ul className="grid gap-2 text-[0.88rem] text-muted sm:text-right">
          {legal.map(([href, label]) => (
            <li key={href}>
              <a href={`${import.meta.env.BASE_URL}${href}`} className="hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-rule">
        <p className="mx-auto max-w-[1020px] px-6 py-5 text-[0.82rem] text-muted">
          © {new Date().getFullYear()} Halooo · Sans engagement. Vous restez propriétaire de votre fiche.
        </p>
      </div>
    </footer>
  );
}
