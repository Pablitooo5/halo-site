# M03 — L'audit : diagnostiquer une fiche et ses concurrents

> Version 1.0 · Sources vérifiées le 31/08/2026 · Durée : 3 h
> 🟣 **Module à plus forte valeur commerciale immédiate.** L'audit est le commercial de Halo : il ne vend pas un abonnement, il montre un écart.

**Objectif pédagogique.** Produire en 45-60 minutes un audit qui (a) diagnostique réellement une fiche, (b) la compare à 3 concurrents choisis correctement, (c) mesure la position de façon honnête, et (d) débouche sur un devis modulaire où **on ne facture que ce qui manque**.

---

## 1. Le principe : l'audit n'est pas un rapport, c'est une confrontation 🟣

Un audit qui dit « votre fiche est incomplète à 60 % » ne vend rien. Un gérant s'en fiche d'un pourcentage.

Un audit qui dit « sur *pizzeria Bordeaux Chartrons*, à 500 m de chez vous, vous êtes 7e ; **le 1er**, c'est [X], à 300 m ; il a 214 avis, vous en avez 31 ; son dernier avis date d'avant-hier, le vôtre de mars » — ça, ça se lit debout, au comptoir, et ça déclenche une réaction.

**Les trois règles de conception de l'audit Halo :**

1. **Toujours comparatif.** Jamais une fiche seule. Le gérant ne se juge pas dans l'absolu, il se juge par rapport au voisin.
2. **Toujours honnête sur ce qui va bien.** L'audit doit contenir une section « ce qui est déjà bon, et qu'on ne facturera pas ». C'est ce qui te distingue du démarcheur : lui trouve toujours tout mauvais.
3. **Jamais de promesse de position.** L'audit constate un écart et propose un travail. Il ne promet pas un rang. (Rappel [M01](M01-fondations.md) : la distance n'est pas actionnable.)

---

## 2. Étape 1 — Choisir les bons concurrents 🔵

C'est l'étape que tout le monde bâcle et qui détermine la valeur de l'audit.

### Ce qu'il ne faut pas faire
- Demander au gérant qui sont ses concurrents. Il te citera ceux qu'il connaît personnellement — souvent pas ceux qui le dépassent sur Google.
- Prendre les plus gros du quartier. Ils sont parfois hors catégorie.

### La méthode 🔵

1. **Établir 3 requêtes de test.** Pas plus, pas moins.
   - **R1 — Requête métier + quartier** : `boulangerie Chartrons`
   - **R2 — Requête métier + ville** : `boulangerie Bordeaux`
   - **R3 — Requête de besoin** (ce que le client tape vraiment, sans nommer le métier) : `pain au levain Bordeaux`, `réparation iPhone écran cassé Bordeaux`, `manger italien Bordeaux centre`

   > R3 est la plus révélatrice et celle que personne ne teste. C'est souvent là qu'on trouve les trous les plus rentables.

2. **Exécuter chaque requête en navigation privée**, depuis un point situé à **~800 m** de l'établissement (pas depuis le commerce, cf. §4).

3. **Retenir comme concurrents les 3 établissements qui apparaissent le plus souvent dans le top 3** sur ces requêtes. Ce sont les concurrents *réels* au sens de Google — indépendamment de ce que pense le gérant.

4. **Contrôle de cohérence :** si l'un des trois n'est pas vraiment un concurrent commercial (un supermarché sorti sur « boulangerie »), on le garde quand même dans la mesure, mais on le signale dans l'audit — c'est une information en soi : *« Google considère qu'un Carrefour City répond à la requête mieux que vous. »*

---

## 3. Étape 2 — Lire la catégorie principale d'un concurrent 🔵

Le levier n°1 est invisible : Google n'affiche pas les catégories secondaires, et la catégorie principale n'apparaît que sous forme de libellé sur la fiche.

