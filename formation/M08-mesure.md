# M08 — Mesurer et prouver

> Version 1.0 · Sources vérifiées le 31/08/2026 · Durée : 2 h 30
> 🟣 **Module anti-churn.** Sans engagement, le client se redemande chaque mois si ça vaut le coup. Le rapport répond à sa place. C'est le livrable qui protège le MRR.

**Objectif pédagogique.** Connaître les métriques qui existent réellement (et celles qui ont disparu), savoir les interpréter sans les surinterpréter, tracer le trafic issu de la fiche, et produire un rapport mensuel qui se lit en 2 minutes et donne envie de continuer.

---

## 1. Les métriques réellement disponibles ✅ [vérifié 31/08/2026]

### Le vocabulaire d'abord
Google a remplacé les anciennes « Insights » par les **« Performances »**. Le changement n'est pas cosmétique : plusieurs métriques historiques ont été **supprimées** (photos vues, recherches directes / indirectes / de marque). Si tu lis un tutoriel qui parle de « recherches directes vs indirectes », il est périmé.

### Les métriques actuelles

**Impressions (vues)** — séparées en 4 :
| Métrique | Définition |
|---|---|
| Impressions Google Maps — **mobile** | Affichages de la fiche dans Maps sur mobile |
| Impressions Google Maps — **ordinateur** | Idem sur desktop |
| Impressions Google Search — **mobile** | Affichages dans la recherche sur mobile |
| Impressions Google Search — **ordinateur** | Idem sur desktop |

⚠️ **Déduplication ✅ :** « plusieurs impressions par un même utilisateur au cours d'une même journée sont comptées comme une seule impression ». C'est une information à connaître : le chiffre est plus proche d'un nombre de personnes que d'un nombre d'affichages.

**Actions :**
- Demandes d'**itinéraire**
- Clics sur le bouton **Appeler**
- Clics vers le **site web**
- **Conversations** reçues via la messagerie

**Transactions :**
- **Réservations** (via Reserve with Google)
- **Commandes de repas**
- Clics sur le **menu**
- **Offres** *(ajouté à la documentation en mars 2026)*

### Ce qui n'existe plus ❌
- Nombre de vues des photos (client et marchand)
- Recherches directes / indirectes / de marque

> 🔵 **Conséquence pédagogique majeure.** On ne peut plus démontrer l'impact d'un shooting photo par une métrique « vues des photos ». Il faut le démontrer autrement : par les impressions globales, les actions, et surtout par le **taux d'action** (§3).

---

## 2. L'intégration Google Analytics 4 🆕 [juin 2026]

Depuis le **8 juin 2026**, Google Analytics 4 peut se lier directement à une fiche d'établissement et importer **7 métriques** : interactions avec la fiche, appels, réservations, itinéraires, clics vers le site, messages, menus.

**Comment :** dans l'administration GA4, section des liens produits, créer le lien avec la fiche. Aucune balise ni code à poser.

**Les limites, à connaître avant de le vendre :**
- ⚠️ **Rétention 6 mois seulement.** Rien de plus ancien n'apparaît, même si ta plage de dates remonte plus loin.
- ⚠️ Les métriques **ne sont pas utilisables** dans les explorations, les comparaisons ni les filtres.
- ⚠️ Ne fonctionne pas pour les sous-propriétés.

> 🟣 **Ce que ça change pour Halo.** C'est utile pour les clients qui ont déjà un GA4. Mais la rétention de 6 mois interdit d'en faire ton système de mémoire : **ton propre historique reste indispensable**. Concrètement : tu dois archiver les chiffres chaque mois de ton côté, sinon au bout de 7 mois tu ne peux plus montrer la progression depuis le début — ce qui est exactement l'argument qui retient un client.

---

## 2 bis. 🔴 Le bouton « Appeler » a disparu du Map Pack (2026)

> ⚠️ **Largement rapporté et vérifiable à l'œil nu, mais non annoncé officiellement par Google.** À présenter comme un constat, pas comme une communication Google.

