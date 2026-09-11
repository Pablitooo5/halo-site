# M06 — Les avis : collecte, réponse, modération

> Version 1.0 · Sources vérifiées le 31/08/2026 · Durée : 4 h
> ⚠️ **Module le plus sensible juridiquement de la formation.** Une erreur ici ne coûte pas une position : elle coûte une fiche suspendue, ou une condamnation pénale.

**Objectif pédagogique.** Savoir installer un système de collecte d'avis qui tourne seul, rester strictement dans le cadre légal français et les règles Google **telles qu'elles sont depuis avril 2026**, répondre à 100 % des avis avec méthode, et savoir quoi faire face à un avis illégitime.

---

## PARTIE 1 — LE CADRE. Ce qu'on ne fait jamais.

### 1.1 Le droit français 📖 [SOURCE LÉGALE — vérifié 31/08/2026]

Publier ou faire publier de faux avis relève de la **pratique commerciale trompeuse** (code de la consommation).

**Les peines :**

| Situation | Emprisonnement | Amende |
|---|---|---|
| Pratique commerciale trompeuse (base) — **art. L132-2** | **2 ans** | **300 000 €** |
| **Commise via un service de communication au public en ligne** ou un support numérique | **5 ans** | **750 000 €** |
| Ayant conduit à la conclusion d'un ou plusieurs contrats (L132-2-1) | 3 ans | — |
| Commise en bande organisée (L132-2-2) | 7 ans | — |

L'amende peut en outre être portée à **10 % du chiffre d'affaires moyen annuel** (calculé sur les 3 derniers exercices connus), ou à 50 % des dépenses engagées dans la pratique.

> ⚠️ **Correction au brief Halo.** Le document de contexte annonce « 750 000 € et 5 ans » sans préciser que c'est la peine **aggravée**. Le chiffre est exact, l'attribution ne l'était pas. Puisque les faux avis Google passent nécessairement par un service de communication au public en ligne, c'est bien ce plafond qui s'applique en pratique — mais il faut savoir le dire correctement : *« la pratique commerciale trompeuse, c'est 2 ans et 300 000 € ; quand c'est fait en ligne, ça monte à 5 ans et 750 000 € »*.
>
> 📖 Pour les **personnes morales**, l'amende est en principe quintuplée (art. 131-38 code pénal). **Ne cite pas ce chiffre en clientèle sans validation d'un juriste** — c'est le seul point de ce module que je n'ai pas pu vérifier sur une source primaire.

**L'obligation de transparence** (issue de la loi pour une République numérique de 2016) pèse sur les plateformes qui publient des avis : elles doivent indiquer si les avis sont contrôlés et comment. Elle ne pèse pas directement sur le commerçant, mais elle cadre l'écosystème.

### 1.2 Le contrôle : la DGCCRF et « Polygraphe »

La DGCCRF dispose d'un outil algorithmique de détection appelé **Polygraphe**, qui analyse les schémas linguistiques, la fréquence de publication et les données géographiques pour repérer les campagnes coordonnées. Les contrôles sont renforcés depuis 2023.

Des condamnations réelles existent : un réseau de cliniques esthétiques sanctionné en 2024 pour un contrat avec un prestataire offshore utilisant des bots ; un artisan condamné en 2025 pour une cinquantaine de faux comptes Google servant à s'auto-noter et à dénigrer des concurrents.

> 🟣 **Comment on s'en sert commercialement.** Pas comme un épouvantail. Comme un différenciateur :
> *« Il y a des gens qui vous vendront des avis. C'est un délit, et c'est détecté par un algorithme de la DGCCRF. Moi je vous installe un système pour que vos vrais clients laissent leur vrai avis. C'est plus lent le premier mois, et ça ne peut jamais vous exploser à la figure. »*

### 1.3 Les règles Google ✅ [SOURCE GOOGLE — vérifié 31/08/2026, **mises à jour avril 2026**]

**Ce que Google interdit explicitement :**

| Interdit | Formulation |
|---|---|
| **Incitations** | Proposer « des avantages (comme un paiement, des remises, des produits et/ou services gratuits) en échange de la publication d'un avis » |
| **Quotas au personnel** 🆕 | Demander à son personnel « de solliciter un certain nombre d'avis » |
| **Contenu dirigé** 🆕 | Solliciter « des avis qui incluent un contenu spécifique » |
| **Pression sur place** | Obliger les utilisateurs « à laisser une note ou rédiger un avis sur place », ou exercer une pression |
| **Suppression conditionnelle** | Modifier ou supprimer un avis négatif en échange d'un avantage |

