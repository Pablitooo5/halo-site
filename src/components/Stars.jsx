/** Rangée d'étoiles qui se remplit quand le bloc parent devient visible. */
export default function Stars({ size = 14, count = 5 }) {
  return (
    <span className="stars" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="star" viewBox="0 0 24 24" width={size} height={size}
             fill="currentColor" style={{ transitionDelay: `${250 + i * 100}ms` }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}
