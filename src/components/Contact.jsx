import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "../data.js";

const field =
  "w-full border-b border-rule bg-transparent px-0 py-2.5 text-[1rem] text-ink outline-none transition placeholder:text-muted/60 focus:border-blue";
const labelCls = "label";

const PRIVACY = `${import.meta.env.BASE_URL}legal/confidentialite.html`;

/* Adresse en clair : recours si aucune messagerie ne s’ouvre côté visiteur */
function MailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="border-b border-amber font-medium">
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
      setStatus("sent"); // on n’envoie rien, sans le signaler au robot
      return;
    }

    const data = {
      entreprise: form.entreprise.value.trim(),
      ville: form.ville.value.trim(),
      email: form.email.value.trim(),
      telephone: form.telephone.value.trim(),
    };

    /* Ouvre un brouillon dans la messagerie du visiteur.
       On NE confirme PAS l’envoi : le message n’est pas parti, et si aucun
       client mail n’est configuré, il ne se passe rien du tout. */
    const openDraft = () => {
      const subject = `Demande d’état des lieux — ${data.entreprise}`;
      const body =
        `Bonjour,\n\nJe souhaite recevoir un état des lieux de ma fiche Google.\n\n` +
        `Entreprise : ${data.entreprise}\nVille : ${data.ville}\nEmail : ${data.email}\n` +
        `Téléphone : ${data.telephone || "—"}\n\nMerci !`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("draft");
    };

    // Tant qu’aucun service de formulaire n’est branché, on passe par la messagerie
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

  const panel = "border-t-[3px] border-blue pt-6";

  return (
    <Section id="contact" num="04" kicker="Le contact">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-12">
        <Reveal>
          <h2 className="max-w-[18ch] text-[1.8rem] md:text-[2.5rem]">
              Voyez ce que Google montre de vous.
            </h2>
            <p className="mt-5 max-w-[44ch] text-muted">
              Je regarde votre fiche, je la compare à trois commerces de votre rue et je vous envoie
              par écrit ce que j’ai noté. Gratuit, sans suite obligatoire.
            </p>
            <ul className="dash-list mt-6 grid gap-1.5 text-[0.95rem] text-muted">
              <li>Réponse sous 48 heures</li>
              <li>Aucun appel commercial non sollicité</li>
              <li>Vos données ne sont ni revendues ni partagées</li>
            </ul>
          </Reveal>

          <Reveal delay={60}>
            {status === "sent" && (
              <div className={`${panel}`} role="status" aria-live="polite">
                <h3 className="text-[1.4rem]">C’est reçu.</h3>
                <p className="text-muted">Vous recevez votre état des lieux sous 48 h à l’adresse indiquée.</p>
              </div>
            )}

            {status === "draft" && (
              <div className={`${panel}`} role="status" aria-live="polite">
                <h3 className="text-[1.4rem]">Votre message vous attend.</h3>
                <p className="text-muted">
                  Un brouillon vient de s’ouvrir dans votre messagerie : <strong className="text-ink">il reste à l’envoyer</strong>.
                </p>
                <p className="mt-3 text-muted">
                  Rien ne s’est ouvert ? Écrivez-moi directement à <MailLink />.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className={`${panel}`} role="alert">
                <h3 className="text-[1.4rem]">L’envoi n’a pas abouti.</h3>
                <p className="text-muted">
                  Rien n’est perdu : écrivez-moi à <MailLink /> et je vous réponds sous 48 h.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn btn--ghost mt-5"
                >
                  Réessayer
                </button>
              </div>
            )}

            {(status === "idle" || status === "sending") && (
              <form onSubmit={onSubmit} noValidate className="relative grid gap-6 border-t-[3px] border-blue pt-7">
                <div className="grid gap-1">
                  <label htmlFor="f-entreprise" className={labelCls}>Nom de l’entreprise</label>
                  <input id="f-entreprise" name="entreprise" type="text" autoComplete="organization" placeholder="Ex. Boulangerie du Port" required className={field} />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-1">
                    <label htmlFor="f-ville" className={labelCls}>Ville</label>
                    <input id="f-ville" name="ville" type="text" autoComplete="address-level2" placeholder="Bordeaux" required className={field} />
                  </div>
                  <div className="grid gap-1">
                    <label htmlFor="f-tel" className={labelCls}>
                      Téléphone (optionnel)
                    </label>
                    <input id="f-tel" name="telephone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" className={field} />
                  </div>
                </div>
                <div className="grid gap-1">
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
                  className="btn mt-1 w-full disabled:opacity-70"
                >
                  {status === "sending" ? "Envoi…" : "Recevoir mon état des lieux"}
                </button>

                <p className="text-[0.8rem] text-muted">
                  Ces informations me servent uniquement à préparer votre état des lieux et à vous
                  recontacter. Elles sont conservées 12 mois, puis supprimées.{" "}
                  <a href={PRIVACY} className="border-b border-amber hover:text-ink">
                    Politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            )}
        </Reveal>
      </div>
    </Section>
  );
}
