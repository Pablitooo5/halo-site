# M09 — Visibilité IA (GEO) et la mort des Questions/Réponses

> Version 1.0 · Sources vérifiées le 31/08/2026 · Durée : 1 h 30
> ⚠️ **Module à faible certitude assumée.** C'est le seul module de la formation où l'honnêteté impose de dire : on a peu de recul, peu de sources primaires, et beaucoup de bruit commercial. Il est construit pour être défendable, pas pour être impressionnant.

**Objectif pédagogique.** Comprendre ce qui a remplacé les Q&A, savoir ce qu'on peut raisonnablement faire pour être cité par les assistants, savoir le mesurer — et savoir exactement quoi promettre pour l'option à +79 €/mois sans se retrouver coincé.

---

## 1. Ce qui s'est passé : les Q&A sont mortes 🆕

**La chronologie :**
| Date | Événement |
|---|---|
| Septembre 2025 | Google annonce l'arrêt de l'API Q&A |
| **3 novembre 2025** | La fonctionnalité Questions/Réponses est coupée sur les fiches |
| **3 décembre 2025** | Les fils Q&A publics disparaissent de Search et Maps |

**Ce qui les remplace :** un bouton **« Ask »** (« Poser une question ») propulsé par Gemini. L'utilisateur pose sa question en langage naturel et reçoit une réponse **synthétisée** à partir de la fiche, du site web, des avis, et des autres données publiques de l'établissement.

Des anciens fils Q&A restent parfois visibles sur des fiches anciennes, mais **aucun contenu nouveau ne peut être ajouté**, et les fiches créées depuis n'ont plus la fonctionnalité.

### ⚠️ Correction au brief Halo
Le document de contexte Halo liste les Q&A comme le **levier n°10** (« section oubliée, on peut poser soi-même les questions fréquentes et y répondre, ce qui préempte l'information »). **Ce levier n'existe plus.** Il faut le retirer de tout support commercial où il figure.

### Pourquoi c'est en réalité une bonne nouvelle pour Halo 🟣

La disparition des Q&A ne supprime pas le besoin — elle le **déplace**. Avant, tu préemptais l'information en écrivant toi-même la réponse. Maintenant, **c'est une IA qui écrit la réponse**, à partir de ce qu'elle trouve.

Donc : **la qualité de tes données publiques détermine directement ce que l'IA raconte de ton client.**

Une fiche vide + un site pauvre + trois avis anciens = une réponse générique, floue, ou fausse.
Une fiche avec 30 services décrits, une description précise, 60 photos, 200 avis récents = une réponse riche, exacte, qui vend.

C'est exactement le travail des modules M04, M05, M06 et M07. **Le GEO n'est pas une discipline séparée : c'est le bénéfice secondaire d'un travail bien fait sur les données.** C'est comme ça qu'il faut le vendre, et c'est la seule version honnête.

---

## 2. Comment les assistants choisissent un commerce local 🔵

⚠️ **Aucun des systèmes concernés (Gemini, ChatGPT, Perplexity, Copilot) ne publie de documentation sur son choix d'établissements locaux.** Ce qui suit est de l'inférence raisonnée, à présenter comme telle.

### Ce qu'on peut raisonnablement établir

**a) Ils s'appuient sur des sources tierces existantes.**
Les assistants ne parcourent pas la ville. Ils lisent : les fiches Google/Apple, les annuaires, les sites, les avis, la presse locale, les blogs. Un commerce absent ou incohérent dans ces sources est absent de la réponse.

**b) La cohérence prime sur le volume.**
Un système de génération de réponse qui trouve trois adresses différentes pour un commerce a deux options : ne pas le citer, ou le citer avec la mauvaise information. Les deux sont mauvaises. → **[M07](M07-signal-externe.md) devient central.**

**c) Le texte descriptif compte plus qu'en SEO classique.**
Une requête à un assistant est formulée en langage naturel (« où trouver du pain au levain sans gluten à Bordeaux ? »). Un établissement dont les **services sont décrits en texte** ([M04](M04-identite-fiche.md) §4) est identifiable ; un établissement qui a juste une catégorie ne l'est pas.

**d) Les avis servent de matière première.**
C'est probablement le signal le plus riche : ils contiennent du vocabulaire réel, des cas d'usage, des jugements. Un commerce avec 200 avis détaillés offre infiniment plus de matière qu'un commerce avec 12 avis « Très bien ».

**e) Les données structurées aident.**
Le JSON-LD `LocalBusiness` ([M07](M07-signal-externe.md) §4) est le format le plus explicite qui existe pour dire à une machine ce qu'est un établissement. Effet non démontré, coût faible, logique solide.

### Ce qu'on ne sait pas ⚠️
- Le poids relatif de chaque source.
- Si la fraîcheur compte, et à quel point.
- Si une action spécifique peut faire basculer une citation.
- Si tout ça sera encore vrai dans six mois.

