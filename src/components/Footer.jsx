import { Ring } from "./Icons.jsx";
import { CONTACT_EMAIL } from "../data.js";

const legal = [
  ["legal/mentions.html", "Mentions légales"],
  ["legal/cgv.html", "Conditions de prestation"],
  ["legal/confidentialite.html", "Confidentialité"],
];

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5 font-display text-[1.1rem] font-bold">
            <Ring size={16} /> Halo
          </div>
          <p className="mt-2 text-[0.9rem] text-muted">
            Photos et avis Google · Bordeaux et alentours
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-block text-[0.9rem] text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] text-muted">
          {legal.map(([href, label]) => (
            <a key={href} href={`${import.meta.env.BASE_URL}${href}`} className="hover:text-ink">
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1080px] px-6 py-5 text-[0.82rem] text-muted">
          © {new Date().getFullYear()} Halo · Sans engagement — vous restez propriétaire de votre fiche.
        </p>
      </div>
    </footer>
  );
}
