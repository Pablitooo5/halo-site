// Contenu du site. Aucun faux avis, aucun faux chiffre client :
// les seuls chiffres cités sont des chiffres de marché, pas des résultats Halo.

export const CONTACT_EMAIL = "halo.contact@gmail.com";
// Remplacer par l'endpoint Formspree ; tant que "REMPLACER" est présent, repli mailto.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/REMPLACER_ICI";

/* ------------------------------------------------------------------
   PHOTOS — pour afficher une vraie photo, poser le fichier dans
   public/assets/photos/ et renseigner "src" (chemin SANS slash initial,
   il passe par BASE_URL). Tant que src vaut null, un emplacement
   balisé s'affiche à la place.
   ------------------------------------------------------------------ */
export const heroPhoto = {
  src: null, // ex. "assets/photos/devanture.jpg"
  alt: "Devanture d'un commerce bordelais photographiée pour sa fiche Google",
  slot: "Photo d'une devanture",
  hint: "Format portrait, 4:5",
};

export const workPhotos = [
  { src: null, alt: "Intérieur d'un commerce", slot: "Intérieur", hint: "4:3" },
  { src: null, alt: "Produits en vitrine", slot: "Produits", hint: "4:3" },
  { src: null, alt: "Le commerçant dans sa boutique", slot: "L'équipe", hint: "4:3" },
];

export const portrait = {
  src: null, // ex. "assets/photos/pablo.jpg"
  alt: "Pablo, fondateur de Halo",
  slot: "Photo de moi",
  hint: "Portrait, carré",
};

/* ------------------------------------------------------------------
   OFFRE — deux choses, pas plus.
   ------------------------------------------------------------------ */
export const services = [
  {
    icon: "camera",
    title: "Je photographie votre commerce",
    text:
      "Je viens sur place, 90 minutes : la façade, la salle, vos produits, vous. Je trie, je retouche, je publie sur votre fiche Google. Puis je reviens chaque trimestre.",
    points: ["Sur place, à Bordeaux", "60 photos et plus", "Publiées par mes soins"],
  },
  {
    icon: "star",
    title: "Je réponds à tous vos avis",
    text:
      "Chaque avis reçoit une réponse sous 24 heures, les bons comme les mauvais — surtout les mauvais, ce sont ceux que vos futurs clients lisent en premier.",
    points: ["100 % des avis", "Sous 24 heures", "Une plaque à votre caisse pour en recevoir plus"],
  },
];

/* ------------------------------------------------------------------
   TARIFS — informatifs. Rien ne s'achète sur ce site.
   ------------------------------------------------------------------ */
export const pricing = [
  {
    name: "La mise en route",
    price: "490 €",
    period: "une seule fois",
    items: [
      "Le shooting complet sur place",
      "Le tri et la publication des photos",
      "La plaque de collecte d'avis posée",
      "La réponse à vos avis des trois derniers mois",
    ],
  },
  {
    name: "L'abonnement",
    price: "249 €",
    period: "par mois, sans engagement",
    featured: true,
    items: [
      "Un passage photo chaque trimestre",
      "La réponse à 100 % de vos avis, sous 24 h",
      "Vos photos publiées tout au long du mois",
      "Un rapport d'une page chaque mois",
    ],
  },
];

/* Chiffres de marché (source : études publiques sur la recherche locale).
   Aucun ne prétend décrire un résultat obtenu par Halo. */
export const facts = [
  { num: "84 %", label: "des vues de fiche Google viennent d'un téléphone." },
  { num: "95 %", label: "des gens lisent la réponse du gérant avant de choisir." },
];
