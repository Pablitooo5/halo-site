# Halo — site vitrine

Site vitrine one-page pour **Halo**, service de gestion de fiches Google Business à Bordeaux
(optimisation, animation mensuelle, gestion des avis, supports NFC/QR).

Construit avec **React + Vite + Tailwind CSS**. Le hero met en scène un badge Google 3D à
deux faces (images WebP transparentes) qui pivote en continu sur l'axe Y (CSS `preserve-3d` +
`backface-visibility`), lévite, sur fond de halo pulsé, champ d'étoiles et étoiles filantes.
Animations discrètes d'apparition au scroll, entièrement responsive.

## Développement

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build de production

```bash
npm run build     # génère dist/
npm run preview   # prévisualise le build
```

## Structure

```
index.html                 Point d'entrée Vite
src/
  main.jsx                 Montage React
  App.jsx                  Assemblage des sections
  index.css                Tailwind + tokens de design + effets (badge 3D, halo, étoiles)
  data.js                  Contenu (chiffres, offre, tarifs, étapes) + endpoint formulaire
  components/              Nav, Hero, Badge, Starfield, Problem, Offer, Difference,
                           Pricing, Steps, Contact, Footer, Reveal, SectionHead, Icons
public/
  assets/badge-*.webp      Faces du badge du hero (+ variantes -500 pour mobile)
  favicon.svg, og-image.svg, robots.txt
  legal/                   Mentions légales, CGV, Confidentialité (placeholders à compléter)
vite.config.js             Plugins React + Tailwind v4
vercel.json / netlify.toml Config de déploiement (build Vite)
```

## 3 branchements à finaliser

1. **Formulaire → Formspree.** Créez un formulaire sur [formspree.io](https://formspree.io),
   récupérez votre endpoint (ex. `https://formspree.io/f/abcdwxyz`) et remplacez la constante
   `FORMSPREE_ENDPOINT` dans [`src/data.js`](src/data.js). Tant que ce n'est pas fait, le bouton
   bascule automatiquement sur un `mailto:` vers `halo.contact@gmail.com`.

2. **Pages légales.** Compléter `public/legal/mentions.html` (raison sociale, SIRET, hébergeur…),
   `cgv.html` et `confidentialite.html`. Les zones à remplir sont signalées en jaune.

3. **Domaine.** Remplacer `https://halo.example` dans le JSON-LD et les balises Open Graph de
   `index.html`.

## Déploiement

Projet Vite → build automatique sur Vercel ou Netlify (configs incluses).

**Vercel :** `vercel` (aperçu) puis `vercel --prod`.
**Netlify :** `netlify deploy` puis `netlify deploy --prod`.

Sur les deux, la commande de build (`npm run build`) et le dossier de sortie (`dist`) sont déjà
configurés.