**Ce que Google autorise explicitement :**
> Les établissements peuvent « demander ou encourager la publication de contenus qui représentent une véritable expérience, **sans proposer d'avantages en échange, ni tenter d'influencer la note ou le contenu** ».

**Les deux nouveautés d'avril 2026 🆕 et ce qu'elles changent pour Halo :**

Le 17 avril 2026, Google a explicitement banni :
1. **Les quotas d'avis imposés au personnel** (« ramène-moi 10 avis cette semaine »).
2. **La sollicitation d'avis mentionnant un employé nommément** (« demandez au client de citer votre prénom »).

> ⚠️ **Nuance essentielle :** un client qui cite spontanément un employé dans un avis sincère, c'est parfaitement autorisé. Ce qui est interdit, c'est que l'entreprise **sollicite ou oriente** ce contenu.

Le 16 avril 2026, Google a par ailleurs déployé une détection propulsée par Gemini qui intervient **avant publication** de l'avis, et non plus seulement en modération a posteriori.

### 1.4 Le review gating : la ligne exacte 🔵

Le **review gating**, c'est filtrer les clients pour n'envoyer vers Google que les satisfaits. **C'est interdit**, et la sanction potentielle est la suppression de **tous** les avis de la fiche — pas seulement des avis concernés.

**Ce qui est interdit ❌**
```
      « Étiez-vous satisfait ? »
              │
      ┌───────┴───────┐
     OUI             NON
      │               │
  → Google       → formulaire privé
                 (et pas de lien Google)
```

**Ce qui est autorisé ✅**
```
      Page de collecte
              │
   ┌──────────┴───────────┐
   │  Lien Google visible │  ← visible pour TOUT LE MONDE
   │  « Laisser un avis » │
   │                      │
   │  + « Un problème ?   │  ← canal privé proposé EN PLUS,
   │    Écrivez-nous »    │     jamais À LA PLACE
   └──────────────────────┘
```

**La règle en une phrase :** *le lien Google doit rester visible et accessible à tout le monde, satisfait ou non.* Proposer en complément un canal de retour privé est légitime — c'est même un bon service. Ce qui bascule dans l'illégalité, c'est le **branchement conditionnel** qui prive une partie des clients du lien Google.

### 1.5 Les 6 interdits absolus Halo 🟣

À afficher au-dessus du bureau :

1. ❌ Jamais d'avis achetés, échangés, ou rédigés par nous.
2. ❌ Jamais d'avis d'un proche, d'un employé ou de nous-mêmes.
3. ❌ Jamais de contrepartie contre un avis (remise, cadeau, tirage au sort, café offert).
4. ❌ Jamais de review gating.
5. ❌ Jamais de quota imposé au personnel du client. 🆕 *(règle avril 2026)*
6. ❌ Jamais de script dictant le contenu ou citant un employé nommément. 🆕 *(règle avril 2026)*

---

## PARTIE 2 — LA COLLECTE. Faire venir les vrais avis.

### 2.1 Le principe : le placement fait 80 % du résultat 🟢

Voici les taux de conversion couramment observés dans le secteur. **Ce sont des ordres de grandeur d'écosystème, pas des mesures Halo** — à remplacer par tes propres chiffres dès que tu en as (c'est précisément ce que ton système de lien tracké permettra, cf. §2.3).

| Système | Conversion observée | Effort après installation |
|---|---|---|
| NFC/QR présenté **au moment du paiement** | 35-45 % | zéro |
| NFC/QR posé sur le comptoir | 20-30 % | zéro |
| SMS automatique 1-2 h après la visite (+ relance J+3-5) | 12-15 % | zéro si branché sur l'agenda/caisse |
| QR imprimé (ticket, carte de fidélité, vitrine, emballage) | faible unitairement, gratuit en volume | zéro |
| E-mail au fichier client | 3-4 % | zéro |

**La même plaque convertit à 45 % avec l'addition et à 15 % oubliée sur un présentoir.** L'installation chez le client n'est donc pas « poser une plaque » : c'est **choisir le point de contact du paiement**.

