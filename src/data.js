// Contenu du site (aucun faux avis / chiffre client inventé — chiffres de marché génériques)

export const stats = [
  { num: "7×", tone: "accent", label: "plus de clics pour une fiche complète que pour une fiche incomplète." },
  { num: "47 %", tone: "gold", label: "des gens évitent un commerce qui a moins de 20 avis." },
  { num: "95 %", tone: "gold", label: "lisent la réponse du gérant aux avis avant de choisir." },
  { num: "84 %", tone: "accent", label: "des vues de fiche viennent d'un téléphone mobile." },
];

export const offers = [
  {
    icon: "camera",
    title: "Les photos de votre commerce",
    text: "Je viens sur place photographier la façade, la salle, l'équipe et vos produits. Au départ, puis une fois par trimestre. C'est la seule chose qu'aucun logiciel ne fera jamais à ma place.",
    feature: true,
    tag: "Le cœur du service",
  },
  {
    icon: "star",
    title: "La réponse à tous vos avis",
    text: "Chaque avis reçoit une réponse sous 24 heures. Les bons comme les mauvais — surtout les mauvais, parce que ce sont ceux que vos futurs clients lisent en premier.",
    gold: true,
  },
  {
    icon: "nfc",
    title: "La collecte d'avis",
    text: "Une petite plaque sans contact posée à l'endroit où vos clients paient. Ils approchent leur téléphone et arrivent sur votre page d'avis. Sans appli, sans effort, sans rien leur demander.",
  },
  {
    icon: "chart",
    title: "Le rapport mensuel",
    text: "Une page, chaque mois : avis reçus, avis auxquels j'ai répondu, votre note, photos publiées. Vous voyez exactement ce que vous payez.",
  },
];

export const compare = [
  {
    kicker: "Les logiciels à 50 €",
    title: "Des posts robots",
    text: "Générés automatiquement, sans regard humain. Et personne, jamais, pour répondre à vos avis ni pour venir vous photographier.",
    muted: true,
  },
  {
    kicker: "Les grosses agences",
    title: "Des contrats de 12 à 36 mois",
    text: "Engagement long, et en face un centre d'appels où vous n'êtes qu'un dossier parmi mille.",
    muted: true,
  },
  {
    kicker: "Halo",
    title: "Un seul interlocuteur",
    text: "Sans engagement. Qui vient photographier votre commerce quatre fois par an et répond à vos avis sous 24 heures.",
    halo: true,
  },
];

// Tarifs affichés à titre d'information. Aucun paiement ni souscription sur ce site.
export const pricing = [
  {
    name: "La mise en route",
    price: "490 €",
    period: "une fois",
    items: [
      "Un shooting complet sur place, 60 photos et plus",
      "Tri et publication des photos sur votre fiche",
      "Pose de la plaque de collecte d'avis",
      "Réponse à vos avis des trois derniers mois",
    ],
  },
  {
    name: "L'abonnement",
    price: "249 €",
    period: "par mois",
    featured: true,
    badge: "Sans engagement",
    items: [
      "Un passage photo chaque trimestre",
      "Réponse à 100 % de vos avis, sous 24 h",
      "Vos photos publiées tout au long du mois",
      "Le rapport mensuel",
    ],
  },
];

export const steps = [
  { num: "01", title: "Je regarde votre fiche", text: "Gratuitement, comparée à trois concurrents de votre rue. Vous recevez le constat par mail, vous en faites ce que vous voulez." },
  { num: "02", title: "Je viens photographier", text: "Une visite, 90 minutes sur place. Je repars avec de quoi alimenter votre fiche pendant des mois, et je pose la plaque à votre caisse." },
  { num: "03", title: "Je m'occupe de vos avis", text: "Tous, sous 24 heures, tous les jours. Et je reviens vous photographier chaque trimestre. Vous n'avez rien à faire." },
];

export const CONTACT_EMAIL = "halo.contact@gmail.com";
// Remplacer par ton endpoint Formspree ; tant que "REMPLACER" est présent, repli mailto.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/REMPLACER_ICI";
