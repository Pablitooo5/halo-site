// Badge Google 3D à deux faces qui pivote (CSS preserve-3d + backface-visibility)
export default function Badge() {
  return (
    <div className="badge-float">
      <div className="badge-persp">
        <div className="badge">
          <div className="badge-face badge-face--front">
            <img
              src="/assets/badge-front.webp"
              srcSet="/assets/badge-front-500.webp 500w, /assets/badge-front.webp 800w"
              sizes="(max-width: 860px) 240px, 380px"
              width={800}
              height={1200}
              alt="Fiche Google Business Halo : SEO, référencement, visibilité — noté 4,9 sur 5 avec 512 avis, Bordeaux."
              decoding="async"
            />
          </div>
          <div className="badge-face badge-face--back" aria-hidden="true">
            <img
              src="/assets/badge-back.webp"
              srcSet="/assets/badge-back-500.webp 500w, /assets/badge-back.webp 800w"
              sizes="(max-width: 860px) 240px, 380px"
              width={800}
              height={1200}
              alt=""
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