### Méthode manuelle (gratuite, fiable, 2 min)
1. Ouvrir la fiche du concurrent dans Google Maps.
2. Le libellé affiché sous le nom (« Boulangerie », « Restaurant italien », « Plombier ») **est la catégorie principale**.
3. Recouper : ce libellé correspond exactement à un item de la liste fermée des catégories Google. Si le libellé affiché ne ressemble à aucune catégorie connue, c'est une catégorie rare — noter le libellé exact.

> 🔵 **L'astuce de la grande ville.** Si le client est dans une commune où le Map Pack est vide ou peuplé de fiches à l'abandon, tu n'as aucun signal exploitable. Refais la requête sur **Bordeaux centre, Toulouse ou Paris** avec le même métier : là, la concurrence est réelle, et les catégories principales du top 3 t'indiquent la catégorie « gagnante » du secteur. Tu l'appliques ensuite à ton client.
> *(Technique reprise d'une vidéo de la chaîne JEAN SEO — voir la [revue de sources](ressources/revue-sources-video.md). C'est de l'inférence de praticien, pas une règle Google, mais la logique est solide et le coût est nul.)*

### Méthode par le code source (gratuite, plus riche)
Sur la page Maps du concurrent, le code source contient les identifiants de catégorie. Recherche dans le source la chaîne du libellé affiché ; les catégories secondaires apparaissent parfois dans les données structurées associées.
> 🕐 Cette méthode dépend du HTML de Google et casse régulièrement. Ne construis pas de process qui en dépend.

### La méthode par comptage de fréquence 🔵 — la plus rigoureuse

Plutôt que de regarder les 3 premiers à l'œil, on quantifie :

1. Se placer sur la **grande ville** de référence dans Maps (astuce ci-dessus).
2. Lancer la requête métier.
3. Relever la catégorie principale des **20 premiers résultats** dans un tableur.
4. **Compter les occurrences.**
   - La catégorie **la plus fréquente** → c'est la catégorie principale à retenir.
   - La 2e, la 3e → candidates aux catégories secondaires, à filtrer selon ce que le client exerce réellement.

C'est plus long (20 min) mais ça supprime l'arbitraire, et surtout **ça se met dans le document d'audit** : un tableau de fréquences est bien plus convaincant pour un gérant qu'une affirmation.

*(Méthode reprise de la chaîne Cédric Chevillard / Linkara — voir la [revue de sources](ressources/revue-sources-video.md).)*

### Méthode outillée
Des extensions navigateur dédiées au SEO local affichent catégorie principale et secondaires en un clic. Utile en volume, mais :
- ⚠️ Vérifie toujours par la méthode manuelle avant d'écrire une conclusion dans un audit client.
- Ne cite jamais un outil tiers comme source dans un document client.

### Ce qu'on en fait 🟣
Dans l'audit, une ligne qui tue :

> **Catégorie principale**
> Vous : *Restaurant*
> Concurrent n°1 : *Restaurant italien*
> Concurrent n°2 : *Pizzeria*
> Concurrent n°3 : *Restaurant italien*
>
> → Sur la requête « restaurant italien », les trois premiers sont déclarés comme tels. Vous êtes déclaré comme « restaurant » générique. C'est la première chose à corriger, et c'est gratuit.

---

## 4. Étape 3 — Mesurer une position honnêtement : le maillage 🔵

**C'est le cœur technique du module.** Sans ça, toute mesure de position est du bruit.

### Le problème
Ta position dépend d'où se trouve la personne qui cherche ([M01](M01-fondations.md), facteur distance). Il n'existe donc pas *une* position. Une capture d'écran de « je suis 3e » ne prouve rien, sauf si on précise depuis où.

Trois biais qui faussent toute mesure naïve :
- **Le biais de position** : tu mesures depuis chez toi ou depuis le commerce.
- **Le biais de personnalisation** : ton historique Google influence les résultats.
- **Le biais d'appareil** : mobile et desktop ne donnent pas le même classement (les métriques Google elles-mêmes séparent desktop et mobile ✅).

### La méthode du maillage (grid) 🔵

Le principe : mesurer la position depuis **plusieurs points géographiques répartis autour du commerce**, et représenter le résultat sous forme de grille. On n'obtient pas une position, on obtient une **carte de visibilité**.

**Protocole manuel Halo (gratuit, 20 min, suffisant pour un audit de vente) :**

Une grille 3 × 3 centrée sur le commerce, avec un pas de **500 m** en centre-ville dense (Bordeaux intra-muros), **1 km** en périphérie.

```
        NO         N          NE
         •         •          •
              (−500m)
        O    •  COMMERCE  •   E
              (+500m)
         •         •          •
        SO         S          SE
```

Pour chaque point, et pour chaque requête R1/R2/R3 :
1. Ouvrir une fenêtre de navigation privée.
2. Forcer la position au point voulu (les outils de développement du navigateur permettent de simuler des coordonnées GPS — c'est la méthode propre et reproductible).
3. Lancer la requête, relever le rang du client **dans le Map Pack** (1, 2, 3) ou dans le Local Finder au-delà (4, 5, 6…), ou `>20` s'il est absent.
4. Noter dans la grille.

**Résultat type :**

| Requête : `boulangerie Chartrons` | O | Centre | E |
|---|---|---|---|
| **Nord** | 12 | 6 | >20 |
| **Centre** | 4 | **2** | 9 |
| **Sud** | 8 | 5 | 15 |

**Comment on lit ça, et ce que ça vaut commercialement :**
> « Vous êtes 2e quand quelqu'un cherche depuis votre rue. À 500 m au nord-est, vous n'existez pas. Concrètement : les gens qui sont déjà devant chez vous vous trouvent. Ceux qui pourraient venir, non. C'est exactement le rayon qu'on va essayer d'élargir. »

C'est **la** diapo qui vend l'abonnement, parce qu'elle transforme un concept abstrait (« le SEO local ») en une carte que le gérant comprend en 2 secondes.

**Outils payants.** Des outils de rank tracking local automatisent ce maillage sur des grilles 7×7 ou 9×9 avec suivi dans le temps. Utiles à partir d'une dizaine de clients ; inutiles pour un audit ponctuel. Voir [M08](M08-mesure.md) pour l'arbitrage coût/valeur.

> ⚠️ **Honnêteté méthodologique.** Le maillage mesure ce que voit un utilisateur *simulé* à une position donnée, sans historique. Un utilisateur réel avec un historique verra parfois autre chose. À dire au client si la question vient : « c'est une mesure de référence reproductible, pas une vérité absolue ». Cette phrase te crédibilise, elle ne t'affaiblit pas.

---

## 5. Étape 4 — La grille d'audit 🔵

La grille complète et imprimable est dans [ressources/checklist-audit.md](ressources/checklist-audit.md). Voici sa structure et la logique de notation.

### Les 7 blocs

| Bloc | Points | Ce qu'on regarde | Facteur ([M01](M01-fondations.md)) |
|---|---|---|---|
| **A. Contrôle** | 4 | Fiche revendiquée, validée, doublons, rôles | Prérequis |
| **B. Identité** | 9 | Nom, catégorie principale, catégories secondaires, NAP, description, services, produits, attributs, horaires + exceptionnels | Pertinence |
| **C. Visuel** | 6 | Nb de photos, fraîcheur, couverture des types, logo, couverture, vidéo | Pertinence + conversion |
| **D. Activité** | 5 | Posts (présence, fraîcheur, régularité), dernière mise à jour, réactivité | Fraîcheur |
| **E. Avis** | 8 | Volume, note, récence, cadence, taux de réponse, délai de réponse, qualité des réponses, mots-clés présents dans les avis | Notoriété |
| **F. Externe** | 5 | Site web, cohérence NAP hors Google, présence annuaires, données structurées, mentions locales | Notoriété |
| **G. Position** | 3 | Maillage sur R1, R2, R3 | Résultat |

**Total : 40 points de contrôle.**

### La notation : un feu tricolore, pas une note sur 100 🟣

Chaque point est noté 🟢 conforme / 🟠 améliorable / 🔴 problème. Trois raisons :
1. Un score sur 100 invite à négocier le score. Un point rouge invite à le corriger.
2. Ça se lit instantanément par un gérant pressé.
3. Ça se convertit directement en devis : **chaque 🔴 et 🟠 est une ligne de prestation, chaque 🟢 est une ligne qu'on ne facture pas.**

---

## 6. Étape 5 — Du diagnostic au devis 🟣

C'est la mécanique centrale du modèle Halo : **l'audit est le devis**.

### La table de conversion

| Constat d'audit | Prestation | Bloc offre |
|---|---|---|
| 🔴 Catégorie principale inadaptée | Repositionnement catégoriel | Setup |
| 🔴 Description absente / vide | Rédaction description + services | Setup |
| 🔴 < 10 photos ou photos > 2 ans | Shooting sur place | Setup (option photo) |
| 🔴 NAP incohérent hors Google | Nettoyage des citations | Setup |
| 🟠 Attributs incomplets | Complétion | Setup (inclus) |
| 🔴 Taux de réponse aux avis < 100 % | Reprise de l'historique + réponses en continu | Abonnement |
| 🔴 Dernier avis > 2 mois | Installation du système de collecte | Setup + abonnement |
| 🔴 Aucun post | Publication régulière | Abonnement |
| 🟢 Horaires exacts et à jour | **Rien. On le dit.** | — |

### La règle qui fait toute la différence

> **On écrit noir sur blanc ce qu'on ne facture pas.**

Exemple de formulation dans le document de restitution :

> **Ce qui est déjà bien fait chez vous**
> · Vos horaires sont exacts, y compris les jours fériés. C'est rare, et ça vous évite des avis négatifs. Rien à faire.
> · Votre numéro de téléphone est le bon numéro direct. Rien à faire.
> · Votre note de 4,7 est solide. Le problème n'est pas la qualité perçue, il est ailleurs.
>
> **Ce qui vous coûte des clients aujourd'hui**
> · [3 à 5 points maximum, classés par impact]

Cinq points rouges maximum. Un audit qui trouve 22 problèmes ne se lit pas, il fait peur et il ressemble à du démarchage.

---

## 7. Le document de restitution 🟣

**Format : 4 pages maximum. PDF. Lisible sur un téléphone.**

| Page | Contenu | Objectif |
|---|---|---|
| **1. La comparaison** | Un tableau : vous vs 3 concurrents. 6 lignes seulement : catégorie principale, nb d'avis, note, date du dernier avis, nb de photos, dernier post. | Créer le choc. Rien d'autre sur cette page. |
| **2. La carte de visibilité** | Le maillage sur R1 et R3, en grille colorée. | Rendre la perte tangible et géographique. |
| **3. Le diagnostic** | Ce qui va bien (3 lignes) / Ce qui coûte des clients (5 lignes max, par impact décroissant). | Crédibilité + hiérarchie. |
| **4. Ce que je propose** | Setup modulaire chiffré ligne par ligne + formule d'abonnement recommandée. Prix affichés. Sans engagement rappelé. | Transformer sans pression. |

**Ce que le document ne contient jamais :**
- ❌ Une promesse de position ou de délai pour l'atteindre.
- ❌ Un pourcentage d'algorithme (« les avis comptent pour 20 % »).
- ❌ Des chiffres de résultats d'autres clients tant que tu n'en as pas de réels.
- ❌ Du jargon non expliqué (NAP, citations, SERP).

> 🟣 **Sur les chiffres de marché.** Tu peux citer des chiffres de marché génériques (part des recherches à intention locale, part des gens qui lisent les réponses aux avis) **à condition de les sourcer et de les dater dans une note de bas de page**. Un gérant ne vérifiera probablement pas ; un gérant qui vérifie et trouve une source devient un client à vie.

---

## 8. Le déroulé chronométré de l'audit 🟣

**Total : 55 minutes de travail effectif.**

| Temps | Étape |
|---|---|
| 0-5 min | Récupérer la fiche, vérifier le statut de revendication, chercher les doublons |
| 5-15 min | Définir R1/R2/R3, identifier les 3 concurrents réels |
| 15-25 min | Relever les 6 lignes de comparaison pour les 4 fiches |
| 25-40 min | Maillage 3×3 sur R1 et R3 |
| 40-50 min | Passer la grille 40 points sur la fiche du client |
| 50-55 min | Remplir le gabarit de restitution, exporter en PDF |

Au-delà de 60 minutes, l'audit gratuit n'est plus rentable comme outil de prospection. Le chronométrage est un garde-fou économique, pas un détail.

---

## 9. Exercice 🟢🔵

**Sur ton cas fil rouge, produis un audit complet :**
1. Définis R1, R2, R3. Justifie R3 en une phrase (pourquoi c'est ce que tape un vrai client).
2. Identifie les 3 concurrents par la méthode du §2.
3. Relève la catégorie principale des 4 fiches.
4. Fais le maillage 3×3 sur R1 et R3.
5. Passe la grille 40 points.
6. Rédige la page 3 (diagnostic) : 3 lignes de positif, 5 lignes de problèmes classés par impact.
7. Chiffre le setup à partir de la table de conversion.

**Critère de réussite :** un tiers qui lit ta page 3 sans connaître le dossier doit pouvoir dire en 30 secondes quel est **le** problème principal.

---

## 10. Check-list de sortie

- [ ] Je sais choisir des concurrents par la donnée, pas par l'opinion du gérant.
- [ ] Je sais lire la catégorie principale d'un concurrent sans outil payant.
- [ ] Je sais expliquer pourquoi une position unique ne veut rien dire, et faire un maillage.
- [ ] Je sais convertir chaque constat en ligne de devis — et identifier ce que je ne facture pas.
- [ ] Mon audit tient en 4 pages et se fait en moins d'une heure.
- [ ] Mon audit ne contient aucune promesse de position.

## 11. Contrôle

1. Pourquoi ne demande-t-on pas au gérant qui sont ses concurrents ?
2. Le client est 1er depuis son propre commerce. Bonne nouvelle ?
3. Comment justifies-tu de ne pas facturer un point qui est déjà conforme ?
4. Un audit relève 19 problèmes. Combien en mets-tu dans le document ?
5. Quelle est la seule chose que l'audit ne doit jamais promettre ?

<details><summary>Réponses</summary>

1. Parce qu'il nomme ses concurrents commerciaux perçus, pas ceux qui le dépassent effectivement dans le Map Pack. Google a son propre avis sur qui est un concurrent, et c'est celui-là qui compte.
2. Non, c'est l'information la moins utile qui existe : à distance zéro le facteur distance est maximal. Il faut mesurer à 500 m et 1 km.
3. Parce que c'est le positionnement : « je ne facture que ce qui manque ». C'est ce qui te sépare du démarcheur — et c'est un argument de vente, pas une concession.
4. Cinq maximum, classés par impact. Un document exhaustif ne se lit pas et ressemble à de la peur vendue.
5. Une position, ou un délai pour l'atteindre.
</details>

## 12. Les 3 erreurs classiques

1. **Mesurer depuis un seul point.** L'audit perd toute valeur diagnostique et tu bâtis un discours sur du sable.
2. **Faire un audit exhaustif.** 40 points de contrôle en interne, 5 problèmes dans le document. Le tri, c'est le travail.
3. **Oublier la section « ce qui va bien ».** C'est la section qui te fait croire, et sans elle tu es un démarcheur de plus.

---

**Module suivant :** [M04 — L'identité de la fiche](M04-identite-fiche.md)
