# M11 — Industrialiser : gérer N fiches 🟣

> Version 1.0 · Sources vérifiées le 31/08/2026 · Durée : 2 h
> Module interne Halo. Il décrit comment tenir 20 à 40 clients seul, sans dégrader la promesse « un humain qui répond ».

**Objectif pédagogique.** Connaître les trois niveaux d'outillage et savoir quand basculer de l'un à l'autre ; connaître les conditions réelles d'accès à l'API et ce qu'elle permet ; définir la frontière entre ce qu'on automatise et ce qu'on n'automatise jamais.

---

## 1. Les trois niveaux

| Niveau | Outil | Coût | Plafond réaliste |
|---|---|---|---|
| **1. Compte gestionnaire** | Google, natif | 0 € | ~15-20 clients |
| **2. Back-office maison** | API GBP + ton code | Temps de dev | ~40 clients |
| **3. Outil tiers** | Partoo, Guest Suite, etc. | 30-50 €/établissement/mois | Illimité, mais 20-30 % de marge en moins |

**L'arbitrage.** À 20 clients, un outil tiers coûte 600 à 1 000 €/mois — soit 15 à 25 % du CA de 4 000-4 500 €. Tu développes : le niveau 2 est structurellement supérieur pour toi. Mais **ne construis rien avant le niveau 1 saturé** : tu construirais pour des besoins imaginés.

---

## 2. Niveau 1 — Le compte gestionnaire (dès le 1er client)

Tu te fais ajouter comme **Gestionnaire** sur chaque fiche ([M02](M02-controle-fiche.md)). Toutes les fiches apparaissent alors dans ton compte, organisables en **groupes d'établissements**.

**Ce que ça permet nativement :**
- Répondre aux avis de tous les clients depuis un seul endroit
- Publier les posts
- Éditer les informations
- Consulter les statistiques
- Recevoir une notification e-mail à chaque nouvel avis

**Ce qui coince à partir de ~15 clients :**
- Les notifications noient la boîte mail → tu rates un avis, et l'engagement 24-48 h tombe
- Aucune vue consolidée « tous les avis en attente de réponse »
- Les statistiques se relèvent fiche par fiche → 20 × 5 min = 1 h 40 par mois juste pour les rapports
- Aucun historique conservé au-delà de ce que Google garde

> 🟣 **Le palliatif qui repousse le plafond de 6 mois, à installer maintenant :**
> 1. Un **filtre mail dédié** qui étiquette et isole les notifications d'avis.
> 2. Une **feuille de suivi** (une ligne par client, une colonne par mois) où tu archives les 6 métriques du rapport. C'est le remède à la rétention de 6 mois de GA4 ([M08](M08-mesure.md)) — et c'est 10 minutes par mois.
> 3. Un **créneau fixe quotidien** de 20 min pour les réponses aux avis. C'est ce qui tient l'engagement de délai sans y penser.

---

## 3. Niveau 2 — L'API Google Business Profile

### Les conditions d'accès réelles ✅ [vérifié 31/08/2026]

| Condition | Détail |
|---|---|
| **Fiche vérifiée et active depuis 60+ jours** | Peut être ta propre fiche (Halo) **ou celle d'un client que tu gères** |
| **Site web** | Représentant l'établissement listé sur la fiche |
| **E-mail demandeur** | Doit être propriétaire **ou gestionnaire** de la fiche |
| **Projet Google Cloud** | Créé, avec son numéro de projet |
| **Demande formelle** | Via le formulaire de contact GBP, option « Application for Basic API Access » |

**Comment savoir si c'est approuvé ✅ :** consulter les **quotas** des API Business Profile dans la console Google Cloud.
- **0 QPM** → non approuvé (ou en attente)
- **300 QPM** → approuvé

**Délai :** Google communique un examen sous 7-10 jours ouvrés ; en pratique les retours vont de quelques jours à plusieurs semaines.

**Coût :** l'API est **gratuite** — pas de facturation à l'appel.

> 🟣 **Action prioritaire, et c'est le point le plus urgent de tout le projet Halo.**
> Le compteur de 60 jours ne démarre qu'à la **validation** de la fiche. Chaque jour où la fiche Halo n'est pas créée est un jour de retard sur le back-office. Google recommande explicitement que la fiche soit « complète et à jour » pour faciliter l'examen ✅ — donc : créer, valider, **puis** optimiser complètement avec [M04](M04-identite-fiche.md) et [M05](M05-contenu.md) pendant les 60 jours d'attente.

### Ce que l'API permet
- Lister les avis et **y répondre**
- Créer et programmer des **posts**
- Récupérer les **statistiques de performance** ([M08](M08-mesure.md))
- Lire et modifier les **informations** des fiches
- Gérer les **photos**

⚠️ **L'API Q&A a été supprimée** (annonce septembre 2025, cf. [M09](M09-geo.md)). Toute documentation ou tutoriel qui la mentionne est périmé.

