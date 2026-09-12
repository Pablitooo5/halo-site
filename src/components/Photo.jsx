/**
 * Affiche une vraie photo dès que `src` est renseigné dans data.js,
 * sinon un emplacement en attente. Tout chemin vers public/ passe par BASE_URL.
 */
export default function Photo({ photo, ratio = "4 / 5", className = "" }) {
  const { src, alt, slot, hint } = photo;

  if (src) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover ${className}`}
        style={{ aspectRatio: ratio }}
      />
    );
  }

  return (
    <div
      className={`slot ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Emplacement réservé : ${slot}`}
    >
      <div>
        <p className="label">{slot}</p>
        <p className="caption mt-1">à ajouter · {hint}</p>
      </div>
    </div>
  );
}
