# Journal de vérification des sources

Ce fichier existe pour une raison : **une formation sur Google périme.** Les interfaces changent, les politiques bougent, les métriques disparaissent. Tout ce qui est affirmé dans cette formation est traçable ici, avec sa date de vérification.

**Règle : avant de vendre ou de dispenser un module, vérifier que sa dernière date de contrôle a moins de 3 mois.**

---

## Dernière campagne de vérification : 31 août 2026

### Sources primaires Google (autorité maximale)

| Sujet | URL | Vérifié le | Ce qu'on en retient |
|---|---|---|---|
| Règles de représentation de l'établissement | `support.google.com/business/answer/3038177` | 31/08/2026 | Nom : pas de mots-clés, pas de slogans, pas d'URL/horaires/téléphone. Adresse physique réelle obligatoire, bureaux virtuels interdits, coworking sous condition. Catégories : décrire ce que l'entreprise **est**, pas ce qu'elle vend ; minimiser le nombre. Zone de service : **max 2 h de trajet**. Téléphone : numéro local direct, pas de redirection vers un centre d'appels, pas de surtaxé. |
| Contenu interdit et soumis à restrictions (contributions) | `support.google.com/contributionpolicy/answer/7400114` | 31/08/2026 | Interdits : incitations (paiement, remise, produit gratuit) contre avis ; demander au personnel de **solliciter un certain nombre d'avis** ; solliciter des avis **avec un contenu spécifique** ; obliger à laisser un avis sur place ou exercer une pression ; supprimer/modifier un avis négatif contre avantage. Autorisé : demander ou encourager un avis représentant une expérience réelle, sans avantage ni influence sur la note ou le contenu. |
| Amélioration du classement local | `support.google.com/business/answer/7091` | 31/08/2026 | Les 3 facteurs : pertinence, distance, notoriété. Recommandations Google : valider la fiche, tenir les données à jour, répondre aux avis, ajouter photos/vidéos, ajouter des produits. **« Aucun moyen d'obtenir une meilleure place contre rémunération. »** |
| Validation de la fiche | `support.google.com/business/answer/7107242` | 31/08/2026 | 4 méthodes : téléphone/SMS, e-mail, appel vidéo en direct, courrier. Validation instantanée via Search Console possible. Examen jusqu'à **5 jours ouvrés**. Code postal expire à **30 jours**. Vidéo : être physiquement sur place, montrer signalétique + équipement + zone employés, pendant les horaires d'ouverture. |
| Photos et vidéos (specs) | `support.google.com/business/answer/6103862` | 31/08/2026 | Photos : JPG ou PNG, **10 Ko – 5 Mo**, recommandé **720 × 720 px**, minimum 250 × 250 px. Vidéos : **30 s max, 75 Mo max, 720p minimum**. Photo nette, bien éclairée, sans retouche excessive ni filtres. Statut de modération sous 24-48 h. |
| Politique contenu photos/vidéos/posts | `support.google.com/business/answer/7213077` | 31/08/2026 | **Numéros de téléphone interdits dans les posts.** Les hôtels ne peuvent pas publier de posts d'offres/promotions/remises. Renvoie aux règles générales de contenu interdit. **Ne mentionne PAS les images générées par IA ni les banques d'images** — voir la ligne ⚠️ plus bas. |
| Prérequis API Business Profile | `developers.google.com/my-business/content/prereqs` | 31/08/2026 | Fiche GBP **vérifiée et active depuis 60+ jours** ; site web représentant l'établissement ; e-mail demandeur = propriétaire ou gestionnaire de la fiche ; projet Google Cloud ; demande via formulaire « Application for Basic API Access ». Vérification de l'approbation par le quota : **0 QPM = refusé/en attente, 300 QPM = approuvé.** |
| Métriques quotidiennes (API Performance) | `developers.google.com/my-business/reference/performance/rest/v1/DailyMetric` | 31/08/2026 | Impressions séparées Maps/Search × desktop/mobile. **Déduplication : plusieurs vues d'un même utilisateur dans une journée = 1 impression.** Actions : itinéraires, clics sur appel, clics site, conversations. Transactions : réservations (Reserve with Google), commandes de repas, clics sur le menu. |

### Sources légales françaises

