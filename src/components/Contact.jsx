import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Arrow from "./Arrow.jsx";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "../data.js";

const field =
  "w-full rounded-[14px] bg-page px-4 py-3.5 text-[0.98rem] text-ink outline-none transition placeholder:text-muted/70 focus:shadow-[inset_0_0_0_1.5px_var(--color-blue)]";

const PRIVACY = `${import.meta.env.BASE_URL}legal/confidentialite.html`;

const bullets = [
  "L’état de vos photos et de vos avis",
  "Le même relevé pour trois concurrents proches",
  "Ce qu’il y a à corriger en premier",
  "Par écrit, sous 48 heures. Aucun appel commercial.",
];

/* Adresse en clair : recours si aucune messagerie ne s'ouvre côté visiteur */
function MailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline underline-offset-2">
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
      const subject = `Demande d’état des lieux : ${data.entreprise}`;
      const body =
        `Bonjour,\n\nJe souhaite recevoir un état des lieux de ma fiche Google.\n\n` +
        `Entreprise : ${data.entreprise}\nVille : ${data.ville}\nEmail : ${data.email}\n` +
        `Téléphone : ${data.telephone || "non communiqué"}\n\nMerci !`;
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

  const panel = "rounded-[24px] bg-page p-7";

  return (
    <section id="contact" className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="card mx-auto max-w-[1180px] p-6 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="label">L’état des lieux</p>
            <h2 className="mt-4 text-[1.9rem] md:text-[2.6rem]">
              Voyez ce que Google montre de vous.
            </h2>
            <p className="mt-5 max-w-[44ch] text-muted">
              Je regarde vos photos et vos avis, puis je vous compare à trois commerces qui vous
              font concurrence dans votre rue. Vous voyez noir sur blanc où vous vous situez, et ce
              qui vous sépare d’eux.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {bullets.map((b) => (
                <li key={b} className="chip chip--solid text-[0.82rem]">{b}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={110}>
            {status === "sent" && (
              <div className={panel} role="status" aria-live="polite">
                <h3 className="text-[1.3rem]">C’est reçu.</h3>
                <p className="mt-2 text-muted">
                  Vous recevez votre état des lieux sous 48 h à l’adresse indiquée.
                </p>
              </div>
            )}

            {status === "draft" && (
              <div className={panel} role="status" aria-live="polite">
                <h3 className="text-[1.3rem]">Votre message vous attend.</h3>
                <p className="mt-2 text-muted">
                  Un brouillon vient de s’ouvrir dans votre messagerie :{" "}
                  <strong className="text-ink">il reste à l’envoyer</strong>.
                </p>
                <p className="mt-3 text-muted">
                  Rien ne s’est ouvert ? Écrivez-moi directement à <MailLink />.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className={panel} role="alert">
                <h3 className="text-[1.3rem]">L’envoi n’a pas abouti.</h3>
                <p className="mt-2 text-muted">
                  Rien n’est perdu : écrivez-moi à <MailLink /> et je vous réponds sous 48 h.
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="btn btn--ghost mt-5">
                  Réessayer
                  <span className="btn-arrow"><Arrow /></span>
                </button>
              </div>
            )}

            {(status === "idle" || status === "sending") && (
              <form onSubmit={onSubmit} noValidate className="relative grid gap-4 rounded-[24px] bg-page p-6 md:p-8">
                <div className="grid gap-1.5">
                  <label htmlFor="f-entreprise" className="label">Nom de l’entreprise</label>
                  <input id="f-entreprise" name="entreprise" type="text" autoComplete="organization"
                         placeholder="Ex. Boulangerie du Port" required className={`${field} bg-card`} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="f-ville" className="label">Ville</label>
                    <input id="f-ville" name="ville" type="text" autoComplete="address-level2"
                           placeholder="Bordeaux" required className={`${field} bg-card`} />
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="f-tel" className="label">Téléphone (optionnel)</label>
                    <input id="f-tel" name="telephone" type="tel" autoComplete="tel"
                           placeholder="06 12 34 56 78" className={`${field} bg-card`} />
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="f-email" className="label">Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email"
                         placeholder="vous@exemple.fr" required className={`${field} bg-card`} />
                </div>

                {/* Leurre anti-robots : invisible et hors du parcours clavier */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="f-site">Ne remplissez pas ce champ</label>
                  <input id="f-site" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn mt-2 justify-between disabled:opacity-70">
                  {status === "sending" ? "Envoi…" : "Recevoir mon état des lieux"}
                  <span className="btn-arrow"><Arrow /></span>
                </button>

                <p className="text-[0.78rem] text-muted">
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
