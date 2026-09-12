import Logo from "./Logo.jsx";
import { CONTACT_EMAIL } from "../data.js";

const legal = [
  ["legal/mentions.html", "Mentions légales"],
  ["legal/cgv.html", "Conditions de prestation"],
  ["legal/confidentialite.html", "Confidentialité"],
];

export default function Footer() {
  return (
    <footer className="px-4 py-4 md:px-6 md:py-6">
      <div className="card mx-auto max-w-[1180px] p-6 md:p-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={26} />
              <p className="font-display text-[1.05rem] font-semibold">HALOOO</p>
            </div>
            <p className="mt-3 text-[0.9rem] text-muted">Photos et avis Google · Bordeaux et alentours</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-block text-[0.9rem] hover:text-blue-ink">
              {CONTACT_EMAIL}
            </a>
          </div>

          <ul className="grid gap-2 text-[0.86rem] text-muted sm:text-right">
            {legal.map(([href, label]) => (
              <li key={href}>
                <a href={`${import.meta.env.BASE_URL}${href}`} className="hover:text-ink">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-[0.8rem] text-muted">
          <span>© {new Date().getFullYear()} Halooo</span>
          <span>Sans engagement. Vous restez propriétaire de votre fiche.</span>
        </div>
      </div>
    </footer>
  );
}