| Sujet | Référence | Vérifié le | Ce qu'on en retient |
|---|---|---|---|
| Peines — pratique commerciale trompeuse | Art. **L132-2** code de la consommation | 31/08/2026 | Peine de base : **2 ans d'emprisonnement et 300 000 € d'amende.** |
| Circonstance aggravante — en ligne | Art. **L132-2** (alinéa) | 31/08/2026 | Portées à **5 ans et 750 000 €** lorsque la pratique est commise via un **service de communication au public en ligne** ou un support numérique/électronique. |
| Autres aggravations | Art. **L132-2-1 / L132-2-2** | 31/08/2026 | **3 ans** si la pratique a conduit à la conclusion d'un ou plusieurs contrats. **7 ans** si commise en bande organisée. Amende pouvant être portée à **10 % du chiffre d'affaires moyen annuel** (3 derniers exercices connus) ou à 50 % des dépenses engagées dans la pratique. |
| Personnes morales | Art. 131-38 code pénal (quintuple) | 31/08/2026 | Amende multipliée par 5 pour les personnes morales → **jusqu'à 375 000 € / 3 750 000 €** selon le cas de base retenu. *(À faire confirmer par un juriste avant publication commerciale du chiffre.)* |
| Contrôles DGCCRF | Communications DGCCRF / SignalConso | 31/08/2026 | Outil algorithmique **« Polygraphe »** (analyse des schémas linguistiques, fréquence de publication, données géographiques). Contrôles renforcés depuis juillet 2023. |

### Changements de plateforme datés (à citer avec la date)

| Date | Événement | Source | Impact formation |
|---|---|---|---|
| **Sept. 2025** | Google annonce l'arrêt de l'API Q&A | Annonce Google Business Profile | M09 |
| **3 nov. 2025** | Fonctionnalité Questions/Réponses coupée sur les fiches | Écosystème + constat terrain | M09 — **invalide le levier n°10 du brief Halo** |
| **3 déc. 2025** | Les fils Q&A publics disparaissent de Search et Maps, remplacés par le bouton « Ask » (Gemini) | Écosystème | M09 |
| **16 avr. 2026** | Déploiement d'outils d'application Gemini + détection d'arnaques **avant publication** des avis | Écosystème SEO, cohérent avec la politique Google | M06 |
| **17 avr. 2026** | Interdiction explicite des **quotas d'avis imposés au personnel** et de la **sollicitation d'avis nommant un employé** | Confirmé par le texte de la politique Google (`contributionpolicy/answer/7400114`) | M06 — **modifie le protocole de briefing d'équipe Halo** |
| **8 juin 2026** | Intégration native Google Business Profile → Google Analytics 4 : 7 métriques, fenêtre glissante 6 mois | Annonce Google Analytics | M08 |

---

## ⚠️ Affirmations NON confirmées par Google

Ces affirmations circulent massivement dans les articles SEO de 2026. **Elles ne figurent dans aucune page de politique officielle Google que j'ai pu vérifier le 31/08/2026.** Ne jamais les présenter à un client comme une règle Google.

| Affirmation qui circule | Statut réel | Ce qu'on dit à la place |
|---|---|---|
| « Les photos de banque d'images et les images générées par IA sont **interdites** depuis 2026, suppression automatique. » | ⚠️ **Non trouvé** dans `answer/7213077` ni `answer/6103862`. La politique exige des photos qui **représentent réellement l'établissement** — ce qui exclut de fait une image de stock, mais ce n'est pas la même chose qu'une interdiction nommée. | « Google exige que la photo représente réellement ton établissement. Une photo de banque d'images ne le fait pas, et elle est détectable comme non-unique. Donc : inutile au mieux, risquée au pire. » — argument solide sans citer une règle qui n'existe pas. |
| « Règle de fraîcheur photo à 30 jours dans le scoring de vérification contextuelle. » | ⚠️ **Non confirmé.** Aucun scoring public de ce type. | « Google favorise les fiches actives ; on publie des photos chaque mois par principe, pas parce qu'un seuil officiel existe. » |
| « Les signaux GBP pèsent 32 %, les avis 20 %, l'on-page 15 %. » | ⚠️ Il s'agit d'une **enquête d'opinion auprès de SEO** (type Whitespark), pas d'une donnée Google. | À citer comme « une enquête annuelle auprès de professionnels du secteur estime que… », jamais comme un poids d'algorithme. |
| « Google supprime rétroactivement les avis sur plusieurs années. » | ⚠️ Plausible et rapporté, non documenté officiellement. | Prudence : on prévient le client que des avis anciens peuvent disparaître, sans en faire une certitude. |

---

## Méthode pour re-vérifier (à refaire tous les 3 mois)

1. Relire les 7 pages Google du tableau « sources primaires » et diff avec ce qu'on affirme.
2. Consulter la page des mises à jour des règles de Google Business Profile.
3. Vérifier le changelog de l'API : `developers.google.com/my-business/content/performance/change-log`.
4. Mettre à jour ce fichier avec la nouvelle date, et corriger les modules impactés.
5. Si un module a changé sur le fond, incrémenter sa version en tête de fichier.