### Ce que le back-office débloque concrètement 🟣

| Fonction | Gain de temps mensuel estimé (20 clients) |
|---|---|
| Dashboard consolidé « avis en attente de réponse » | ~2 h |
| Brouillons de réponse générés, validés en 10 s | ~3 h |
| Posts programmés en une session mensuelle | ~2 h |
| Rapports mensuels générés automatiquement | ~4 h |
| Historique conservé indéfiniment | inestimable (c'est l'argument anti-churn) |

C'est le passage de ~4 h à ~2 h par client et par mois évoqué dans le business model. **Le rapport automatique est de loin le plus rentable** : c'est le livrable le plus chronophage et le plus standardisable.

### L'ordre de construction 🟣
1. **Récupération des statistiques** → alimente les rapports. Plus gros gain, plus faible risque.
2. **Dashboard des avis** → consolide la charge quotidienne.
3. **Brouillons de réponse assistés** → gain de temps sur la tâche la plus fréquente.
4. **Programmation des posts** → gain sur la session mensuelle.
5. **Lien de collecte tracké** ([M06](M06-avis.md)) → à faire en parallèle, sans API, dès maintenant.

> Le point 5 ne dépend pas de l'API. **Il peut être construit aujourd'hui**, et c'est le seul élément de ton offre que personne ne peut copier facilement.

---

## 4. La frontière : ce qu'on n'automatise jamais 🟣

C'est le point le plus important du module, parce qu'il est stratégique et pas technique.

| ✅ Automatisable | ❌ Jamais automatisé |
|---|---|
| Collecte des statistiques | **La réponse finale à un avis** |
| Génération du rapport | Le ton d'une réponse à un avis négatif |
| Brouillon de réponse (IA) | La décision de répondre ou d'escalader |
| Programmation des posts | Le choix des angles éditoriaux |
| Surveillance des changements de fiche | Le diagnostic d'audit |
| Alerte sur avis négatif | La relation client |

**Le raisonnement.** Halo vend « un humain qui écrit et qui répond » (positionnement, brief Halo §5). Une réponse d'avis 100 % automatique détruit la seule chose qui te distingue d'un logiciel à 50 €/mois. Ce n'est pas une question de qualité — les brouillons peuvent être excellents — c'est une question de **cohérence de l'offre** : le jour où c'est automatique, tu es un logiciel plus cher.

**Le bon compromis :** l'IA rédige le brouillon, **tu lis, tu ajustes, tu valides**. Un avis à 5 étoiles se valide en 10 secondes. Un avis à 1 étoile se réécrit entièrement à la main, après les 2 heures de décantation ([M06](M06-avis.md)).

> 🟣 **Le garde-fou opérationnel :** dans le back-office, aucun bouton « répondre à tout ». Le workflow doit rendre l'envoi en masse impossible par construction, pas seulement déconseillé. Un jour de fatigue, tu te remercieras.

---

## 5. La routine mensuelle 🟣

### Le quotidien (20 min/jour)
- Traiter les nouveaux avis (lecture, brouillon, validation, envoi)
- Traiter les alertes de modification de fiche

### La session hebdomadaire (1 h)
- Publier les posts de la semaine pour tout le portefeuille
- Publier les photos du mois (2 à 3 par client, réparties)