> 🟣 **Le geste d'installation Halo (20 min sur place)**
> 1. Observer une transaction complète, sans rien dire. Où sont les mains du client au moment de payer ? Où sont ses yeux pendant que le terminal réfléchit ?
> 2. Placer le support **exactement là**. Les 3 à 5 secondes d'attente du terminal de paiement sont le seul moment creux de toute l'interaction.
> 3. Tester soi-même le parcours complet : scan → lien → page Google → champ d'avis. Sur iPhone **et** sur Android.
> 4. Briefer l'équipe (voir §2.2 — **le script a changé en avril 2026**).
> 5. Photographier l'installation. Ça va dans le premier rapport mensuel.

### 2.2 🆕 Le briefing d'équipe, version conforme avril 2026 🟣

**Ce protocole remplace celui du brief Halo initial.** Le brief prévoyait « la phrase du personnel + geste NFC » avec un effet ×5, et « briefer l'équipe ». C'est toujours valable — mais il faut maintenant border deux choses.

**❌ Ce qu'on ne dit plus jamais à une équipe :**
- « Objectif : 10 avis cette semaine. » → quota, interdit ✅
- « Demandez-leur de citer votre prénom. » → contenu dirigé + nom d'employé, interdit ✅
- « Dites-leur de mettre 5 étoiles. » → influence sur la note, interdit ✅
- « Demandez à ceux qui ont l'air content. » → review gating.

**✅ Le script conforme, à faire répéter à l'équipe :**

> Au moment où le client paie, en posant la main près du support :
> **« Si vous avez un moment, votre avis nous aide beaucoup. C'est juste là. »**
>
> Et on s'arrête. On ne relance pas, on n'insiste pas, on ne regarde pas s'il le fait.

Pourquoi ce script fonctionne et reste conforme :
- Il **encourage** sans proposer d'avantage → autorisé ✅
- Il ne dicte **ni la note ni le contenu** → autorisé ✅
- Il ne cite **aucun employé** → conforme avril 2026 ✅
- Il ne trie **aucun client** → pas de gating ✅
- Il n'exerce **aucune pression** (« si vous avez un moment », et pas de relance) → autorisé ✅

**Ce qu'on dit au gérant à propos de son équipe :**
> « Vous ne pouvez pas leur fixer d'objectif chiffré — Google l'interdit explicitement depuis avril 2026, et ça peut coûter vos avis. Ce que vous pouvez faire, c'est leur donner la phrase et le geste. Un salarié qui pose la main à côté de la plaque au bon moment, ça fait toute la différence. Mais c'est une habitude, pas un objectif. »

### 2.3 🟣 La version technique Halo : le lien tracké

C'est ton avantage de développeur, et c'est ce qui alimente le rapport mensuel.

**L'architecture :**
```
Plaque NFC / QR
      │
      ▼
halo.fr/r/nom-du-commerce        ← ton domaine, ton lien court
      │
      ├─── on enregistre : horodatage, appareil, référent
      │
      ▼
Redirection 302 immédiate
      │
      ▼
Page d'avis Google du client     ← lien direct vers le formulaire
```

**Ce que tu traces (et ce que tu ne traces pas) :**
- ✅ Nombre de scans, horodatage, type d'appareil.
- ❌ **Aucune donnée personnelle.** Pas d'identifiant client, pas de nom, pas d'e-mail. Le scan est anonyme.
- ⚠️ **Attention RGPD :** même sans donnée nominative, si tu poses un cookie ou un identifiant persistant, tu entres dans le champ. Reste sur un comptage agrégé, sans cookie. C'est suffisant pour le rapport et ça t'évite tout le sujet.

**Ce que ça produit dans le rapport mensuel :**
> « 63 scans ce mois-ci, 19 nouveaux avis publiés. Taux de conversion 30 %. Pic les vendredis et samedis entre 19 h et 21 h. »

Aucune plaque générique du marché ne fait ça. C'est un argument de vente **et** un outil de pilotage : si le taux de conversion tombe à 8 %, tu sais que la plaque a été déplacée ou que l'équipe a changé.

**Ce qu'il faut construire** (chantier technique, voir le TODO Halo) :
1. Une redirection courte par client.
2. Un compteur agrégé sans cookie.
3. Une récupération du nombre d'avis via l'API GBP ([M11](M11-industrialiser.md)) pour calculer la conversion automatiquement.

### 2.4 La cadence : la régularité contre les filtres 🔵

**30 avis en une semaine sur une fiche qui en avait 12 déclenchent les filtres anti-spam.** Le résultat typique : une partie des avis n'apparaît jamais, ou disparaît quelques jours plus tard.