---

## 3. La check-list GEO 🔵

Rien de nouveau — c'est le rappel de ce qui a été fait ailleurs, sous l'angle « machine ».

| Point | Module | Pourquoi ça compte pour une IA |
|---|---|---|
| Services décrits en texte, pas seulement listés | [M04](M04-identite-fiche.md) | C'est la matière textuelle qui répond aux questions en langage naturel |
| Description précise et factuelle | [M04](M04-identite-fiche.md) | Contexte de base |
| Attributs complets et exacts | [M04](M04-identite-fiche.md) | Répond aux questions filtrées (« accessible ? », « terrasse ? ») |
| Horaires exacts + exceptionnels | [M04](M04-identite-fiche.md) | Les questions d'ouverture sont les plus fréquentes |
| NAP strictement cohérent partout | [M07](M07-signal-externe.md) | Une contradiction = non-citation ou erreur |
| JSON-LD `LocalBusiness` avec le bon type | [M07](M07-signal-externe.md) | Format le plus explicite pour une machine |
| `sameAs` reliant site ↔ fiche ↔ profils | [M07](M07-signal-externe.md) | Résout l'identité de l'entité |
| Volume d'avis détaillés et récents | [M06](M06-avis.md) | Matière première principale |
| Réponses aux avis rédigées avec du vocabulaire métier | [M06](M06-avis.md) | Texte de qualité, attribuable à l'établissement |
| Présence sur Apple Business Connect | [M07](M07-signal-externe.md) | Source alternative, alimente d'autres systèmes |
| Site avec une page par établissement | [M07](M07-signal-externe.md) | Cible citable |
| Contenu répondant à de vraies questions | — | Voir §4 |

### Le seul livrable réellement « nouveau » du GEO 🟣

**Une page FAQ sur le site du client**, qui reprend précisément les questions que les clients posaient dans les anciennes Q&A et posent maintenant à l'assistant.

C'est le remplacement direct de la fonctionnalité perdue : tu ne peux plus écrire la réponse **dans** la fiche, mais tu peux écrire la réponse **quelque part que la fiche référence**, et laisser le système la trouver.

**10 questions à couvrir, à adapter par secteur :**
1. Quels sont les horaires, et les exceptions ?
2. Y a-t-il un parking / comment y accéder ?
3. Est-ce accessible en fauteuil roulant ?
4. Faut-il réserver ?
5. Quels moyens de paiement ?
6. Y a-t-il des options végétariennes / sans gluten / spécifiques ?
7. Les animaux sont-ils acceptés ?
8. Y a-t-il une terrasse / un espace extérieur ?
9. Combien de temps prend [la prestation typique] ?
10. Quels sont les tarifs indicatifs ?

Avec un balisage `FAQPage` en JSON-LD.

---

## 4. Mesurer : la méthode des prompts de contrôle 🟣

Il n'existe pas d'outil de mesure fiable. Voici un protocole reproductible, simple, et honnête sur ses limites.

### Le protocole

