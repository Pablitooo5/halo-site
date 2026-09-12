// Contenu du site. Aucun faux avis, aucun faux chiffre client, et aucun
// pourcentage sans source vérifiable.

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
  alt: "Devanture d’un commerce bordelais photographiée pour sa fiche Google",
  slot: "Photo d’une devanture",
  hint: "format paysage, 5:4",
};

export const workPhotos = [
  { src: null, alt: "Intérieur d’un commerce", slot: "Intérieur", hint: "4:3" },
  { src: null, alt: "Produits en vitrine", slot: "Produits", hint: "4:3" },
  { src: null, alt: "Le commerçant dans sa boutique", slot: "L’équipe", hint: "4:3" },
];

export const portrait = {
  src: null, // ex. "assets/photos/pablo.jpg"
  alt: "Pablo, fondateur de Halooo",
  slot: "Photo de moi",
  hint: "portrait, 4:5",
};

/* ------------------------------------------------------------------
   L'OFFRE — deux leviers, pas plus.
   ------------------------------------------------------------------ */
export const services = [
  {
    accent: "blue",
    title: "Je photographie votre commerce",
    text:
      "Prise de vue sur place, au matériel professionnel. Vous recevez les fichiers en moins de 48 heures, et ils vous appartiennent : votre fiche Google, votre site, vos affiches, vos réseaux, vous en faites ce que vous voulez.",
    points: [
      "Matériel professionnel",
      "Livrées en moins de 48 heures",
      "Libres d’emploi : Google, site web, affiches",
      "Publiées sur votre fiche par mes soins",
    ],
  },
  {
    accent: "amber",
    title: "J’optimise vos avis",
    text:
      "Je réponds aux avis à votre place. Les mauvais, jamais sans vous : on prend rendez-vous et on décide ensemble de la réponse. Pour en recevoir davantage, je mets à votre comptoir une plaque sans contact, dans le style qui va avec votre boutique.",
    points: [
      "Réponses rapides à vos avis",
      "Les avis négatifs traités avec vous",
      "Plaques NFC, plusieurs styles au choix",
      "Objectif : votre réputation, pas un tableau de bord",
    ],
  },
];

/* ------------------------------------------------------------------
   TARIFS — informatifs. Rien ne s'achète sur ce site.
   ------------------------------------------------------------------ */
export const pricing = [
  {
    name: "La mise en route",
    price: "490 €",
    period: "une seule fois, au démarrage",
    accent: "blue",
    items: [
      "Le premier passage photo, sur place",
      "Le tri, la retouche et la publication sur votre fiche",
      "La plaque de collecte d’avis, posée et configurée",
      "La reprise de vos avis des trois derniers mois",
    ],
  },
  {
    name: "L’abonnement",
    price: "249 €",
    period: "par mois, sans engagement",
    accent: "amber",
    items: [
      "Un passage photo chaque trimestre",
      "Les réponses à vos avis, en continu",
      "Un rendez-vous dès qu’un avis négatif arrive",
      "Vos photos publiées tout au long du mois",
      "Un rapport d’une page chaque mois",
    ],
  },
];

/* Précisions tarifaires — uniquement des faits déjà établis, rien d'inventé. */
export const pricingNotes = [
  "La mise en route se règle une seule fois, au moment du premier passage.",
  "L’abonnement est sans engagement : vous l’arrêtez quand vous le décidez.",
  "Les photos vous appartiennent, y compris si vous arrêtez.",
  "Prix nets, TVA non applicable (article 293 B du CGI).",
  "Rien ne se paie sur ce site : on en parle d’abord, vous décidez ensuite.",
];

/* ------------------------------------------------------------------
   Les trois critères de classement d'une fiche, tels que Google les
   publie dans sa propre documentation. Aucun pourcentage inventé.
   ------------------------------------------------------------------ */
export const googleFactors = [
  {
    name: "La pertinence",
    text: "À quel point votre fiche correspond à ce que la personne cherche. Des photos à jour et des avis récents y contribuent.",
    actionable: true,
  },
  {
    name: "La distance",
    text: "L’éloignement entre la personne qui cherche et votre commerce. Sur ce point, personne ne peut rien.",
    actionable: false,
  },
  {
    name: "La notoriété",
    text: "La réputation de votre établissement. Le nombre d’avis et la note comptent directement dedans.",
    actionable: true,
  },
];
