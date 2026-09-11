import { useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "../data.js";

const field =
  "w-full rounded-[10px] border border-line bg-bg1 px-[15px] py-[13px] text-base text-ink outline-none transition placeholder:text-[#5a6b82] focus:border-accent focus:shadow-[0_0_0_3px_rgba(79,143,255,0.14)]";
const labelCls = "text-[0.9rem] font-medium text-dim";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = {
      entreprise: form.entreprise.value.trim(),
      ville: form.ville.value.trim(),
      email: form.email.value.trim(),
      telephone: form.telephone.value.trim(),
    };

    const mailtoFallback = () => {
      const subject = `Demande d'état des lieux — ${data.entreprise}`;
      const body =
        `Bonjour,\n\nJe souhaite recevoir un état des lieux de ma fiche Google.\n\n` +
        `Entreprise : ${data.entreprise}\nVille : ${data.ville}\nEmail : ${data.email}\n` +
        `Téléphone : ${data.telephone || "—"}\n\nMerci !`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent(true);
    };

    if (FORMSPREE_ENDPOINT.includes("REMPLACER")) {
      mailtoFallback();
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) setSent(true);
      else mailtoFallback();
    } catch {
      mailtoFallback();
    } finally {
      setBusy(false);
    }
  };

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
          {sent ? (
            <div className="rounded-xl border border-accent/40 bg-accent/15 p-6 text-center" role="status" aria-live="polite">
              <h3 className="mb-1.5 text-xl font-semibold">C'est reçu.</h3>
              <p className="text-dim">Vous recevez votre état des lieux sous 48h à l'adresse indiquée.</p>
            </div>
          ) : (
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
              <button
                type="submit"
                disabled={busy}
                className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[1.02rem] font-semibold text-[#06101f] shadow-[0_8px_30px_rgba(79,143,255,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(79,143,255,0.42)] disabled:opacity-70"
              >
                {busy ? "Envoi…" : "Recevoir mon état des lieux"}
              </button>
              <p className="mt-1.5 text-center text-[0.86rem] text-dim">
                Réponse sous 48h · Sans engagement · Vos données ne sont pas revendues.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
