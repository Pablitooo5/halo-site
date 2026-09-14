# Halooo — système de design (source de vérité)

Généré le 14/09/2026 avec la skill `ui-ux-pro-max`, puis **corrigé à la main** : la
palette proposée par l'outil (vert `#059669` + orange `#EA580C`) a été écartée au
profit des couleurs relevées au pixel sur le logo Halooo. Tout le reste vient de
la recherche `--design-system` et du contrôle `better-ui`.

## Motif retenu

**Trust & Authority + Conversion** (`landing.csv`).
Ordre : accroche (mission + crédibilité) → offre → étapes → tarifs → interlocuteur → contact.
Stratégie de couleur du motif : *« Navy/Grey corporate. Trust blue. Accent for CTA only. »*
C'est exactement la répartition Halooo : bleu profond partout, ambre réservé à
l'appel à l'action et aux étoiles d'avis.

Style : **Minimalism & Swiss** — propre, spacieux, grille, contraste élevé, sans-serif.

## Couleurs — relevées sur le logo, pas choisies

| Rôle | Valeur | Contrôle de contraste |
|---|---|---|
| Page | `#e9e7e2` | — |
| Carte | `#ffffff` | — |
| Encre | `#15181c` | 17,8:1 sur carte · 14,4:1 sur page |
| Texte secondaire | `#5b616a` | 6,2:1 sur carte · 5,1:1 sur page |
| Filet | `#e7e5e0` | structure uniquement |
| Bleu | `#4f93fe` | accent, focus |
| Bleu profond | `#0f2a5c` | aplats, bouton principal |
| Ambre | `#f5b01e` | **CTA et étoiles d'avis uniquement** · 7,4:1 avec l'encre navy |

`--color-muted` valait `#6a7079` : 4,04:1 sur le fond de page, sous le seuil AA.
Corrigé à `#5b616a`. Ne pas le réclaircir.

## Typographie

Titres **Space Grotesk** 600, `letter-spacing: -0.03em`, `line-height: 1.06`.
Texte **Inter** 400/500, base 16 px, `line-height: 1.6`.
Les deux sont auto-hébergées dans `public/assets/fonts/` : aucune requête tierce.

## Rayons — concentriques

Règle : **rayon extérieur = rayon intérieur + marge intérieure**. Un rayon mal
accordé sur un élément imbriqué est ce qui fait « sonner faux » une interface.

| Jeton | Valeur | Emploi |
|---|---|---|
| `--radius-card` | 28 px | cartes de section (marge 28 px sur mobile, 48 px au-delà) |
| `--radius-tile` | 20 px | vignettes dans une carte |
| `--radius-inner` | 12 px | contenu dans une vignette |

Quand une image occupe toute la largeur d'une vignette, elle **affleure les bords**
et hérite du rayon via `overflow: hidden`, plutôt que de porter son propre rayon.

## Profondeur

Ombre pour l'élévation, filet pour la structure.
Cartes : `0 1px 2px rgb(21 24 28 / .04), 0 8px 24px -12px rgb(21 24 28 / .10)`.
Images : `outline: 1px solid rgb(0 0 0 / .10)` avec `outline-offset: -1px` —
noir pur, jamais un gris teinté, qui se lirait comme une salissure de bord.

## Mouvement

Aucune bibliothèque. `IntersectionObserver` + `requestAnimationFrame` (`src/hooks.js`).

| Effet | Durée | Courbe |
|---|---|---|
| Apparition au défilement | 600 ms, décalage 110 ms | `cubic-bezier(.22,1,.36,1)` |
| Voile qui se retire sur une image | 800 ms | idem |
| Survol de bouton | 200 ms | idem |
| Appui | `scale(0.96)`, 150 ms | idem |
| Ligne d'étapier | 220 ms | idem |

Tout est neutralisé sous `prefers-reduced-motion`. Le mouvement n'est jamais le
seul signal : chaque changement d'état a aussi une couleur ou un libellé.

## Contrôles passés

- Contraste AA sur les 13 paires de couleurs du site
- Cibles tactiles ≥ 44 px (hors liens en ligne dans un paragraphe, exemptés WCAG 2.5.5)
- Aucun débordement horizontal à 375, 768, 1024 et 1440 px
- Toutes les images portent un `alt`
- Aucun emoji employé comme icône
- `:focus-visible` visible au clavier

## À éviter (relevé par la skill)

Pastilles arrondies en série pour des mots-clés : Pablo les trouve « trop IA ».
Employer des listes à filets ou un bandeau de repères séparés par des traits.