**Ce qui a changé.** Sur mobile, dans le bloc de 3 résultats locaux, Google a remplacé le bouton d'appel direct par **« Itinéraire » et « Site web »**. Pour appeler, l'utilisateur doit désormais ouvrir la fiche complète. L'action d'appel est passée derrière un clic supplémentaire.

**L'effet mesuré par l'écosystème.** Des baisses d'appels de **50 à 70 %** depuis Maps sont rapportées, **à classement inchangé**. Le déploiement semble progressif et variable selon les catégories.

### Pourquoi c'est le point le plus important de ce module 🟣

**Un client peut voir ses appels s'effondrer alors que ton travail est bon et que sa position n'a pas bougé.** Si tu ne connais pas ce changement, tu es incapable de l'expliquer, et tu perds le client sur un phénomène dont tu n'es pas responsable.

**Trois conséquences opérationnelles :**

1. **Ne jamais faire du nombre d'appels l'indicateur principal.** C'est la métrique la plus exposée à une décision d'interface de Google. Le **taux d'action** (§3) reste valide car il agrège itinéraires + appels + clics site.
2. **Les clics vers le site deviennent le canal de contact dominant.** Donc la page d'atterrissage doit avoir le **numéro cliquable en haut**, visible sans défilement. C'est devenu un point d'audit à part entière.
3. **À dire au client dès le départ**, pas au moment de la baisse :
   > « Google a retiré le bouton d'appel direct du bloc local. Vos appels depuis Maps vont baisser, ce n'est pas votre visibilité qui baisse. Ce qu'on va surveiller, c'est le total des contacts : itinéraires, appels et visites du site. »

### Vérifie-le toi-même
Cherche une catégorie locale sur ton téléphone et regarde les boutons du bloc de 3. C'est constatable en 30 secondes, et c'est le genre de démonstration qui fait ton autorité en rendez-vous.

---

## 3. Interpréter sans surinterpréter 🔵

### Le taux d'action : la métrique qui compte vraiment

```
Taux d'action = (itinéraires + appels + clics site) / impressions
```

**Pourquoi c'est la bonne métrique :**
- Les impressions dépendent beaucoup de la saison, de la météo, de l'actualité. Elles montent et descendent sans que tu y sois pour quelque chose.
- Le taux d'action mesure **la qualité de la fiche** : combien de gens qui l'ont vue ont fait quelque chose.
- **C'est la métrique que ton travail influence le plus directement.** Photos, description, avis, horaires : tout ça agit sur la décision, donc sur le taux d'action.

> 🟣 **La ligne à mettre en tête du rapport mensuel :**
> *« Sur 100 personnes qui ont vu votre fiche, 12 ont fait quelque chose (itinéraire, appel, ou visite du site). Le mois dernier c'était 9. »*
> Un gérant comprend ça instantanément, et c'est un chiffre que tu peux revendiquer honnêtement.

### Les pièges d'interprétation

| Piège | Réalité |
|---|---|
| « Les vues ont baissé, le travail ne marche pas » | Saisonnalité, météo, vacances scolaires, travaux dans la rue. Toujours comparer **au même mois de l'année précédente** si l'historique existe, sinon annoncer la saisonnalité **à l'avance**. |
| « Les appels ont doublé » | Vérifier le volume absolu. De 2 à 4 appels, ce n'est pas un doublement, c'est du bruit. |
| « On est passé n°1 » | Depuis où ? Le maillage ([M03](M03-audit.md)) est la seule mesure défendable. |
| « Les impressions = des personnes » | Presque : déduplication par jour ✅, mais un même utilisateur revenant 3 jours de suite compte 3 fois. |

### La règle des seuils 🟣
**En dessous de 30 événements par mois, on ne commente pas les variations en pourcentage.** On donne le chiffre brut. Un « +100 % d'appels » sur 4 appels détruit ta crédibilité le mois où ça redescend à 2.

---

## 4. Tracer le trafic issu de la fiche : les UTM 🔵

Le clic « site web » depuis la fiche arrive dans les statistiques du site comme du trafic organique ou direct, indifférencié. Solution : baliser le lien du site dans la fiche.

```
https://lefournil-bordeaux.fr/?utm_source=google&utm_medium=organic&utm_campaign=gbp
```

