// Contenu du site (aucun faux avis / chiffre client inventé — chiffres de marché génériques)

export const stats = [
  { num: "7×", tone: "accent", label: "plus de clics pour une fiche complète que pour une fiche incomplète." },
  { num: "47 %", tone: "gold", label: "des gens évitent un commerce qui a moins de 20 avis." },
  { num: "95 %", tone: "gold", label: "lisent la réponse du gérant aux avis avant de choisir." },
  { num: "84 %", tone: "accent", label: "des vues de fiche viennent d'un téléphone mobile." },
];

export const offers = [
  {
    icon: "tune",
    title: "Optimisation complète",
    text: "Catégories, description, attributs, services, photos : votre fiche est réglée au millimètre pour apparaître et convaincre.",
  },
  {
    icon: "camera",
    title: "Animation mensuelle",
    text: "Posts réguliers et photos fraîches — on vient photographier votre commerce sur place. C'est ce qui fait vivre la fiche et ce qu'aucun logiciel ne fait.",
    feature: true,
    tag: "Notre différence",
  },
  {
    icon: "star",
    title: "Gestion des avis",
    text: "Réponse à 100 % des avis, collecte de nouveaux avis et signalement des faux. Vos clients voient un commerce attentif.",
    gold: true,
  },
  {
    icon: "nfc",
    title: "Supports NFC & QR",
    text: "De petites plaques à poser au comptoir : le client approche son téléphone et arrive directement sur votre page d'avis. Sans appli, sans effort.",
  },
  {
    icon: "chart",
    title: "Rapport mensuel",
    text: "Vues, appels, itinéraires, avis gagnés, position. Vous voyez précisément ce que vous payez — chaque mois.",
  },
  {
    icon: "sparkle",
    title: "Option visibilité IA (GEO)",
    text: "Être aussi recommandé par ChatGPT et les IA quand vos clients leur demandent le meilleur commerce de la ville.",
  },
];

export const compare = [
  {
    kicker: "Les logiciels à 50 €",
    title: "Des posts robots",
    text: "Générés automatiquement, sans regard humain. Et personne, jamais, pour répondre à vos avis.",
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
    text: "Sans engagement. Qui vient photographier votre commerce et vous montre, chiffres à l'appui, ce que ça rapporte.",
    halo: true,
  },
];

export const plans = [
  {
    name: "Essentiel",
    price: "149 €",
    period: "/ mois",
    items: ["4 posts par mois", "Réponses à vos avis", "Surveillance de la fiche", "Rapport mensuel"],
  },
  {
    name: "Performance",
    price: "229 €",
    period: "/ mois",
    featured: true,
    badge: "Le plus choisi",
    items: ["Tout l'Essentiel, plus :", "8 posts par mois", "Collecte active d'avis", "Suivi de position", "Audit concurrentiel"],
  },
  {
    name: "Premium Photo",
    price: "349 €",
    period: "/ mois",
    items: ["Tout le Performance, plus :", "Un passage photo chaque trimestre", "Des visuels toujours frais"],
  },
];

export const steps = [
  { num: "01", title: "On audite votre fiche", text: "Gratuitement, avec une comparaison à vos concurrents directs. Vous savez exactement où vous en êtes." },
  { num: "02", title: "On optimise et on anime", text: "Optimisation, posts, photos sur place, avis. Vous n'avez rien à gérer : c'est notre métier." },
  { num: "03", title: "Vous suivez les résultats", text: "Un rapport clair chaque mois. Sans engagement : vous restez libre, et propriétaire de votre fiche." },
];

export const CONTACT_EMAIL = "halo.contact@gmail.com";
// Remplacer par ton endpoint Formspree ; tant que "REMPLACER" est présent, repli mailto.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/REMPLACER_ICI";
