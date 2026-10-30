# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Propriétaires-dirigeants de PME du Québec (et de France en secondaire) qui sont le goulot de leur propre entreprise : plusieurs sites ou équipes, beaucoup d'administratif, peu ou pas de personnel administratif dédié. Ils traitent la paperasse le soir et la fin de semaine (questions RH, facturation manuelle, reçus envoyés en photo sur WhatsApp, accès qu'eux seuls détiennent). Segments actuels : réseaux de ressources intermédiaires et de répit, petits cabinets comptables en croissance. Segment secondaire : entreprises de services qui achètent des leads (produit Maya).

Le visiteur du site arrive souvent référé (bouche-à-oreille, réseau du mentor, publicité Meta pour Maya). Il doit comprendre en quelques secondes que ce n'est pas une agence IA de plus, puis réserver un appel découverte de 30 minutes.

## Product Purpose

Solutions d'automatisation OptiAI cartographie l'administratif qui retient le dirigeant, corrige ce qui doit l'être, puis automatise seulement ce qui en vaut la peine, avec les outils que le client a déjà. Promesse : « Moins de paperasse, plus de présence. » Succès : des heures rendues chaque semaine, des gestionnaires autonomes, une vue d'ensemble pour le dirigeant.

## Positioning

L'audit d'abord, les solutions ensuite. Le Diagnostic Présence suit une méthode visible (4 règles, 4 étapes, 6 livrables, grille de priorisation sur 30, zones de données verte/jaune/rouge pour la Loi 25) et dit publiquement ce qu'il refuse d'automatiser. Porté par Denis Kojo : douze ans de finance et d'administratif de PME en France, au Luxembourg et au Canada, dirigeant d'une PME au Ghana gérée à distance, développeur de métier.

## Operating Context

Le travail réel se passe dans les outils existants du client (Outlook, OneDrive/SharePoint, Excel, logiciels de paie et d'horaires, WhatsApp). L'audit se fait par séance de 2 h avec le dirigeant, puis 30 à 45 min de terrain avec chaque gestionnaire, puis cartographie et restitution. Le site se lit sur téléphone comme sur ordinateur.

## Capabilities and Constraints

- Site Astro statique déployé sur Vercel (projet optimize-ai-solutions), dépôt dennismarfo/optimize-ai-solutions.
- Conversion principale : réserver un appel découverte (Calendly). Conversions secondaires : l'auto-diagnostic interactif (calcul local, rien n'est envoyé) et, pour Maya, le mini-test offert.
- La démo vocale de Maya (formulaire relié au webhook n8n optiai-demo-rappel) et le calculateur /chrono doivent continuer de fonctionner tels quels.
- Prix du Diagnostic Présence non affiché sur le site (donné en appel). Garantie publiable : remboursé s'il ne trouve pas au moins 5 h par semaine récupérables.
- Capacité réelle : 2 Diagnostics par mois.
- Aucune analytique avec témoins; Vercel Web Analytics seulement.

## Brand Commitments

- Nom affiché : marque « OptiAI » avec le générique français « Solutions d'automatisation » visible; le français domine l'affichage (Charte de la langue française). Ne jamais écrire « OptiAI-Solutions » comme nom d'entreprise.
- Voix : vouvoiement sur le site, franc et concret, sans jargon technique, jamais l'IA présentée comme un remplacement. Pas de tirets cadratins dans les textes clients.
- La charte visuelle précédente (marine, sarcelle, orange, Plus Jakarta Sans) n'est plus un engagement : le visuel est à refaire (décision de Dennis, 2026-10-28).
- Ce qui ferait « encore IA » selon Dennis : les grilles de cartes et l'absence d'images réelles.

## Evidence on Hand

- Portrait réel de Denis Kojo : `public/dennis.webp`.
- Contenu validé des pages (accueil, Diagnostic Présence, méthode, solutions, Maya, à propos, auto-diagnostic) et fiche product-marketing.
- Ordres de grandeur relevés sur le terrain, présentés comme estimations du dirigeant : 5 à 8 h/semaine de questions RH, 1 h à 1 h 30/semaine de facturation manuelle.
- Chiffre sourcé : adjointe administrative au Québec, 55 à 60 k$/an chargé (médiane 26 $/h, Guichet-Emplois).
- Absences à ne pas inventer : aucun témoignage, aucun logo client, aucune étude de cas publiable, aucun résultat chiffré obtenu chez un client.

## Product Principles

1. Le réel avant l'idéal : montrer l'administratif tel qu'il se passe, pas une promesse abstraite.
2. Corriger avant d'automatiser, et automatiser avant d'ajouter de l'IA.
3. Dire ce qu'on refuse de faire : la franchise est l'argument.
4. Se brancher sur l'existant plutôt qu'ajouter un outil.
5. Les données restent chez le client.

## Motion

Un moment signature fort qui démontre la méthode; le reste de la page reste calme. Respect de prefers-reduced-motion.
