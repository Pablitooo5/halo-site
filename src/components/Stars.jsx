/**
 * Rangée d'étoiles qui se remplissent une à une quand le bloc arrive.
 * Le remplissage est piloté par la classe `is-visible` d'un parent <Reveal/>.
 */
export default function Stars({ size = 15, count = 5 }) {
  return (
    <span className="stars" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="star"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          style={{ transitionDelay: `${300 + i * 110}ms` }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}
