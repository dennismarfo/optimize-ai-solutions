---
name: Solutions d'automatisation OptiAI
description: Le tiroir de classeur. L'administratif arrive en pile de papiers réels et repart rangé dans trois dossiers suspendus.
colors:
  tiroir: "#17432F"
  tiroir-fonce: "#0E2C1F"
  tiroir-texte: "#EEF3EC"
  tiroir-doux: "#AFCBB9"
  kraft: "#C99A5B"
  kraft-clair: "#D9B077"
  kraft-fonce: "#9E7438"
  papier: "#FCFBF7"
  papier-ligne: "#E3DED2"
  encre: "#1A1C1A"
  encre-douce: "#4A4A42"
  vert: "#2F9E52"
  jaune: "#F0B92B"
  rouge: "#D6402B"
  bleu: "#2C5AA8"
  vert-pale: "#DDF0E1"
  jaune-pale: "#FBEFC8"
  rouge-pale: "#F8DDD7"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(46px, min(6.4vw, 8.4vh), 92px)"
    fontWeight: 880
    lineHeight: 0.93
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(38px, 5vw, 72px)"
    fontWeight: 880
    lineHeight: 0.97
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 122"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(22px, 2.4vw, 30px)"
    fontWeight: 820
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 96"
  subtitle:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 92"
  lede:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label-onglet:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 650
    fontVariation: "'wdth' 80"
  label-bouton:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 750
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 88"
  dymo:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 72"
  machine:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  tampon:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  papier: "0px"
  tampon: "4px"
  onglet-bouton: "10px 10px 4px 4px"
  onglet-nav: "9px 9px 0 0"
  onglet-chemise: "14px 14px 0 0"
  corps-chemise: "0 6px 6px 6px"
  dos-dossier: "4px 4px 0 0"
  champ: "8px"
spacing:
  conteneur: "1240px"
  gouttiere: "32px"
  gouttiere-mobile: "18px"
  entre-chemises: "58px"
  corps-chemise: "48px 52px 56px"
  corps-chemise-mobile: "28px 20px 34px"
components:
  onglet-btn:
    backgroundColor: "{colors.rouge}"
    textColor: "#FFFFFF"
    typography: "{typography.label-bouton}"
    rounded: "{rounded.onglet-bouton}"
    padding: "15px 26px 15px 24px"
  onglet-btn-hover:
    backgroundColor: "#C93723"
  onglet-btn-discret:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.encre}"
    rounded: "{rounded.onglet-bouton}"
  onglet-nav:
    backgroundColor: "{colors.kraft-clair}"
    textColor: "{colors.encre}"
    typography: "{typography.label-onglet}"
    rounded: "{rounded.onglet-nav}"
    padding: "9px 16px 8px"
  onglet-nav-actif:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.encre}"
  chemise-onglet:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.encre}"
    typography: "{typography.title}"
    rounded: "{rounded.onglet-chemise}"
    padding: "16px 26px 12px"
  chemise-corps:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.encre}"
    rounded: "{rounded.corps-chemise}"
    padding: "{spacing.corps-chemise}"
  chemise-papier:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.encre}"
  chemise-vert-onglet:
    backgroundColor: "{colors.vert}"
    textColor: "#FFFFFF"
  chemise-vert-corps:
    backgroundColor: "{colors.vert-pale}"
    textColor: "{colors.encre}"
  feuille:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.encre}"
    rounded: "{rounded.papier}"
    padding: "22px 22px 24px"
  etiquette-vert:
    backgroundColor: "{colors.vert}"
    textColor: "#FFFFFF"
    rounded: "{rounded.onglet-nav}"
  etiquette-jaune:
    backgroundColor: "{colors.jaune}"
    textColor: "#3A2C00"
    rounded: "{rounded.onglet-nav}"
  etiquette-rouge:
    backgroundColor: "{colors.rouge}"
    textColor: "#FFFFFF"
    rounded: "{rounded.onglet-nav}"
  dymo:
    backgroundColor: "#121412"
    textColor: "#F4F4EF"
    typography: "{typography.dymo}"
    rounded: "{rounded.papier}"
    padding: "7px 12px 6px"
  tampon:
    textColor: "{colors.rouge}"
    typography: "{typography.tampon}"
    rounded: "{rounded.tampon}"
    padding: "4px 9px 3px"
  verdict:
    backgroundColor: "{colors.tiroir}"
    textColor: "#FFFFFF"
    rounded: "{rounded.tampon}"
    padding: "24px 28px"
  champ-sombre:
    backgroundColor: "rgba(0,0,0,.18)"
    textColor: "#FFFFFF"
    rounded: "{rounded.champ}"
    padding: "13px 15px"
