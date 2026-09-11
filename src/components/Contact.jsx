import { useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "../data.js";

const field =
  "w-full rounded-[10px] border border-line bg-bg1 px-[15px] py-[13px] text-base text-ink outline-none transition placeholder:text-[#5a6b82] focus:border-accent focus:shadow-[0_0_0_3px_rgba(79,143,255,0.14)]";
const labelCls = "text-[0.9rem] font-medium text-dim";

const PRIVACY = `${import.meta.env.BASE_URL}legal/confidentialite.html`;

/* Lien mail affiché en clair : recours si rien ne s'ouvre côté visiteur */
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

  const panel = "rounded-xl border p-6 text-center";

  return (
    <section id="contact" className="relative py-16 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-[20%] -z-0 h-[560px] w-[560px] max-w-[80vw] -translate-x-1/2 rounded-full blur-[10px]"
        style={{ background: "radial-gradient(circle, rgba(79,143,255,0.18), transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <SectionHead
          eyebrow="État des lieux gratuit"
          lead="Je regarde votre fiche, je la compare à trois commerces de votre rue, et je vous envoie ce que j'ai noté — plus deux photos de votre devanture si je passe dans le quartier. Gratuit, sans suite obligatoire."
        >
          Voyez ce que Google <span className="text-accent">montre de vous.</span>
        </SectionHead>

        <Reveal className="mx-auto max-w-[620px] px-6">
          {status === "sent" && (
            <div className={`${panel} border-accent/40 bg-accent/15`} role="status" aria-live="polite">
              <h3 className="mb-1.5 text-xl font-semibold">C'est reçu.</h3>
              <p className="text-dim">Vous recevez votre état des lieux sous 48h à l'adresse indiquée.</p>
            </div>
          )}

          {status === "draft" && (
            <div className={`${panel} border-accent/40 bg-accent/15`} role="status" aria-live="polite">
              <h3 className="mb-1.5 text-xl font-semibold">Votre message vous attend.</h3>
              <p className="text-dim">
                Un brouillon vient de s'ouvrir dans votre messagerie : <strong className="text-ink">il reste à l'envoyer</strong>.
              </p>
              <p className="mt-3 text-dim">
                Rien ne s'est ouvert ? Écrivez-moi directement à <MailLink />.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className={`${panel} border-gold/40 bg-gold/10`} role="alert">
              <h3 className="mb-1.5 text-xl font-semibold">L'envoi n'a pas abouti.</h3>
              <p className="text-dim">
                Rien n'est perdu : écrivez-moi à <MailLink /> et je vous réponds sous 48h.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 rounded-full border border-line px-5 py-2.5 text-[0.95rem] font-semibold text-ink transition-colors hover:border-accent hover:bg-accent/15"
              >
                Réessayer
              </button>
            </div>
          )}

          {(status === "idle" || status === "sending") && (
            <form onSubmit={onSubmit} noValidate className="grid gap-[18px] rounded-[18px] border border-line bg-surface p-6 md:p-10">
              <div className="grid gap-[7px]">
                <label htmlFor="f-entreprise" className={labelCls}>Nom de l'entreprise</label>
                <input id="f-entreprise" name="entreprise" type="text" autoComplete="organization" placeholder="Ex. Boulangerie du Port" required className={field} />
              </div>
              <div className="grid gap-[18px] sm:grid-cols-2">
                <div className="grid gap-[7px]">
                  <label htmlFor="f-ville" className={labelCls}>Ville</label>
                  <input id="f-ville" name="ville" type="text" autoComplete="address-level2" placeholder="Bordeaux" required className={field} />
                </div>
                <div className="grid gap-[7px]">
                  <label htmlFor="f-tel" className={labelCls}>
                    Téléphone <span className="text-[#64748B]">(optionnel)</span>
                  </label>
                  <input id="f-tel" name="telephone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" className={field} />
                </div>
              </div>
              <div className="grid gap-[7px]">
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
                className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[1.02rem] font-semibold text-[#06101f] shadow-[0_8px_30px_rgba(79,143,255,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(79,143,255,0.42)] disabled:opacity-70"
              >
                {status === "sending" ? "Envoi…" : "Recevoir mon état des lieux"}
              </button>

              <p className="mt-1.5 text-center text-[0.86rem] text-dim">
                Réponse sous 48h · Sans engagement · Vos données ne sont pas revendues.
              </p>
              <p className="text-center text-[0.8rem] text-[#64748B]">
                Ces informations me servent uniquement à préparer votre état des lieux et à vous
                recontacter. Elles sont conservées 12 mois, puis supprimées.{" "}
                <a href={PRIVACY} className="underline underline-offset-2 hover:text-dim">
                  Politique de confidentialité
                </a>
                .
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