**La bonne trajectoire :** un flux continu proportionnel au volume d'activité réel. Un commerce qui sert 200 clients par semaine peut absorber 10-15 avis par mois sans anomalie. Un commerce qui en sert 20 ne le peut pas.

> 🟣 **Le geste à faire au démarrage :** ne pas lancer la collecte à plein régime le premier jour. Poser le support, laisser la mécanique naturelle s'installer. Le premier mois est un mois de rodage, et il faut le dire au client à l'avance — sinon il jugera le service sur un mois volontairement lent.

### 2.5 Le SMS post-visite 🔵

Pour les métiers à rendez-vous (coiffeur, garage, praticien, artisan), c'est le meilleur canal après le NFC.

**Le protocole :**
- Envoi **1 à 2 h après** la prestation (pas le lendemain : le souvenir est frais, l'émotion est encore là).
- Une **relance unique à J+3/J+5**. Jamais deux.
- Message court, sans incitation, sans consigne de note.

**Modèle conforme :**
> « Bonjour, merci de votre visite chez [Établissement] aujourd'hui. Si vous avez un moment, votre avis nous aide beaucoup : [lien]. Bonne journée. »

⚠️ **RGPD :** l'envoi d'un SMS à un client suppose une base légale et une information préalable. C'est **la responsabilité du client**, pas la tienne — mais tu dois le lui dire, et l'écrire dans le contrat. Ne branche jamais un flux SMS sur un fichier client sans que le gérant ait validé qu'il a le droit de l'utiliser pour ça.

---

## PARTIE 3 — LA RÉPONSE. Le cœur de l'abonnement.

### 3.1 Pourquoi c'est le service central de Halo 🟣

Google recommande explicitement de répondre aux avis ✅ (« pour montrer que vous écoutez vos clients »). Mais l'enjeu principal n'est pas là : **la réponse est lue par les futurs clients**, et c'est le seul endroit de la fiche où le gérant a le dernier mot.

C'est aussi **exactement ce que ne fait pas un logiciel à 50 €/mois.** Quand tu vends « un humain qui répond », c'est ici que la promesse se tient ou s'effondre.

**Les deux engagements Halo :**
- **100 % des avis reçoivent une réponse.** Sans exception, y compris les avis sans texte.
- **Sous 24-48 h.**

### 3.2 La matrice de réponse 🔵

La bibliothèque complète de modèles est en [ressources/modeles-reponses-avis.md](ressources/modeles-reponses-avis.md). Voici les principes par cas.

#### ⭐⭐⭐⭐⭐ Avis 5 étoiles avec texte
**Objectif :** remercier, et **réinjecter du vocabulaire métier** naturellement.
**Longueur :** 2-3 phrases. Pas plus.
**Règle :** personnaliser sur un élément **précis** de l'avis. Une réponse générique à un avis détaillé est pire que pas de réponse — elle prouve que personne n'a lu.

> « Merci beaucoup ! Content que le pain au levain vous ait plu — c'est notre fermentation 24 h, et c'est vrai qu'elle change tout sur la mie. À bientôt aux Chartrons. »

#### ⭐⭐⭐⭐⭐ Avis 5 étoiles sans texte
**Objectif :** répondre quand même, brièvement.
> « Merci pour ces 5 étoiles ! »
C'est tout. Trois mots suffisent, et le taux de réponse reste à 100 %.

#### ⭐⭐⭐⭐ Avis 4 étoiles
**Le plus mal traité de tous.** La plupart des gérants remercient comme pour un 5 étoiles. Or un 4 étoiles contient presque toujours une réserve implicite.
**Objectif :** remercier + ouvrir sur ce qui manquait, sans quémander la 5e étoile.
> « Merci pour votre retour ! Si quelque chose vous a manqué, dites-le nous — on prend toujours ça au sérieux. Au plaisir de vous revoir. »
❌ Ne jamais écrire « que faudrait-il pour avoir 5 étoiles ? » → tentative d'influence sur la note.

#### ⭐⭐⭐ Avis 3 étoiles
**Objectif :** montrer aux futurs lecteurs qu'on prend au sérieux.
**Structure :** accusé de réception → point précis relevé → ce qu'on en fait → canal privé.
> « Merci d'avoir pris le temps. L'attente du samedi midi est un vrai sujet, on est en train de revoir l'organisation sur ce créneau. Si vous voulez en dire plus, on est joignables directement — ça nous aide. »

#### ⭐⭐ / ⭐ Avis négatif légitime
**C'est la réponse la plus lue de toute la fiche.** Elle vaut plus que dix avis positifs.

**La structure en 4 temps :**
1. **Reconnaître** — sans « mais ».
2. **Ne pas se justifier publiquement.** L'explication technique n'intéresse personne et ressemble à une défense.
3. **Dire ce qui est fait.**
4. **Basculer en privé** — sans exiger le retrait de l'avis.

> « Vous avez raison, une heure d'attente sans qu'on vous prévienne, ce n'est pas normal. Nous étions en sous-effectif ce soir-là, ce qui explique mais n'excuse pas. On a modifié le planning du week-end depuis. Si vous acceptez, écrivez-nous en direct : j'aimerais réparer ça. — Marc, gérant »

**Les 5 interdits absolus de la réponse négative :**
- ❌ Contester la véracité (« vous n'êtes jamais venu »), sauf si c'est certain **et** documenté.
- ❌ Se justifier longuement.
- ❌ Ironiser, même très légèrement. Tout le monde le voit.
- ❌ Demander le retrait de l'avis. **Proposer un avantage contre un retrait est une violation caractérisée** ✅.
- ❌ Répondre à chaud. Règle Halo : **jamais dans les 2 heures** après lecture d'un avis à 1 étoile.

#### 🚩 Avis manifestement faux ou hors-sujet
**Deux actions distinctes, dans cet ordre :**
1. **Signaler** l'avis à Google (voir §3.3).
2. **Répondre quand même**, factuellement et calmement — parce que le signalement échoue souvent, et que la réponse restera visible.

> « Nous ne retrouvons aucune trace de cette visite dans nos réservations, et le service décrit ne correspond pas à ce que nous proposons. Si nous nous trompons, contactez-nous, nous corrigerons volontiers. »

#### ⚖️ Avis diffamatoire ou injurieux
**Escalade, pas improvisation.**
1. Capture d'écran horodatée (l'avis peut disparaître).
2. Signalement à Google.
3. Réponse publique **minimale et neutre**, ou pas de réponse du tout si le contenu est injurieux.
4. **Renvoyer le client vers un avocat** si le contenu est diffamatoire au sens juridique (imputation d'un fait précis portant atteinte à l'honneur).

> ⚠️ **Ce n'est pas ton métier.** Halo répond aux avis ; Halo ne fait pas de conseil juridique. La bonne phrase : *« Là on est au-delà d'un avis mécontent. Je vous mets par écrit ce que je constate, et je vous recommande de le montrer à un avocat. En attendant, voici ce que je propose de répondre publiquement. »*

### 3.3 Faire supprimer un avis : ce qui marche vraiment 🔵

**La vérité que personne ne dit au client :** la plupart des demandes de suppression échouent. Google ne supprime pas un avis parce qu'il est faux ou injuste — il le supprime s'il **viole une politique**.

**Ce qui a une chance réelle de passer :**
| Motif | Chance |
|---|---|
| Contenu injurieux, haineux, obscène | Bonne |
| Contenu manifestement hors-sujet (avis sur un autre commerce) | Bonne |
| Contenu personnel ou confidentiel (nom d'un employé + accusation, données privées) | Bonne |
| Spam / publicité / lien commercial | Bonne |
| Conflit d'intérêts manifeste (concurrent identifiable) | Moyenne |
| Avis d'une personne jamais venue | **Faible** — invérifiable pour Google |
| Avis injuste mais sincère | **Nulle** — et c'est normal |

**La procédure :**
1. Signaler l'avis depuis la fiche, en choisissant **le bon motif de politique** (pas « je ne suis pas d'accord »).
2. Si refus : la demande de réexamen via le support GBP, avec un argumentaire qui cite **la politique enfreinte**, pas l'injustice ressentie.
3. Documenter chaque étape.

> 🟣 **Le discours honnête à tenir au client**, qui te distingue immédiatement :
> *« Je vais le signaler. Je vous le dis tout de suite : dans la majorité des cas Google ne supprime pas. Ce qui va vraiment protéger votre note, c'est la réponse que je vais écrire, et les quinze avis récents qui vont le faire descendre en bas de page. Un avis à 1 étoile noyé dans du récent, ça ne se voit plus. »*
>
> C'est vrai, c'est vérifiable, et ça évite la déception qui tue les abonnements au 3e mois.

### 3.4 Le poids des mots-clés dans les avis 🔵

Les avis nourrissent la **pertinence** autant que la notoriété : le vocabulaire employé par les clients aide Google à comprendre ce que fait l'établissement.

⚠️ **Mais on ne peut pas le solliciter** — c'est explicitement du « contenu spécifique » interdit ✅.

**Ce qu'on peut faire, légalement :**
- Répondre en employant naturellement le vocabulaire métier (ta réponse est du texte indexable, elle, et elle est de toi).
- Rendre le vocabulaire évident partout ailleurs sur la fiche (services, description, photos), pour que les clients le reprennent spontanément.

C'est un levier indirect. C'est le seul qui soit conforme.

---

## PARTIE 4 — EXERCICES ET CONTRÔLE

### Exercices 🟢🔵

1. **Audit d'avis du cas fil rouge.** Relève : volume, note, date du dernier avis, **taux de réponse**, délai moyen de réponse, nombre d'avis négatifs sans réponse. Compare aux 3 concurrents.
2. **Réécris 5 réponses.** Prends 5 avis réels du cas fil rouge (ou d'un commerce quelconque) et rédige les réponses selon la matrice : un 5★ détaillé, un 5★ sans texte, un 4★, un 3★, un 1★ légitime.
3. **Cherche l'infraction.** Trouve, en ligne, trois pages de collecte d'avis de prestataires concurrents. Y a-t-il du review gating ? Une incitation ? Décris précisément ce qui cloche.
4. **Réécris le briefing d'équipe** du brief Halo initial pour le rendre conforme aux règles d'avril 2026. Compare avec le §2.2.
5. **Cas limite.** Un client te dit : « mon frère peut mettre un avis, il est vraiment venu manger ». Que réponds-tu, et pourquoi ?

### Check-list de sortie

- [ ] Je connais les peines exactes et je sais distinguer la peine de base de la peine aggravée.
- [ ] Je connais les 5 interdits Google, dont **les deux nouveaux d'avril 2026**.
- [ ] Je sais tracer la ligne exacte du review gating et dessiner le schéma conforme.
- [ ] Je sais installer un support de collecte au bon endroit, et pourquoi cet endroit.
- [ ] J'ai un script de briefing d'équipe conforme, sans quota et sans nom d'employé.
- [ ] Je sais répondre aux 7 cas de la matrice.
- [ ] Je sais dire honnêtement à un client que son avis ne sera probablement pas supprimé.
- [ ] Je ne réponds jamais à un avis négatif dans les 2 heures.

### Contrôle

1. Peine encourue pour de faux avis publiés en ligne ? Et la peine de base hors ligne ?
2. Un gérant veut offrir un café contre un avis. Autorisé ?
3. Un gérant veut dire à ses serveurs « celui qui ramène le plus d'avis a une prime ». Autorisé ?
4. Une page de collecte propose un formulaire de réclamation privé **en plus** du lien Google, visible par tous. Légal ?
5. Un client laisse 4 étoiles. Peux-tu lui demander ce qu'il faudrait pour 5 ?
6. Un avis est manifestement faux. Quelle est ta première action, et que dis-tu au client sur ses chances ?

<details><summary>Réponses</summary>

1. En ligne : **5 ans et 750 000 €** (circonstance aggravante de l'art. L132-2). Base : 2 ans et 300 000 €.
2. Non. Avantage en échange d'un avis = interdit explicitement par Google, et incitation constitutive d'une pratique trompeuse.
3. Non, doublement : c'est un **quota imposé au personnel**, banni explicitement depuis avril 2026, et c'est une incitation.
4. Oui — à condition que le lien Google reste visible et accessible pour tous, satisfaits comme insatisfaits. Le canal privé vient **en plus**, jamais **à la place**.
5. Non. C'est une tentative d'influence sur la note. On peut ouvrir sur ce qui a manqué, sans jamais mentionner l'étoile manquante.
6. Le signaler en choisissant le bon motif de politique — puis **répondre quand même**, factuellement. Et lui dire que la suppression est peu probable, et que ce qui protègera sa note c'est la réponse plus le flux d'avis récents.
</details>

### Les 3 erreurs classiques

1. **Répondre à chaud à un avis à 1 étoile.** La réponse restera en ligne des années. Les 2 heures d'attente sont non négociables.
2. **Promettre la suppression d'un avis.** Tu ne contrôles pas Google, et l'échec te coûte le client.
3. **Reprendre un vieux script de briefing d'équipe.** Les quotas sont bannis depuis avril 2026 : un script d'avant cette date peut coûter les avis de ton client.

---

**Module suivant :** [M07 — Le signal externe](M07-signal-externe.md)
