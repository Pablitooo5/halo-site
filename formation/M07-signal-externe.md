# M07 — Le signal externe : citations, annuaires, site web

> Version 1.0 · Sources vérifiées le 31/08/2026 · Durée : 2 h

**Objectif pédagogique.** Travailler le troisième facteur — la notoriété — en dehors de la fiche. Savoir quels annuaires comptent réellement en France, nettoyer une incohérence NAP, poser des données structurées, et identifier des liens locaux atteignables sans budget.

**Le cadrage honnête d'abord :** c'est le module au retour le plus lent et le plus difficile à démontrer dans un rapport mensuel. Ne le survends jamais. Il se justifie comme un travail de fond, fait une fois au setup puis entretenu.

---

## 1. Ce que Google dit ✅

Sur la page officielle du classement local, Google indique que la notoriété dépend notamment des **liens externes** pointant vers l'établissement et du **nombre d'avis** reçus. C'est peu, mais c'est la seule base officielle : le reste (poids des annuaires, valeur d'une citation sans lien) relève de l'inférence de la communauté SEO.

**Ce qu'on peut affirmer sans risque :**
- Les liens et mentions externes participent à la notoriété. ✅
- Une incohérence dans les informations dilue le signal. *(logique, non documentée)*

**Ce qu'on ne peut pas affirmer :**
- Qu'une citation dans tel annuaire vaut tant. ⚠️
- Qu'il faut « X citations pour se classer ». ⚠️

---

## 2. La cohérence NAP 🟢

### Le principe
Un moteur agrège les mentions de l'établissement à travers le web. Si le nom, l'adresse ou le téléphone diffèrent d'un endroit à l'autre, il ne sait pas s'il s'agit du même établissement, ou de deux.

**Ce qui compte comme incohérence :**
- Un ancien numéro de téléphone qui traîne.
- Une ancienne adresse (déménagement mal répercuté) — **le cas le plus toxique.**
- Le nom écrit différemment (`Le Fournil` / `Boulangerie Le Fournil` / `LE FOURNIL SARL`).
- Un format d'adresse différent (`12 rue Notre-Dame` / `12 r. Notre Dame` / `12, rue Notre Dame`).

### La méthode d'audit NAP 🔵

1. **Définir le NAP canonique.** Une seule version de référence, celle de la fiche Google, écrite exactement.
2. **Chercher les occurrences.** Recherche du nom exact entre guillemets, du numéro de téléphone, et de l'ancien numéro s'il existe.
3. **Chercher spécifiquement l'ancienne adresse** si l'établissement a déménagé. C'est là que se cachent les vraies pertes.
4. **Lister dans un tableau** : source, ce qui est écrit, écart constaté, action.
5. **Corriger par ordre de trafic** de la source.

> 🟣 **Le raccourci Halo.** Ne cherche pas l'exhaustivité — elle est inatteignable et non rentable. Vise les 10 sources les plus visibles + toute occurrence d'une **ancienne adresse** ou d'un **ancien numéro**, quelle que soit la source. Une ancienne adresse active quelque part est un problème réel ; une variation de ponctuation sur un annuaire fantôme n'en est pas un.

---

## 3. Les annuaires qui comptent en France 🔵

Classés par priorité réelle, pas par nombre de backlinks promis.

### Priorité 1 — Les autres cartes (tout secteur)
| Plateforme | Pourquoi |
|---|---|
| **Apple Business Connect** | Alimente Apple Plans, donc Siri et tous les iPhone. Gratuit, sous-exploité, et **une part significative de tes clients bordelais utilise un iPhone**. C'est le meilleur ratio effort/impact hors Google. |
| **Bing Places** | Faible trafic direct en France, mais alimente des systèmes de génération de réponse. Gratuit, 15 min. |
| **PagesJaunes** | Encore une forte notoriété en France, notamment chez les 50+. Attention : sollicitation commerciale agressive après inscription — prévenir le client. |

### Priorité 2 — Le secteur
| Secteur | Plateformes |
|---|---|
| Restauration | TheFork, TripAdvisor, Petit Futé |
| Hôtellerie | Booking, TripAdvisor, Google Hotels |
| Santé / bien-être | Doctolib, Planity, Treatwell |
| Artisanat / BTP | Pages Jaunes, plateformes de mise en relation métier |
| Commerce de détail | Yelp, annuaires de quartier |

### Priorité 3 — Le local
- Annuaire de la **CCI** et de la **CMA** de Gironde
- Office de tourisme de Bordeaux, si pertinent
- **Associations de commerçants de quartier** (Chartrons, Saint-Michel, Saint-Pierre…)
- Annuaires municipaux et de quartier

> 🟣 **L'angle Halo sur la priorité 3.** Ces sources sont peu puissantes individuellement, mais elles sont **hyper-locales et crédibles** — exactement ce qui fait sens pour un commerce de quartier. Et surtout : elles sont accessibles gratuitement, ce qui n'est pas le cas d'un vrai travail de netlinking. C'est le seul netlinking honnête à la portée d'un solo.

### Ce qu'on ne fait pas ❌
- ❌ Achat de packs de citations à 50 € pour 200 annuaires. Ce sont des annuaires fantômes sans trafic, et une inscription massive d'un coup est un signal de spam.
- ❌ Inscriptions automatisées en masse.
- ❌ Promettre un effet mesurable sur le classement.

---

## 4. Le site web au service du local 🔵

### Les fondamentaux
1. **Le NAP visible en texte** (pas dans une image) sur toutes les pages, généralement en pied de page.
2. **Une page contact** avec l'adresse complète, une carte, les horaires, le téléphone cliquable.
3. **Une page par établissement** si le client en a plusieurs. Jamais une page « nos agences » unique.
4. **Le lien vers la fiche Google** depuis le site.

### Les données structurées `LocalBusiness` 🔵

C'est du balisage JSON-LD qui décrit l'établissement de façon lisible par les machines. Effet direct sur le classement : non démontré. Effet sur la compréhension par les systèmes de génération de réponse ([M09](M09-geo.md)) : c'est aujourd'hui le meilleur pari disponible.

```json
{
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Le Fournil",
  "image": "https://exemple.fr/photo-facade.jpg",
  "@id": "https://exemple.fr/#localbusiness",
  "url": "https://exemple.fr",
  "telephone": "+33556000000",
  "priceRange": "€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 rue Notre-Dame",
    "addressLocality": "Bordeaux",
    "postalCode": "33000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.8536,
    "longitude": -0.5730
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "07:00",
    "closes": "19:30"
  }],
  "sameAs": [
    "https://www.google.com/maps/place/...",
    "https://www.instagram.com/..."
  ]
}
```

**Les règles :**
- Utiliser le **type le plus précis** disponible (`Bakery` plutôt que `LocalBusiness`, `Restaurant`, `Plumber`, `HairSalon`…).
- Le NAP du balisage doit être **strictement identique** à celui de la fiche Google.
- `sameAs` pointe vers la fiche Google et les profils officiels : c'est ce qui relie explicitement le site à la fiche.
- Valider le balisage avec l'outil de test des résultats enrichis de Google avant de conclure.

> 🟣 **Ton avantage.** Tu développes. Poser un JSON-LD correct te prend 20 minutes ; un commerçant ne le fera jamais, et la plupart des prestataires locaux ne savent pas le faire. C'est une ligne de setup à forte valeur perçue et à faible coût pour toi.

---

## 5. Les liens locaux atteignables 🔵

Le netlinking local sérieux, sans budget et sans triche :

| Levier | Comment | Difficulté |
|---|---|---|
| **Presse locale** | Une ouverture, un anniversaire, un prix, une initiative de quartier | Moyenne |
| **Associations de commerçants** | Adhésion → page membre avec lien | Faible |
| **Partenaires et fournisseurs** | « Où trouver nos produits » chez un producteur | Faible |
| **Offices de tourisme, blogs de quartier** | Recensement local | Faible |
| **Événements locaux** | Sponsoring modeste, participation à un marché | Moyenne |
| **Écoles, clubs sportifs** | Partenariat, page sponsors | Faible |

**Ce qu'on ne fait pas :** achat de liens, échanges de liens systématiques, annuaires de netlinking. Le rapport risque/bénéfice est mauvais pour un commerce local qui n'a rien à gagner à jouer ce jeu.

---

## 6. Exercice 🟢🔵

1. **Audit NAP du cas fil rouge.** Définis le NAP canonique, puis trouve 10 occurrences en ligne. Note chaque écart dans un tableau. Y a-t-il une ancienne adresse ou un ancien numéro qui traîne ?
2. **Apple Business Connect.** Vérifie si le cas fil rouge y est présent et à jour. Si tu es à Bordeaux avec un iPhone, cherche-le dans Plans et compare avec Google.
3. **Données structurées.** Prends le site du cas fil rouge et passe-le dans l'outil de test des résultats enrichis. Y a-t-il un balisage `LocalBusiness` ? S'il existe, le NAP correspond-il exactement à la fiche ?
4. **Liste 5 liens locaux atteignables** pour ce commerce, avec pour chacun l'angle d'approche concret.
5. **Pour Halo :** fais le §4 complet sur ton propre site. C'est un prérequis de crédibilité — tu ne peux pas vendre ça sans l'avoir fait chez toi.

---

## 7. Check-list de sortie

- [ ] Je sais définir un NAP canonique et détecter une incohérence.
- [ ] Je sais que l'ancienne adresse est le cas le plus toxique et je la cherche systématiquement.
- [ ] Je connais les 3 plateformes prioritaires hors Google, et pourquoi Apple Business Connect passe devant.
- [ ] Je sais écrire un JSON-LD `LocalBusiness` valide avec le bon type précis.
- [ ] Je sais identifier 5 liens locaux atteignables sans budget.
- [ ] Je ne promets aucun effet mesurable de ce module sur le classement.

## 8. Contrôle

1. Le client a déménagé il y a 3 ans. Que cherches-tu en priorité ?
2. Pourquoi Apple Business Connect avant Bing Places ?
3. Un prestataire propose 200 citations pour 49 €. Réponse ?
4. Le balisage `LocalBusiness` améliore-t-il le classement ?
5. Quel type schema.org pour une boulangerie ?

<details><summary>Réponses</summary>

1. Toutes les occurrences de l'**ancienne adresse** encore en ligne. C'est ce qui envoie le signal le plus contradictoire, et souvent ce qui fait qu'un client se déplace au mauvais endroit.
2. Parce qu'Apple Plans alimente tous les iPhone et Siri, avec un trafic réel en France, alors que Bing Places a un usage direct marginal. Les deux sont gratuits et rapides, mais l'un a un impact utilisateur mesurable.
3. Non : annuaires fantômes sans trafic, et une inscription massive simultanée est un signal de spam. On préfère 10 sources réelles à 200 fantômes.
4. Non démontré sur le classement. Son intérêt est la compréhension par les machines, notamment les systèmes de génération de réponse — c'est un pari raisonné, à présenter comme tel.
5. `Bakery`, pas `LocalBusiness` : toujours le type le plus précis disponible.
</details>

## 9. Les 3 erreurs classiques

1. **Chercher l'exhaustivité NAP.** Non rentable. 10 sources visibles + toute trace d'ancienne adresse suffisent.
2. **Acheter des packs de citations.** Aucun bénéfice, signal de spam potentiel.
3. **Survendre ce module dans le rapport mensuel.** Il n'a pas d'effet visible à court terme. Le présenter comme un travail de fond fait au setup, pas comme un levier de performance mensuelle.

---

**Module suivant :** [M08 — Mesurer et prouver](M08-mesure.md)
