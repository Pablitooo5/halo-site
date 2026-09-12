import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "../data.js";

const field =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-[1rem] text-ink outline-none transition placeholder:text-[#9aa8b8] focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,86,219,0.12)]";
const labelCls = "text-[0.9rem] font-medium text-ink";

const PRIVACY = `${import.meta.env.BASE_URL}legal/confidentialite.html`;

/* Adresse en clair : recours si aucune messagerie ne s'ouvre côté visiteur */
function MailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-accent underline underline-offset-2">
      {CONTACT_EMAIL}
    </a>
  );
}

export default function Contact() {
  // idle · sending · sent (200 confirmé) · draft (mailto ouvert) · error
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Anti-spam : champ leurre invisible, rempli uniquement par les robots
    if (form._gotcha && form._gotcha.value) {
      setStatus("sent"); // on n'envoie rien, sans le signaler au robot
      return;
    }

    const data = {
      entreprise: form.entreprise.value.trim(),
      ville: form.ville.value.trim(),
      email: form.email.value.trim(),
      telephone: form.telephone.value.trim(),
    };

    /* Ouvre un brouillon dans la messagerie du visiteur.
       On NE confirme PAS l'envoi : le message n'est pas parti, et si aucun
       client mail n'est configuré, il ne se passe rien du tout. */
    const openDraft = () => {
      const subject = `Demande d'état des lieux — ${data.entreprise}`;
      const body =
        `Bonjour,\n\nJe souhaite recevoir un état des lieux de ma fiche Google.\n\n` +
        `Entreprise : ${data.entreprise}\nVille : ${data.ville}\nEmail : ${data.email}\n` +
        `Téléphone : ${data.telephone || "—"}\n\nMerci !`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("draft");
    };

    // Tant qu'aucun service de formulaire n'est branché, on passe par la messagerie
    if (FORMSPREE_ENDPOINT.includes("REMPLACER")) {
      openDraft();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) setStatus("sent"); // succès uniquement sur réponse 200
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const panel = "rounded-2xl border p-7 text-center";

  return (
    <section id="contact" className="border-b border-line bg-ground">
      <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[1fr_1.05fr] md:gap-14">
          <Reveal>
            <h2 className="text-[1.7rem] font-bold md:text-[2.2rem]">
              Voyez ce que Google montre de vous.
            </h2>
            <p className="mt-4 text-muted">
              Je regarde votre fiche, je la compare à trois commerces de votre rue et je vous envoie
              par écrit ce que j'ai noté. Gratuit, sans suite obligatoire.
            </p>
            <ul className="mt-6 grid gap-2 text-[0.95rem] text-muted">
              <li>Réponse sous 48 heures</li>
              <li>Aucun appel commercial non sollicité</li>
              <li>Vos données ne sont ni revendues ni partagées</li>
            </ul>
          </Reveal>

          <Reveal delay={60}>
            {status === "sent" && (
              <div className={`${panel} border-accent bg-accent-soft`} role="status" aria-live="polite">
                <h3 className="mb-1.5 text-[1.2rem] font-semibold">C'est reçu.</h3>
                <p className="text-muted">Vous recevez votre état des lieux sous 48 h à l'adresse indiquée.</p>
              </div>
            )}

            {status === "draft" && (
              <div className={`${panel} border-accent bg-accent-soft`} role="status" aria-live="polite">
                <h3 className="mb-1.5 text-[1.2rem] font-semibold">Votre message vous attend.</h3>
                <p className="text-muted">
                  Un brouillon vient de s'ouvrir dans votre messagerie : <strong className="text-ink">il reste à l'envoyer</strong>.
                </p>
                <p className="mt-3 text-muted">
                  Rien ne s'est ouvert ? Écrivez-moi directement à <MailLink />.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className={`${panel} border-gold bg-gold/10`} role="alert">
                <h3 className="mb-1.5 text-[1.2rem] font-semibold">L'envoi n'a pas abouti.</h3>
                <p className="text-muted">
                  Rien n'est perdu : écrivez-moi à <MailLink /> et je vous réponds sous 48 h.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 rounded-lg border border-line px-5 py-2.5 text-[0.95rem] font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  Réessayer
                </button>
              </div>
            )}

            {(status === "idle" || status === "sending") && (
              <form onSubmit={onSubmit} noValidate className="relative grid gap-4 rounded-2xl border border-line bg-paper p-6 md:p-8">
                <div className="grid gap-1.5">
                  <label htmlFor="f-entreprise" className={labelCls}>Nom de l'entreprise</label>
                  <input id="f-entreprise" name="entreprise" type="text" autoComplete="organization" placeholder="Ex. Boulangerie du Port" required className={field} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="f-ville" className={labelCls}>Ville</label>
                    <input id="f-ville" name="ville" type="text" autoComplete="address-level2" placeholder="Bordeaux" required className={field} />
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="f-tel" className={labelCls}>
                      Téléphone <span className="font-normal text-muted">(optionnel)</span>
                    </label>
                    <input id="f-tel" name="telephone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" className={field} />
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="f-email" className={labelCls}>Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.fr" required className={field} />
                </div>

                {/* Leurre anti-robots : invisible et hors du parcours clavier */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="f-site">Ne remplissez pas ce champ</label>
                  <input id="f-site" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 w-full rounded-lg bg-accent px-6 py-3.5 text-[1rem] font-semibold text-white transition-colors hover:bg-[#1547b5] disabled:opacity-70"
                >
                  {status === "sending" ? "Envoi…" : "Recevoir mon état des lieux"}
                </button>

                <p className="text-[0.8rem] text-muted">
                  Ces informations me servent uniquement à préparer votre état des lieux et à vous
                  recontacter. Elles sont conservées 12 mois, puis supprimées.{" "}
                  <a href={PRIVACY} className="underline underline-offset-2 hover:text-ink">
                    Politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
