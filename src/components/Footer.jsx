import { Ring } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-line px-6 pb-10 pt-14">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5 font-display text-[1.3rem] font-bold">
            <Ring /> Halo
          </div>
          <p className="max-w-[34ch] text-dim">
            On gère votre fiche Google, on l'anime et on fait grimper vos avis. Vous récupérez les appels.
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[0.82rem] uppercase tracking-[0.1em] text-dim">Le service</h4>
          {[
            ["#offre", "L'offre"],
            ["#tarifs", "Tarifs"],
            ["#etapes", "Comment ça marche"],
            ["#contact", "Voir ce que Google montre de moi"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="mb-2 block text-dim transition-colors hover:text-ink">{label}</a>
          ))}
        </div>
        <div>
          <h4 className="mb-3.5 text-[0.82rem] uppercase tracking-[0.1em] text-dim">Contact</h4>
          <a href="mailto:halo.contact@gmail.com" className="mb-2 block text-dim transition-colors hover:text-ink">halo.contact@gmail.com</a>
          <span className="mb-2 block text-dim">Bordeaux et alentours</span>
          <a href={`${import.meta.env.BASE_URL}legal/mentions.html`} className="mb-2 block text-dim transition-colors hover:text-ink">Mentions légales</a>
          <a href={`${import.meta.env.BASE_URL}legal/cgv.html`} className="mb-2 block text-dim transition-colors hover:text-ink">Conditions de prestation</a>
          <a href={`${import.meta.env.BASE_URL}legal/confidentialite.html`} className="mb-2 block text-dim transition-colors hover:text-ink">Confidentialité</a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1180px] flex-wrap justify-between gap-x-5 gap-y-2.5 border-t border-line pt-[22px] text-[0.85rem] text-[#64748B]">
        <span>© {new Date().getFullYear()} Halo · Bordeaux</span>
        <span className="text-accent">Sans engagement — vous restez propriétaire de votre fiche.</span>
      </div>
    </footer>
  );
}
