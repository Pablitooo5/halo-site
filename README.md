# Halo — site vitrine

Site vitrine one-page pour **Halo**, service de gestion de fiches Google Business à Bordeaux
(optimisation, animation mensuelle, gestion des avis, supports NFC/QR).

100 % statique : HTML + CSS + JavaScript vanilla. Le hero met en scène un badge Google 3D à
deux faces (images WebP transparentes) qui pivote en continu sur l'axe Y (CSS `preserve-3d` +
`backface-visibility`), lévite, sur fond de halo pulsé, champ d'étoiles et étoiles filantes.
Aucun build, aucune dépendance à installer.

## Aperçu en local

Un simple serveur statique suffit (les modules ES et l'import map exigent `http://`, pas `file://`) :

```bash
cd HALO
python3 -m http.server 8123
# puis ouvrir http://localhost:8123/index.html
```

## Structure

```
index.html              Page principale (toutes les sections)
css/styles.css          Styles + tokens de design (toutes les couleurs dérivent d'ici)
js/main.js              Nav mobile, reveal au scroll, étoiles + étoiles filantes, formulaire
assets/badge-front.webp Face avant du badge (fiche Google) — + variante -500 pour mobile
assets/badge-back.webp  Face arrière du badge (logo Halo) — + variante -500 pour mobile
favicon.svg             Favicon (anneau Halo)
og-image.svg            Image de partage réseaux sociaux (Open Graph)
robots.txt
legal/                  Mentions légales, CGV, Confidentialité (placeholders à compléter)
vercel.json             Config déploiement Vercel
netlify.toml            Config déploiement Netlify
```

## 3 branchements à finaliser

1. **Formulaire → Formspree.** Créez un formulaire sur [formspree.io](https://formspree.io),
   récupérez votre endpoint (ex. `https://formspree.io/f/abcdwxyz`) et remplacez la constante
   `FORMSPREE_ENDPOINT` en haut de [`js/main.js`](js/main.js).
   Tant que ce n'est pas fait, le bouton bascule automatiquement sur un `mailto:` vers
   `halo.contact@gmail.com` — le site fonctionne dès maintenant.

2. **Pages légales.** Compléter `legal/mentions.html` (raison sociale, SIRET, hébergeur…),
   `legal/cgv.html` et `legal/confidentialite.html`. Les zones à remplir sont signalées en jaune.

3. **Domaine.** Remplacer `https://REMPLACER-PAR-VOTRE-DOMAINE` dans `robots.txt`, et
   `https://halo.example` dans le JSON-LD + les balises Open Graph de `index.html`.

## Déploiement (quand vous êtes prêt)

Site statique → déploiement en une étape, sans build.

**Vercel :**
```bash
npm i -g vercel
vercel            # aperçu
vercel --prod     # production
```

**Netlify :**
```bash
npm i -g netlify-cli
netlify deploy            # aperçu
netlify deploy --prod     # production
```

Ou, sans CLI : glisser-déposer le dossier `HALO` sur https://app.netlify.com/drop.