**À baliser dans la fiche :** le lien principal du site, et si présents les liens de rendez-vous, de menu et de commande — avec des `utm_content` différents, pour savoir lequel travaille.

**Les précautions :**
- ⚠️ **L'URL balisée doit pointer vers exactement la même page** que l'URL propre. C'est cohérent avec l'exigence de non-redirection trompeuse ✅.
- Vérifier que le site n'a pas de redirection qui supprime les paramètres.
- Prévenir : ça déplace le trafic de « organique » vers une source identifiée dans les rapports du client. S'il a une agence web, la prévenir aussi, sinon elle croira avoir perdu du trafic organique.

---

## 5. Le suivi de position 🔵

Rappel de [M03](M03-audit.md) : une position unique ne veut rien dire. Le suivi mensuel se fait par **maillage**.

**Trois niveaux d'outillage, par ordre de maturité :**

| Niveau | Méthode | Coût | Quand |
|---|---|---|---|
| **Manuel** | Grille 3×3, 2 requêtes, une fois par mois | 15 min/client | Jusqu'à ~8 clients |
| **Outil de rank tracking local** | Grilles 7×7, historique automatique, captures | 30-100 €/mois selon le volume | À partir de ~10 clients |
| **Maison** | Ton propre système de mesure | Temps de dev | Quand le coût de l'outil dépasse le coût de le construire |

> 🟣 **L'arbitrage économique.** À 149 € d'abonnement, 15 min de relevé manuel par mois représente environ 4 % du temps du client. Un outil à 5 €/client/mois représente 3 % du CA. C'est équivalent — **donc le critère de décision n'est pas le coût, c'est la qualité du livrable** : un outil produit une carte propre et un historique, le manuel produit un tableau. Passe à l'outil quand la carte devient un argument commercial, pas quand le temps te manque.

---

## 6. 🟣 Le rapport mensuel Halo

**Le principe : 1 page. 2 minutes de lecture. Envoyé le même jour chaque mois.**

Le gabarit complet est en [ressources/gabarit-rapport.md](ressources/gabarit-rapport.md). Voici sa logique.

### La structure en 5 blocs

**Bloc 1 — La phrase du mois** *(la seule chose que la moitié des clients lira)*
> « Sur 100 personnes qui ont vu votre fiche en août, 12 ont fait quelque chose. En juillet, 9. »

**Bloc 2 — Les chiffres** *(6 lignes, avec le mois précédent en regard)*
| | Août | Juillet |
|---|---|---|
| Vues de la fiche | 2 340 | 2 180 |
| Demandes d'itinéraire | 186 | 141 |
| Appels | 47 | 39 |
| Clics vers le site | 51 | 44 |
| Nouveaux avis | 19 | 12 |
| Note moyenne | 4,6 | 4,5 |

**Bloc 3 — Ce que j'ai fait ce mois-ci** *(la preuve du travail — le bloc le plus important pour l'anti-churn)*
> · 8 posts publiés (dont 3 sur la rentrée)
> · 19 avis reçus, **19 réponses**, délai moyen 14 h
> · 6 nouvelles photos publiées
> · Horaires du 15 août saisis en amont
> · 63 scans de la plaque du comptoir → 19 avis (taux de conversion 30 %)

**Bloc 4 — La visibilité** *(la carte du maillage, avec le mois précédent en petit à côté)*

**Bloc 5 — Le mois prochain** *(2-3 lignes, ce qui est prévu)*
> · Photos de la carte d'automne (passage prévu semaine du 15)
> · Test d'une seconde plaque à l'entrée
> · Saisie des horaires de la Toussaint

### Les règles de rédaction 🟣

1. **Toujours le bloc 3.** C'est celui qui justifie l'abonnement. Un client qui voit 5 lignes de travail concret ne résilie pas, même un mois où les chiffres stagnent.
2. **Jamais de position promise ni de projection.**
3. **Annoncer les mauvais mois avant qu'ils arrivent.** « Août sera plus faible, c'est structurel » écrit en juillet vaut dix explications en septembre.
4. **Toujours donner le chiffre brut à côté du pourcentage.**
5. **Même jour chaque mois.** La régularité fait partie du produit. Un rapport en retard est un rappel que le client paie sans savoir pour quoi.
6. **Aucun jargon.** Pas de « impressions », dis « vues ». Pas de « CTR », dis « sur 100 personnes ».

