/**
 * Affiche la vraie photo dès que `src` est renseigné dans data.js.
 * Tant que ce n'est pas le cas, on dessine un panneau aux couleurs de
 * la marque, légendé — jamais une fausse photo de commerce.
 * `fill` : occupe tout le parent (fond de carte) au lieu d'un ratio.
 * Tout chemin vers public/ passe par BASE_URL.
 */
export default function Photo({
  photo,
  ratio = "4 / 3",
  className = "",
  rounded = "rounded-[20px]",
  tone = "light",
  fill = false,
  tagCorner = "bl",
  tag = true,
}) {
  const { src, alt, slot } = photo;
  const box = fill ? "ph--fill" : "w-full";
  const style = fill ? undefined : { aspectRatio: ratio };

  if (src) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${fill ? "absolute inset-0 h-full w-full" : "w-full"} object-cover ${rounded} ${className}`}
        style={style}
      />
    );
  }

  return (
    <div
      className={`ph ${tone === "dark" ? "ph--dark" : ""} ${box} ${rounded} ${className}`}
      style={style}
      role="img"
      aria-label={`Emplacement réservé : ${slot}`}
    >
      {tag && <span className={`ph-tag ${tagCorner === "tr" ? "ph-tag--tr" : ""}`}>{slot}</span>}
    </div>
  );
}