1. **Définir 5 prompts de contrôle** par client, formulés comme un vrai utilisateur :
   - « Quelle est la meilleure boulangerie au levain à Bordeaux ? »
   - « Où manger italien près des Chartrons à Bordeaux ? »
   - « Je cherche un plombier fiable à Bordeaux pour une fuite, tu me conseilles qui ? »
   - « [Nom du commerce], c'est bien ? » *(test de la restitution)*
   - « Quels sont les horaires de [Nom du commerce] ? » *(test de l'exactitude)*

2. **Les passer une fois par mois** dans 3 systèmes : Gemini, ChatGPT, Perplexity.

3. **Noter pour chacun :**
   - Le client est-il **cité** ? (oui/non)
   - À quelle **position** dans la liste ?
   - L'information donnée est-elle **exacte** ?
   - **Quelle source** est mentionnée, si elle l'est ?

4. **Archiver la capture d'écran.** C'est la preuve, et c'est ce qui va dans le rapport.

### Les limites à énoncer ⚠️
- Les réponses sont **non déterministes** : le même prompt donne des réponses différentes.
- Elles dépendent du compte, de l'historique, de la géolocalisation.
- **Un mois sans citation ne prouve pas une régression.**

> 🟣 **Ce qu'on peut honnêtement vendre :** un suivi mensuel documenté avec captures, et surtout la **correction des erreurs**. Le prompt n°5 (« quels sont les horaires de… ») est le plus rentable : quand un assistant donne un horaire faux, tu peux remonter à la source de l'erreur et la corriger. Ça, c'est un service concret, immédiat, vérifiable — bien plus vendable qu'une promesse de citation.

---

## 5. 🟣 Ce que Halo promet, et ce que Halo ne promet pas

L'option à **+79 €/mois** doit être défendable. Voici la formulation.

**✅ Ce qu'on promet :**
- Un travail documenté sur la cohérence et la richesse des données publiques.
- La pose et la maintenance des données structurées (`LocalBusiness`, `FAQPage`).
- Une page FAQ rédigée et maintenue.
- Un suivi mensuel de 5 prompts de contrôle sur 3 assistants, avec captures.
- **La détection et la correction des informations fausses** véhiculées par les assistants.

**❌ Ce qu'on ne promet jamais :**
- Être cité par ChatGPT.
- Une position dans une réponse d'IA.
- Un effet mesurable sur le chiffre d'affaires.

**La phrase de vente honnête :**
> « Personne ne sait exactement comment ces systèmes choisissent. Ce qu'on sait, c'est qu'ils lisent vos données publiques. Mon travail, c'est de faire en sorte que ce qu'ils lisent soit riche, exact et cohérent — et de vérifier chaque mois ce qu'ils racontent de vous. Si un assistant donne un horaire faux, je le vois et je corrige. Je ne vous promets pas d'être recommandé ; je vous garantis de ne pas être mal représenté. »

Cette dernière phrase est la clé : **la promesse déplace le curseur du gain incertain vers la protection certaine.** C'est vrai, c'est tenable, et c'est ce qui fait qu'un client ne résilie pas l'option au bout de deux mois.

---

## 6. Exercice 🟢🔵

1. **Teste la disparition des Q&A.** Ouvre 5 fiches d'établissements bordelais. Trouves-tu encore des fils Q&A ? Un bouton « Ask » ?
2. **Passe les 5 prompts de contrôle** sur ton cas fil rouge, dans 3 assistants. Note les résultats dans un tableau. Une information fausse apparaît-elle ?
3. **Si une information fausse apparaît**, remonte à sa source : d'où vient l'erreur ? (fiche, annuaire, ancien site, avis ?)
4. **Rédige la page FAQ** du cas fil rouge : 10 questions, réponses de 2-3 phrases, avec le JSON-LD `FAQPage`.
5. **Rédige ton argumentaire de vente** de l'option à 79 €, en 5 lignes maximum, sans aucune promesse de citation.

---

## 7. Check-list de sortie

- [ ] Je sais que les Q&A n'existent plus, avec les dates, et je l'ai retiré de mes supports.
- [ ] Je sais expliquer pourquoi ça renforce la valeur du travail sur les données au lieu de la réduire.
- [ ] Je sais distinguer ce qui est établi de ce qui est inféré dans ce module.
- [ ] J'ai un protocole de mesure reproductible et j'en connais les limites.
- [ ] Mon argumentaire de vente ne promet aucune citation.
- [ ] Je sais que la promesse tenable est la **protection contre la mauvaise information**, pas le gain de visibilité.

## 8. Contrôle

1. Peut-on encore poser soi-même une question sur sa fiche et y répondre ?
2. Un client demande « vous me garantissez d'être dans ChatGPT ? »
3. Quel est le prompt de contrôle le plus rentable, et pourquoi ?
4. Pourquoi la cohérence NAP est-elle plus critique pour le GEO que pour le SEO classique ?
5. Le GEO est-il une discipline séparée du travail d'optimisation de fiche ?

<details><summary>Réponses</summary>

1. Non. La fonctionnalité a été coupée le 3 novembre 2025 et les fils publics ont disparu début décembre 2025. Le remplacement est un bouton « Ask » propulsé par Gemini, qui synthétise à partir des données publiques.
2. Non, et personne ne peut le garantir. Ce que je garantis, c'est un travail sur la qualité des données, un suivi mensuel documenté, et la correction des informations fausses.
3. « Quels sont les horaires de [X] ? » — parce que la réponse est vérifiable objectivement, qu'une erreur est traçable jusqu'à sa source, et que la corriger est un service concret et immédiat.
4. Parce qu'un système de génération de réponse doit produire **une** réponse. Face à des données contradictoires, il choisit — mal, ou pas du tout. Le SEO classique tolère mieux le flou : il classe des liens, il ne rédige pas d'affirmation.
5. Non. C'est le bénéfice secondaire d'un travail bien fait sur les données (M04, M05, M06, M07), plus une page FAQ et un protocole de suivi. Le vendre autrement serait vendre du vent.
</details>

## 9. Les 3 erreurs classiques

1. **Vendre le GEO comme une discipline magique séparée.** Ça ne survit pas à la première question technique d'un client informé.
2. **Promettre une citation.** Non contrôlable, non mesurable de façon déterministe.
3. **Laisser un support commercial mentionner les Q&A.** Elles sont mortes depuis novembre 2025 ; un client qui le sait comprend que tu n'as pas mis ton offre à jour.

---

**Module suivant :** [M10 — Cas particuliers et pièges](M10-pieges.md)