---

# Design System: Solutions d'automatisation OptiAI

## Overview

**Creative North Star: "Le tiroir de classeur"**

Tout le site est un tiroir de classeur vu de dessus. La page elle-même est le fond vert profond du tiroir; chaque surface posée dessus est un objet de bureau réel qui a une matière, un poids et une ombre : chemises kraft, feuilles blanches imprimées, papillons adhésifs, étiquettes Dymo, tampons encreurs. La méthode se voit comme un classement : ce qui arrive en pile repart rangé dans trois dossiers suspendus, corriger, automatiser, jamais confié à l'IA. Les sections ne sont jamais des cartes posées sur une grille; ce sont des chemises à onglet dont l'onglet change de position (gauche, centre, droite) pour que la page se lise comme une rangée de dossiers.

La densité est celle d'un vrai bureau : des papiers légèrement inclinés, des chiffres en Courier sur les documents, des tableaux et des formulaires imprimés plutôt que des pictogrammes. La typographie tient le système presque seule grâce à un seul caractère variable, Archivo, dont l'axe de largeur sert de hiérarchie : très élargi et très gras pour ce qui crie, condensé pour ce qui s'étiquette. Le mouvement est rare et démonstratif : un seul moment signature (le tri de la pile) et des chemises de FAQ qui s'ouvrent; le reste est calme.

Rejet confirmé : la page de consultant IA en cartes arrondies sur fond marine, et l'ancienne charte marine, sarcelle et orange, abandonnée.

**Key Characteristics:**
- Fond de page vert de tiroir (`tiroir`), jamais blanc; le blanc n'existe que sous forme de papier.
- Sections en chemises kraft à onglet, onglet décalé gauche, centre ou droite.
- Trois onglets de couleur à sens fixe : vert corriger, jaune automatiser, rouge jamais.
- Archivo variable seul pour l'interface, largeur de 72 % à 125 %; Courier Prime pour le texte imprimé.
- Ombres physiques teintées de vert de tiroir; textures d'encre par filtre SVG.
- Un seul moment de mouvement fort, rejouable, réduit sans déplacement.

## Colors

Une palette de matières de bureau : un vert de tiroir profond, le kraft des chemises, le blanc cassé du papier, une encre presque noire, et quatre couleurs d'onglets en plastique saturé.

### Primary
- **Vert de tiroir** (`tiroir`): le fond de toute la page, l'arrière-plan du héros et du bandeau verdict. C'est le sol du système; tout le reste est posé dessus.
- **Rouge onglet** (`rouge`): la seule couleur d'action. Bouton principal « Réserver un appel », tampon « Pas d'IA », numéros du bordereau, soulignés de liens sur papier ou kraft, jauge de l'auto-diagnostic, accent des curseurs. Également le sens « jamais confié à l'IA » dans le tri.

### Secondary
- **Kraft** (`kraft`): le corps et l'onglet des chemises de section, le fond des questions de la FAQ, le devant des dossiers suspendus (en dégradé depuis `kraft-clair`).
- **Kraft clair** (`kraft-clair`): les onglets de navigation au repos, le haut du dégradé des dossiers, le chiffre des intercalaires.
- **Kraft foncé** (`kraft-fonce`): le dos des dossiers suspendus, la languette au-dessus de chaque question, la couleur de la barre de défilement.

