import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Arrow from "./Arrow.jsx";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "../data.js";

const field = "field";

const PRIVACY = `${import.meta.env.BASE_URL}legal/confidentialite.html`;

const bullets = [
  "Je regarde vos photos et vos avis",
  "Je vous compare à trois concurrents de votre rue",
  "Je vous dis ce qu’il y a à corriger en premier",
  "Réponse sous 48 heures. Aucun appel commercial.",
];

/* Qualification de la demande : ce qui intéresse la personne. */
const INTERETS = [
  { v: "photos", label: "Les photos", detail: "Prise de vue et publication" },
  { v: "avis", label: "Les avis", detail: "Réponses et collecte" },
  { v: "les-deux", label: "Les deux", detail: "L’offre complète" },
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
  const [interet, setInteret] = useState("");

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
      interet: (INTERETS.find((i) => i.v === interet) || {}).label || "non précisé",
      entreprise: form.entreprise.value.trim(),
      ville: form.ville.value.trim(),
      email: form.email.value.trim(),
      telephone: form.telephone.value.trim(),
    };

    /* Ouvre un brouillon dans la messagerie du visiteur.
       On NE confirme PAS l'envoi : le message n'est pas parti, et si aucun
       client mail n'est configuré, il ne se passe rien du tout. */
    const openDraft = () => {
      const subject = `Demande de rendez-vous : ${data.entreprise}`;
      const body =
        `Bonjour,\n\nJe souhaite prendre rendez-vous au sujet de ma fiche Google.\n\n` +
        `Ce qui m’intéresse : ${data.interet}\n` +
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

  const panel = "rounded-[20px] bg-page p-7";

  return (
    <section id="contact" className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="card mx-auto max-w-[1180px] p-7 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="label">Le rendez-vous</p>
            <h2 className="mt-4 text-[1.9rem] md:text-[2.6rem]">
              Parlons de votre fiche.
            </h2>
            <p className="mt-5 max-w-[46ch] text-muted">
              Dites-moi qui vous êtes. Je regarde votre fiche avant de vous répondre, et je vous
              dis ce que j’y vois. C’est gratuit, et ça ne vous engage à rien.
            </p>
            <ul className="spec mt-8 max-w-[38ch]">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={110}>
            {status === "sent" && (
              <div className={panel} role="status" aria-live="polite">
                <h3 className="text-[1.3rem]">C’est reçu.</h3>
                <p className="mt-2 text-muted">
                  Je vous réponds sous 48 h à l’adresse indiquée.
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
              <form onSubmit={onSubmit} noValidate className="relative grid gap-4 rounded-[20px] bg-page p-6 md:p-8">
                <fieldset className="grid gap-1.5 border-0 p-0">
                  <legend className="label mb-1.5 text-ink">Ce qui vous intéresse</legend>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {INTERETS.map((o) => (
                      <label
                        key={o.v}
                        className={`pick ${interet === o.v ? "pick--on" : ""}`}
                      >
                        <input
                          type="radio"
                          name="interet"
                          value={o.label}
                          required
                          checked={interet === o.v}
                          onChange={() => setInteret(o.v)}
                          className="sr-only"
                        />
                        <span className="block text-[0.95rem] font-medium">{o.label}</span>
                        <span className="mt-0.5 block text-[0.8rem] text-muted">{o.detail}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-1.5">
                  <label htmlFor="f-entreprise" className="label text-ink">Nom de l’entreprise</label>
                  <input id="f-entreprise" name="entreprise" type="text" autoComplete="organization"
                         placeholder="Ex. Boulangerie du Port" required className={field} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="f-ville" className="label text-ink">Ville</label>
                    <input id="f-ville" name="ville" type="text" autoComplete="address-level2"
                           placeholder="Bordeaux" required className={field} />
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="f-tel" className="label text-ink">Téléphone <span className="font-normal text-muted">(optionnel)</span></label>
                    <input id="f-tel" name="telephone" type="tel" autoComplete="tel"
                           placeholder="06 12 34 56 78" className={field} />
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="f-email" className="label text-ink">Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email"
                         placeholder="vous@exemple.fr" required className={field} />
                </div>

                {/* Leurre anti-robots : invisible et hors du parcours clavier */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="f-site">Ne remplissez pas ce champ</label>
                  <input id="f-site" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn mt-2 justify-between disabled:opacity-70">
                  {status === "sending" ? "Envoi…" : "Demander un rendez-vous"}
                  <span className="btn-arrow"><Arrow /></span>
                </button>

                <p className="text-[0.78rem] text-muted">
                  Ces informations me servent uniquement à préparer notre échange et à vous
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
