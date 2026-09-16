// Contenu du site. Aucun faux avis, aucun faux chiffre client, et aucun
// pourcentage sans source vérifiable.

export const CONTACT_EMAIL = "halooo.fr@outlook.fr";

/* Envoi du formulaire via Web3Forms.
   La clé est publique par conception : elle ne donne accès à rien, elle
   désigne seulement la boîte de destination. Tant qu'elle vaut
   "REMPLACER", le formulaire se replie sur un brouillon e-mail.
   Clé à récupérer sur web3forms.com (sans compte). */
export const WEB3FORMS_KEY = "9a156339-f5dc-49d2-b71c-45acb0211e90";
export const FORM_ENDPOINT = "https://api.web3forms.com/submit";

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
      "Je réponds aux avis à votre place. Les mauvais ne partent jamais sans votre accord : je vous écris la réponse que je propose, vous validez, je publie. Pour en recevoir davantage, je mets à votre comptoir une plaque sans contact, dans le style qui va avec votre boutique.",
    points: [
      "Une réponse à chacun de vos avis, sous 24 heures",
      "Les avis négatifs validés par vous",
      "Plaques NFC, plusieurs styles au choix",
      "Objectif : votre réputation, pas un tableau de bord",
    ],
  },
];

/* ------------------------------------------------------------------
   TARIFS — montants retirés le 16/09/2026, le temps que la grille se
   cale sur les premiers chantiers. Publier un prix puis le changer est
   pire que de ne pas l'afficher. Aucune vente n'est possible sans SIRET
   de toute façon. Ne pas réintroduire de montant sans feu vert de Pablo.
   ------------------------------------------------------------------ */
export const pricingBody = [
  "Mes tarifs seront affichés ici, comme le reste du site. C’est une question de principe, pas de stratégie.",
  "Je finis de les caler sur mes premiers chantiers. En attendant, demandez-les moi : je réponds sous 24 heures, et il n’y a rien à payer sur ce site.",
];

export const pricingNotes = [
  "Un tarif unique, quelle que soit la taille du commerce",
  "Sans engagement",
  "Rien ne se souscrit ni ne se paie sur ce site",
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

/* ------------------------------------------------------------------
   Le bandeau de bas de hero : trois repères, pas des pastilles.
   ------------------------------------------------------------------ */
export const heroMeta = [
  { k: "Sur place", v: "Bordeaux et alentours" },
  { k: "Photos", v: "Livrées en moins de 48 h" },
  { k: "Avis", v: "Une réponse sous 24 h" },
];

/* ------------------------------------------------------------------
   Les étapes. Rien ici qui ne soit déjà tenu dans la procédure.
   ------------------------------------------------------------------ */
export const processSteps = [
  {
    num: "01",
    name: "Le premier échange",
    body: [
      "Vous me dites qui vous êtes. Je regarde vos photos et vos avis, et je vous compare à trois commerces qui vous font concurrence dans votre rue.",
      "Je vous réponds sous 48 heures avec ce que j’ai relevé. C’est gratuit et ça ne vous engage à rien.",
    ],
  },
  {
    num: "02",
    name: "La prise de vue",
    body: [
      "Je viens sur place avec du matériel professionnel. La façade, la salle, vos produits, votre équipe.",
      "Vous recevez les fichiers en moins de 48 heures, et ils vous appartiennent.",
    ],
  },
  {
    num: "03",
    name: "La publication",
    body: [
      "Je trie, je retouche et je publie les photos sur votre fiche Google, étalées dans le temps plutôt que d’un bloc.",
      "Je pose la plaque sans contact à l’endroit où vos clients paient, et je la configure.",
    ],
  },
  {
    num: "04",
    name: "Les avis, au quotidien",
    body: [
      "Chaque avis reçoit une réponse sous 24 heures. Les négatifs ne partent jamais sans votre accord : je vous écris la réponse que je propose, vous validez, je publie.",
      "Un passage photo par trimestre, et un rapport d’une page chaque mois.",
    ],
  },
];

export const processPhoto = {
  src: null,
  alt: "Un commerce photographié pour sa fiche Google",
  slot: "En intervention",
};
