/**
 * Affiche une vraie photo dès que `src` est renseigné dans data.js,
 * sinon un emplacement balisé (visible, explicite, à remplacer).
 * Tout chemin vers public/ passe par BASE_URL.
 */
export default function Photo({ photo, ratio = "4 / 5", className = "", rounded = "rounded-2xl", compact = false }) {
  const { src, alt, slot, hint } = photo;

  if (src) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${rounded} w-full object-cover ${className}`}
        style={{ aspectRatio: ratio }}
      />
    );
  }

  return (
    <div
      className={`slot ${compact ? "slot--compact" : ""} ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Emplacement réservé : ${slot}`}
    >
      <div>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 opacity-70" aria-hidden="true">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <p className="font-display text-[0.95rem] font-semibold text-ink">{slot}</p>
        {!compact && <p className="mt-0.5 text-[0.8rem]">à ajouter · {hint}</p>}
      </div>
    </div>
  );
}