### La session mensuelle (½ journée)
| Ordre | Tâche | Durée (20 clients) |
|---|---|---|
| 1 | Relever et archiver les métriques | 40 min (10 min avec l'API) |
| 2 | Maillage de position (2 requêtes/client) | 1 h 30 (ou outil) |
| 3 | Générer et relire les rapports | 1 h (20 min avec l'API) |
| 4 | Envoyer, tous le même jour | 20 min |
| 5 | Préparer le calendrier éditorial du mois suivant | 1 h |
| 6 | Vérifier les horaires exceptionnels à venir | 15 min |

### Le trimestriel
- Passages photo (clients Premium)
- Revue des attributs et de la saisonnalité
- **Re-vérification des sources de la formation** ([00-JOURNAL-SOURCES.md](00-JOURNAL-SOURCES.md))

### L'annuel
- Saisie des 11 jours fériés en horaires exceptionnels pour tout le portefeuille, en janvier ([M04](M04-identite-fiche.md))
- Revue des catégories principales face à l'évolution des concurrents

---

## 6. Le point de défaillance unique ⚠️

**Ton compte gestionnaire est un point de défaillance unique pour tout ton portefeuille.** S'il est suspendu, tu perds l'accès à tous tes clients simultanément.

**Les mesures de protection :**
1. **Conformité stricte.** C'est la seule vraie protection, et c'est la raison la plus rationnelle des interdits de [M06](M06-avis.md).
2. **Authentification à deux facteurs** sur le compte, sans exception.
3. **Le client reste propriétaire.** S'il t'arrive quelque chose, il ne perd pas sa fiche. À dire en rendez-vous : c'est rassurant et c'est vrai.
4. **Espacer les revendications.** Revendiquer 10 fiches en une semaine est un signal d'activité suspecte.
5. **Documentation externe.** Garde hors du compte Google : la liste des clients, les accès, les NAP canoniques, l'historique des métriques. Si tu perds l'accès, tu dois pouvoir tout reconstruire.

---

## 7. Quand passer au niveau supérieur 🟣

**Les seuils de décision, dans l'ordre :**

| Signal | Action |
|---|---|
| Tu rates un avis ou tu dépasses 48 h | Installer les palliatifs du §2 **aujourd'hui** |
| Les rapports prennent plus de 4 h/mois | Prioriser la partie « statistiques » de l'API |
| Tu passes plus de 2 h/mois par client | Regarder où part le temps avant de coder quoi que ce soit |
| Tu approches 30 clients | Sous-traiter la photo avant d'embaucher |
| Tu dépasses 35-40 clients | Alternant — pas avant |

> 🟣 **La règle qui évite le piège du développeur.** Tu vas avoir envie de construire le back-office avant d'en avoir besoin, parce que c'est plus agréable que la prospection. **Le back-office ne fait gagner du temps que sur un travail qui existe déjà.** À 3 clients, il ne fait rien gagner du tout. La séquence correcte : créer la fiche Halo → prospecter → 10 clients → construire pendant que le compteur des 60 jours tourne de toute façon.

---

## 8. Exercice 🟣

1. **Crée la fiche Google Business de Halo** si ce n'est pas fait. Note la date de validation. Calcule la date à laquelle tu pourras demander l'accès API (+60 jours).
2. **Crée le projet Google Cloud** et note le numéro de projet.
3. **Mets en place les 3 palliatifs du §2** : filtre mail, feuille de suivi, créneau quotidien.
4. **Écris la spécification** du lien de collecte tracké : routes, données stockées, absence de cookie, calcul du taux de conversion. C'est ton premier chantier technique, et il ne dépend d'aucune autorisation Google.
5. **Chronomètre-toi** sur un cycle complet d'un client fictif : réponse à 5 avis, 2 posts, relevé de métriques, rapport. Multiplie par 20. Est-ce que ça tient dans ta semaine ?

L'exercice 5 est le seul qui compte vraiment : il transforme le modèle économique théorique en contrainte horaire réelle.

---

## 9. Check-list de sortie

- [ ] Ma fiche Halo est créée et validée, et je connais la date d'éligibilité API.
- [ ] Je connais les 5 conditions d'accès à l'API et comment vérifier l'approbation (quota QPM).
- [ ] Je sais que l'API est gratuite et que l'API Q&A n'existe plus.
- [ ] J'ai installé les 3 palliatifs du niveau 1.
- [ ] J'ai une frontière écrite entre ce que j'automatise et ce que je n'automatise jamais.
- [ ] Mon compte a la double authentification.
- [ ] Je garde une documentation hors du compte Google.
- [ ] Je ne construirai pas le back-office avant d'avoir la charge qui le justifie.

## 10. Contrôle

1. Peux-tu demander l'accès API avec la fiche d'un client plutôt que la tienne ?
2. Ton quota affiche 0 QPM. Que signifie-t-il ?
3. Pourquoi ne pas automatiser complètement les réponses aux avis ?
4. Quel est le premier module du back-office à construire, et pourquoi ?
5. Quel chantier technique ne dépend d'aucune autorisation Google ?

<details><summary>Réponses</summary>

1. Oui ✅ — la fiche peut être la tienne ou celle d'un client que tu gères, du moment qu'elle est vérifiée et active depuis 60+ jours et que ton e-mail en est propriétaire ou gestionnaire.
2. Que le projet n'est pas approuvé (ou est encore en attente). 300 QPM signifie approuvé.
3. Parce que « un humain qui répond » est la promesse centrale de Halo. L'automatiser fait de Halo un logiciel plus cher que les logiciels. Le compromis est : l'IA rédige, l'humain valide.
4. La récupération des statistiques : c'est le plus gros gain de temps (rapports), le plus standardisable, et le moins risqué.
5. Le lien de collecte tracké (`halo.fr/r/...`) : redirection, comptage agrégé sans cookie, calcul de conversion. C'est aussi le plus différenciant.
</details>

## 11. Les 3 erreurs classiques

1. **Construire le back-office avant d'avoir des clients.** Le temps de dev ne rapporte rien tant qu'il n'y a pas de charge à réduire — et il ressemble à du travail productif alors que c'est de l'évitement de prospection.
2. **Retarder la création de la fiche Halo.** C'est 60 jours de délai incompressible sur tout le reste, et ça ne coûte rien de le lancer aujourd'hui.
3. **Automatiser la réponse aux avis.** Tu détruis ton propre positionnement pour gagner deux heures par mois.

---

**Retour au [sommaire](00-INDEX.md)**