### Ce qui rend le rapport Halo différent 🟣
Les deux lignes que personne d'autre ne peut écrire :
- **Le taux de conversion des scans** (grâce au lien tracké de [M06](M06-avis.md)).
- **Le taux de réponse à 100 % avec le délai moyen** — la preuve chiffrée de « un humain répond ».

---

## 7. Exercice 🟢🔵

1. **Relève les métriques** de ta propre fiche Halo (ou d'une fiche à laquelle tu as accès) sur les 3 derniers mois. Calcule le taux d'action pour chaque mois.
2. **Écris la phrase du mois** correspondante.
3. **Construis le gabarit complet** de rapport pour un client fictif, avec des chiffres plausibles. Fais-le lire à quelqu'un qui ne connaît rien au sujet : doit-il comprendre en 2 minutes ?
4. **Pose les UTM** sur le lien du site de la fiche Halo, et vérifie qu'ils remontent.
5. **Simule un mauvais mois** : les vues baissent de 18 %. Rédige le rapport. Comment tu le dis sans perdre le client, et sans mentir ?

---

## 8. Check-list de sortie

- [ ] Je connais les métriques qui existent et celles qui ont été supprimées.
- [ ] Je sais que les impressions sont dédupliquées par jour et par utilisateur.
- [ ] Je connais les 3 limites de l'intégration GA4, dont la rétention de 6 mois.
- [ ] **J'archive mes propres chiffres chaque mois**, parce que Google ne les garde pas assez longtemps.
- [ ] Je calcule et je communique le taux d'action.
- [ ] Je ne commente jamais un pourcentage sous 30 événements.
- [ ] Mon rapport tient en 1 page et contient toujours « ce que j'ai fait ce mois-ci ».
- [ ] Mon rapport ne contient aucune promesse de position.

## 9. Contrôle

1. Un client demande combien de fois ses photos ont été vues. Réponse ?
2. Les appels passent de 3 à 6. Qu'écris-tu dans le rapport ?
3. Pourquoi ne peux-tu pas te reposer sur GA4 pour l'historique ?
4. Que mesure le taux d'action, et pourquoi le préférer aux vues ?
5. Les vues baissent de 20 % en août. Que fais-tu ?

<details><summary>Réponses</summary>

1. Cette métrique a été supprimée par Google. On mesure l'effet des photos autrement : impressions globales et surtout taux d'action. Il faut le dire, pas inventer un chiffre.
2. « 6 appels ce mois-ci, contre 3 le mois dernier. » Le chiffre brut, sans pourcentage : sous 30 événements, le « +100 % » n'a aucune signification statistique et se retournera contre toi.
3. Parce que la rétention est de 6 mois. L'historique long, qui est justement l'argument de fidélisation, doit être archivé de mon côté chaque mois.
4. La proportion de gens qui, ayant vu la fiche, ont fait quelque chose. C'est la métrique la plus directement influencée par le travail d'optimisation, et la moins polluée par la saisonnalité.
5. Je vérifie la saisonnalité (comparaison N-1 si possible), je le dis franchement, je mets en avant le taux d'action et le bloc « ce que j'ai fait » — et idéalement, je l'avais annoncé dans le rapport de juillet.
</details>

## 10. Les 3 erreurs classiques

1. **Commenter des pourcentages sur de petits volumes.** Ça marche un mois et ça te détruit le suivant.
2. **Ne pas archiver ses propres chiffres.** Au 7e mois, l'historique de GA4 a disparu et tu ne peux plus montrer la progression — le jour exact où le client se demande s'il continue.
3. **Un rapport sans le bloc « ce que j'ai fait ».** Le client paie un travail. S'il ne le voit pas, il paie un chiffre — et un chiffre, ça se compare à un logiciel à 50 €.

---

**Module suivant :** [M09 — Visibilité IA (GEO)](M09-geo.md)