### Tertiary
- **Jaune onglet** (`jaune`): l'accent lumineux sur le vert. Deuxième ligne du titre du héros, point de la marque « OptiAI. », soulignés de liens sur fond vert, anneau de focus, sélection de texte, onglet « Automatiser », bouton de la démo Maya.
- **Vert onglet** (`vert`): l'onglet « Corriger d'abord », l'onglet de la chemise variante verte, le témoin « Ligne active ».
- **Bleu onglet** (`bleu`): déclaré dans les jetons pour la quatrième couleur d'onglet du classeur, mais aucune surface livrée ne l'emploie encore. Réservé.
- **Pâles d'onglet** (`vert-pale`, `jaune-pale`, `rouge-pale`): fonds de feuille teintée. Seul `vert-pale` est employé (corps de la chemise verte).

### Neutral
- **Papier** (`papier`): toutes les feuilles, bordereaux, formulaires, registres, la photo agrafée, l'onglet de navigation actif, la variante papier des chemises, le bouton discret.
- **Ligne de papier** (`papier-ligne`): filets entre lignes de registre, de bordereau et de formulaire; séparateur d'en-tête de courriel.
- **Encre** (`encre`): le texte sur papier et sur kraft, les chiffres d'intercalaires (en pastille), les filets forts de 2 à 3 px qui ouvrent une liste.
- **Encre douce** (`encre-douce`): le texte secondaire sur papier (descriptions, notes, en-têtes de colonnes en Courier).
- **Vert foncé de tiroir** (`tiroir-fonce`): la navigation, la façade et la poignée du tiroir, la clôture, la carte chrono de Maya, les rails latéraux du héros.
- **Texte de tiroir** (`tiroir-texte`): le texte courant sur fond vert.
- **Vert doux** (`tiroir-doux`): le texte secondaire sur fond vert (sous-titres, fil d'Ariane, pied de page, mentions).

### Named Rules
**The Sens des onglets Rule.** Le vert, le jaune et le rouge d'onglet portent un sens fixe dans tout ce qui touche au tri : vert corriger, jaune automatiser, rouge jamais confié à l'IA. Le rouge est en plus la couleur unique de l'action principale; aucun autre bouton principal n'existe.

**The Encre lisible Rule.** Sur papier, les tampons n'utilisent pas `vert` et `jaune` tels quels, trop clairs pour être lus : ils prennent une encre assombrie (#23803F pour corriger, #A97700 pour automatiser) et `rouge` pour jamais. Ces deux encres sont aujourd'hui des littéraux répétés, pas des jetons.

**The Blanc-est-papier Rule.** Le blanc pur ou cassé n'apparaît jamais comme fond de page; il n'existe que sous forme d'objet (feuille, bordereau, onglet actif) avec une ombre de papier.

## Typography

**Display Font:** Archivo Variable (avec Archivo, system-ui, sans-serif)
**Body Font:** Archivo Variable (même pile)
**Label/Mono Font:** Courier Prime (avec Courier New, monospace)

**Character:** Un seul grotesque variable dont l'axe de largeur fait la hiérarchie, du titre élargi et massif au libellé condensé d'onglet; Courier Prime donne la voix de la machine à écrire et du ticket de caisse aux documents imprimés.

### Hierarchy
- **Display** (880, clamp(46px, min(6.4vw, 8.4vh), 92px), 0.93, largeur 125 %): le titre du héros uniquement, blanc avec la deuxième ligne en `jaune`, équilibré (`text-wrap: balance`).
- **Headline** (880, clamp(38px, 5vw, 72px), 0.97, largeur 122 %): le titre des pages intérieures. La clôture emploie la même voix un cran plus bas (880, clamp(34px, 4.4vw, 60px), 1, largeur 120 %).
- **Title** (820, clamp(22px, 2.4vw, 30px), 1.15, largeur 96 %): le titre écrit sur l'onglet de chaque chemise.
- **Subtitle** (780 à 800, 19 à 22px, largeur 92 à 96 %): les titres h3 dans les chemises (feuilles, intercalaires, répertoire, règles).
- **Lede** (400, 19px, 1.55): chapeau et intro de chemise, 34 à 38em de large au plus.
- **Body** (400, 17px, 1.6): texte courant; 15.5 à 16.5px pour le texte de feuille et de liste. Prose limitée à 46em.
- **Label onglet** (650, 15px, largeur 80 %): onglets de navigation.
- **Label bouton** (750, 17px, largeur 88 %): bouton onglet.
- **Dymo** (700, 15px, interligne 1, largeur 72 %, 0.05em, majuscules): étiquettes en ruban Dymo noir, inclinées de -1.2deg.
- **Machine** (Courier Prime 400, 12 à 15px): corps des documents imprimés (courriel, reçu, tableur, note lignée), dates d'articles, en-têtes de registre.
- **Tampon** (Courier Prime 700, 12 à 13px, 0.04 à 0.06em, majuscules): textes de tampons encreurs.

### Named Rules
**The Largeur-fait-la-hiérarchie Rule.** L'axe de largeur d'Archivo porte le rang : élargi (118 à 125 %) pour le titre du héros, les titres de page et la marque; normal (92 à 105 %) pour les titres de chemise et h3; condensé (72 à 88 %) pour les onglets, boutons et étiquettes Dymo. Les chiffres de compte passent à 110 %.

**The Machine-à-écrire Rule.** Courier Prime appartient aux documents imprimés : feuilles, reçus, formulaires, registres, tampons. Il ne sert pas de police d'interface ni de libellé décoratif.

**The Chiffres-alignés Rule.** Les comptes et montants utilisent `font-variant-numeric: tabular-nums` (classe `.num`).

## Layout

Un conteneur unique (`conteneur`, 1240px) centré avec une gouttière de 32px, ramenée à 18px sous 600px; la navigation et le pied de page partagent exactement ces mesures. Les sections de contenu sont des chemises empilées verticalement, séparées de 58px (`entre-chemises`), avec un corps rembourré de 48px 52px 56px (28px 20px 34px sous 700px). L'onglet de chaque chemise alterne de position (gauche, centre à 22 % de retrait, droite) pour rythmer la page comme une rangée de dossiers; le coin du corps qui touche l'onglet reste carré.

La première vue est le tiroir entier : une grille 1.15fr / 1fr (titre à gauche, pile de papiers en position absolue à droite, 452px de haut), puis trois dossiers suspendus sur toute la largeur, puis la façade du tiroir avec sa poignée et son étiquette Dymo. Sous 960px la grille passe en une colonne et la pile se centre à 520px de large au plus. Des rails latéraux de 14px (6px sous 700px) dessinent les parois du tiroir.

À l'intérieur des chemises, la mise en page reprend des formats de bureau plutôt que des grilles de cartes : étalage de feuilles épinglées à largeurs inégales (1.25fr .8fr 1fr), intercalaires numérotés en quatre colonnes séparées par des filets, registres en tableau, listes de définitions en deux colonnes (dt/dd), répertoire en lignes. Points de rupture observés : 1060px (navigation repliée), 960px (héros), 900px, 860px, 700px, 600px, 560px, 480px.

## Elevation & Depth

La profondeur est physique et littérale : les objets ont l'épaisseur de ce qu'ils représentent. Les feuilles reposent à plat avec une ombre courte, les chemises et dossiers debout portent une ombre longue et diffuse, le bouton onglet a une lèvre inférieure (ombre interne) comme un onglet de plastique. Toutes les ombres sont teintées du vert foncé du tiroir (rgba(14,44,31,…)), jamais d'un noir neutre. La matière vient aussi des fonds : fines rayures verticales et halo lumineux sur le fond du tiroir, lignes bleues de cahier sur la note, dégradé kraft sur le devant des dossiers, filtre SVG `#encre` (turbulence et déplacement) qui ronge le bord des tampons et du cadre de garantie.

### Shadow Vocabulary
- **Ombre papier** (`--ombre-papier`): toute feuille, bordereau, formulaire, registre, photo agrafée, question de FAQ.
- **Ombre dossier** (`--ombre-dossier`): corps de chemise, devant des dossiers suspendus, carte de résultat de l'auto-diagnostic.
- **Lèvre d'onglet** (`box-shadow: inset 0 -3px 0 rgba(0,0,0,.18), 0 10px 18px -8px rgba(14,44,31,.7)`): le bouton onglet au repos; écrasée à l'appui.

### Named Rules
**The Gravité-de-bureau Rule.** Une ombre décrit un objet qui repose ou qui se tient debout, teintée du vert du tiroir. Le texte, les liens et les filets n'en portent jamais.

## Shapes

La forme de référence est l'onglet : des coins arrondis seulement en haut, là où l'onglet sort du dossier (9 à 14px), et carrés ou presque en bas. Le bouton principal garde cette silhouette (10px en haut, 4px en bas). Le corps d'une chemise a ses quatre coins à 6px sauf celui où se raccorde l'onglet, qui reste à 0. Les papiers ont des angles vifs; le reçu a un bord inférieur dentelé (masque radial), le papillon adhésif est carré. Les objets posés sont légèrement inclinés (feuilles de -3 à 5deg, papillon -6deg, photo -2deg, tampons -8 à -2.5deg, Dymo -1.2deg); les chemises, dossiers et onglets restent droits. Seuls les champs de formulaire ont un arrondi uniforme (8px).

### Named Rules
**The Onglet Rule.** Un arrondi ne se met qu'au sommet d'un onglet. Un conteneur arrondi sur ses quatre coins n'existe pas dans ce monde, sauf un champ de saisie.

**The Inclinaison Rule.** Seuls les objets posés à la main (feuilles, papillons, photos, tampons, étiquettes) s'inclinent, de quelques degrés. Le mobilier (chemises, dossiers, onglets, navigation) reste d'aplomb.

## Components

### Buttons
Un bouton est un onglet de plastique rouge qu'on tire.
- **Shape:** onglet (`onglet-bouton`, 10px en haut, 4px en bas).
- **Primary:** `rouge` avec texte blanc, Archivo 750 à 17px, largeur 88 %, rembourrage 15px 26px 15px 24px, flèche SVG de 18px à droite; lèvre d'onglet.
- **Hover / Focus:** remonte de 2px et fonce (#C93723) en .18s sur `--sortie`; à l'appui revient à 0 et l'ombre s'écrase. Focus global : anneau `jaune` de 3px décalé de 3px.
- **Discret:** même forme sur `papier` avec texte `encre`; blanc au survol.
- **Lien:** texte gras 600 souligné de 2px décalé de 5px, souligné `jaune` sur vert et `rouge` sur papier ou kraft; le souligné prend la couleur du texte au survol.

### Cards / Containers
Il n'y a pas de cartes : il y a des chemises, des feuilles et des dossiers.
- **Chemise (section):** onglet-titre kraft (`onglet-chemise`) au-dessus d'un corps kraft (`corps-chemise`) avec l'ombre dossier; variantes papier et verte (onglet `vert`, corps `vert-pale`).
- **Feuille:** papier à angles vifs, ombre papier, rembourrage 22px; variantes papillon (#F7D63E), lignée, inclinée; trombone dessiné en CSS.
- **Verdict:** bandeau `tiroir` à texte blanc 700 à 21px, accent `jaune`, arrondi 4px, posé dans une chemise.
- **Bordereau, formulaire, registre:** documents imprimés sur papier, numérotation en Courier `rouge`, filets `papier-ligne`, cases à cocher dessinées.

### Inputs / Fields
- **Style:** dans la carte chrono sombre, fond rgba(0,0,0,.18), filet 1px rgba(175,203,185,.35), arrondi 8px, rembourrage 13px 15px, texte blanc, placeholder #8DAE9A.
- **Focus:** contour `jaune` de 2px et bordure `jaune`.
- **Error:** bordure et message #F08A6F.
- **Curseurs (auto-diagnostic):** `accent-color` `rouge`, valeur en sortie à droite.

### Navigation
Une rangée d'onglets de dossiers sur `tiroir-fonce`, collante en haut. La marque « OptiAI. » (Archivo 850, largeur 118 %, point `jaune`) avec « Solutions d'automatisation » en petit dessous. Les onglets sont en kraft clair avec quatre teintes kraft alternées, abaissés de 4px au repos, remontés au survol, et l'onglet actif devient `papier`. Le bouton onglet rouge ferme la rangée. Sous 1060px : bouton « Menu » kraft, onglets empilés pleine largeur, CTA pleine largeur.

### Dossiers suspendus (signature)
Trois dossiers kraft debout sur toute la largeur du héros : dos `kraft-fonce`, devant en dégradé kraft avec ombre dossier, onglet de couleur (vert, jaune, rouge) portant une étiquette Dymo, compte en gros chiffres (850, 30px, largeur 110 %). Au chargement de la vue, chaque papier de la pile reçoit son tampon (montée d'échelle 1.6 à 1 en 200ms), vole vers la poche de son dossier en rétrécissant puis disparaît par `clip-path` (820ms sur `--sortie`, départs décalés de 280ms), le dossier tressaille de 5px et son compte s'incrémente; à la fin, les papiers reviennent tamponnés sur la pile et un bouton « Revoir le tri » apparaît. En mouvement réduit : tampon en fondu, papier pâli, aucun déplacement.

### Tampon et étiquette Dymo
- **Tampon:** cadre de 2.5px en `currentColor`, arrondi 4px, Courier Prime 700 en majuscules, incliné, `mix-blend-mode: multiply` et filtre `#encre`. Le tampon de garantie en est la version grand format (cadre 4px, titre Archivo 880 élargi).
- **Dymo:** ruban #121412, texte #F4F4EF en Archivo 700 condensé 72 %, majuscules, incliné de -1.2deg. Sert d'étiquette aux dossiers et à la façade du tiroir.

### Questions (chemises qui s'ouvrent)
Chaque question est une chemise kraft avec une languette `kraft-fonce` décalée (0, 24, 48 ou 12 %). Le chevron tourne de 45 à 225deg; à l'ouverture la hauteur se déplie en 380ms et la feuille-réponse en papier remonte de 18px en 420ms; fermeture en 240ms (cubic-bezier(0.3, 0, 0.8, 0.15)). Aucune animation en mouvement réduit.

## Do's and Don'ts

### Do:
- **Do** poser chaque section dans une chemise kraft ou papier à onglet, en alternant la position de l'onglet (gauche, centre, droite).
- **Do** réserver `rouge` à l'action principale et au sens « jamais »; un seul bouton principal par vue.
- **Do** employer les ombres `--ombre-papier` pour ce qui repose et `--ombre-dossier` pour ce qui se tient debout.
- **Do** exprimer la hiérarchie par l'axe de largeur d'Archivo (125 % pour le titre du héros, 72 à 88 % pour onglets, boutons et Dymo).
- **Do** montrer des documents réels (courriel, reçu, tableur, formulaire) composés en Courier Prime plutôt que des icônes.
- **Do** passer tout mouvement par `--sortie` (cubic-bezier(0.16, 1, 0.3, 1)) et prévoir une version sans déplacement pour prefers-reduced-motion.

### Don't:
- **Don't** construire une grille de cartes arrondies sur leurs quatre coins; aucun conteneur hors champ de saisie n'est arrondi partout.
- **Don't** revenir à l'ancienne charte marine, sarcelle et orange, ni à Plus Jakarta Sans.
- **Don't** mettre un fond blanc de page : le blanc n'existe que comme papier posé sur le tiroir.
- **Don't** employer `vert`, `jaune` ou `rouge` d'onglet hors de leur sens de tri pour décorer.
- **Don't** utiliser Courier Prime comme police d'interface ou de libellé hors des documents imprimés.
- **Don't** ajouter un second moment de mouvement fort : le tri de la pile est le seul; le reste reste calme.
