/** La marque Halooo : l'anneau du logo, dégradé bleu → ambre, avec son point. */
export default function Logo({ size = 26, className = "" }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="halooo-ring" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#4F93FE" />
          <stop offset="0.5" stopColor="#8FB4F0" />
          <stop offset="1" stopColor="#FFCE56" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="21" r="13" fill="none" stroke="url(#halooo-ring)" strokeWidth="3.2" />
      <circle cx="20" cy="21" r="4.6" fill="#F5B01E" />
      <circle cx="20" cy="8" r="2.8" fill="#F5B01E" />
    </svg>
  );
}
