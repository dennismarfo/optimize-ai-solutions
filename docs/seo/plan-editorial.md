# Plan éditorial et stratégie de référencement (SEO et IA)

But : que Google, Bing et les assistants IA (ChatGPT, Perplexity, Gemini, Claude) trouvent OptiAI et le citent quand un dirigeant de PME ou un petit cabinet du Québec pose une question sur son administratif.

Ce fichier est tenu à jour par le skill `/article-blogue`. Un sujet passe à « publié » avec sa date et son adresse.

---

## 1. Ce qui fait citer un site par Google et par une IA

1. **Répondre tout de suite.** Chaque article ouvre sur un « En bref » de 2 ou 3 phrases qui répondent à la question du titre. Chaque H2 commence par une réponse complète de 40 à 80 mots, que l'IA peut reprendre telle quelle.
2. **L'expérience vécue.** Ce qu'on a vu sur le terrain, une phrase entendue, ce qu'on a corrigé. C'est ce que personne d'autre ne peut écrire, et ce que Google (critères E-E-A-T) et les IA valorisent. Rien n'est inventé : pas de client nommé, pas de chiffre de résultat.
3. **Des faits sourcés.** Les règles (Loi 25, Revenu Québec, ARC, CNESST) renvoient à la source officielle.
4. **De la structure.** Des H2 formulés comme des questions, des listes pour les démarches, un tableau quand on compare, une FAQ de 3 à 5 questions (balisée en `FAQPage`).
5. **Des liens internes.** Chaque article renvoie vers `/auto-diagnostic`, `/diagnostic-presence` ou `/methode`, vers son article pilier et vers un article voisin.
6. **La constance.** Un article toutes les 2 semaines, tenu dans la durée, vaut mieux que dix d'un coup.

Déjà en place sur le site :
- `robots.txt` ouvert aux robots des IA ;
- `llms.txt` ;
- schéma de l'entreprise (`ProfessionalService` et fondateur) sur toutes les pages ;
- `FAQPage` sur l'accueil ;
- `BlogPosting` et `FAQPage` sur les articles ;
- sitemap et flux RSS.

## 2. Piliers

| Pilier | Profil | Article | État |
|---|---|---|---|
| A | tous | Cartographier l'administratif d'une PME : par où commencer | publié 2026-10-30 |
| B | bureau | Organiser son cabinet avant d'embaucher ses premiers employés | à écrire |

Chaque sujet ci-dessous renvoie à son pilier.

## 3. Sujets, dans l'ordre (alternance des profils)

| # | Sujet (question réelle) | Profil | Pilier | État |
|---|---|---|---|---|
| 1 | Cartographier l'administratif d'une PME : par où commencer ? | tous | A | publié 2026-10-30 (/blog/cartographier-administratif-pme) |
| 2 | Comment relancer les documents des clients sans y passer ses soirées ? | bureau | B | à écrire |
| 3 | Comment arrêter de répondre aux mêmes questions RH de vos gestionnaires ? | sites | A | à écrire |
| 4 | Organiser son cabinet avant d'embaucher ses premiers employés | bureau | B | à écrire |
| 5 | Loi 25 : quelles données d'employés pouvez-vous mettre dans un outil d'IA ? | sites | A | à écrire |
| 6 | Comment écrire un guide d'accueil pour votre premier employé ? | bureau | B | à écrire |
| 7 | Reçus envoyés par WhatsApp : comment les traiter sans y passer le vendredi soir ? | sites | A | à écrire |
| 8 | Feuillets et pièces des clients : comment les classer, et ce qu'on ne met jamais dans une IA (NAS) | bureau | B | à écrire |
| 9 | Comment déléguer les accès sans tout donner à tout le monde ? | sites | A | à écrire |
| 10 | Microsoft 365 dans un petit cabinet : ce qui est déjà inclus et sous-utilisé | bureau | B | à écrire |
| 11 | Facturation manuelle entre plusieurs sites : par où commencer ? | sites | A | à écrire |
| 12 | Trop petit pour un logiciel de gestion de cabinet : quelles options ? | bureau | B | à écrire |
| 13 | Documenter ses processus quand tout est dans sa tête | bureau | B | à écrire |
| 14 | Combien coûte vraiment une adjointe administrative au Québec ? (Guichet-Emplois, déjà sourcé) | sites | A | à écrire |

Le sujet 14 ne doit jamais laisser entendre qu'on remplace l'adjointe : il sert à chiffrer le temps que le dirigeant fait à sa place.

## 4. Hors du site : ce que Dennis fait lui-même

Ces actions comptent autant que les articles. Une IA cite une entreprise quand plusieurs sources indépendantes confirment qu'elle existe.

- [x] **Google Search Console** : ajouter le domaine `optiai-solutions.com` (vérification par enregistrement TXT dans le DNS Vercel), soumettre `https://www.optiai-solutions.com/sitemap-index.xml`.
- [x] **Bing Webmaster Tools** : importer le site depuis Search Console. ChatGPT s'appuie en grande partie sur l'index de Bing.
- [x] **Google Business Profile** (en validation au 2026-10-30) : entreprise de services sans adresse publique, zone desservie Québec, même nom et même description que le site.
- [ ] **LinkedIn** :
  - une page entreprise « Solutions d'automatisation OptiAI », reliée au site ;
  - un profil de Denis Kojo qui renvoie au site ;
  - mettre l'adresse du profil dans `LINKEDIN` (`src/config.ts`) : elle sera reprise dans les données structurées.
- [ ] **Répertoires et réseaux québécois** : Index Québec, chambre de commerce locale, regroupements de RI et de répit, associations de comptables et de fiscalistes.
- [ ] **Diffusion de chaque article** : un post LinkedIn (rédigé par le skill), puis l'indexation demandée dans Search Console (Inspection de l'URL, Demander une indexation).
- [ ] **Un ou deux articles invités par trimestre**, dans une publication lue par les dirigeants de PME ou les comptables.

## 5. Suivi mensuel (à commencer 1 à 2 mois après le premier article)

1. **Search Console** : impressions, clics, requêtes qui amènent des visiteurs. Si une requête revient sans article dédié, elle devient un nouveau sujet.
2. **Vercel Web Analytics** : visites du blogue, passages vers `/auto-diagnostic` et vers l'appel.
3. **Test des IA** : poser ces questions à ChatGPT, Perplexity et Gemini, et noter si OptiAI apparaît ou est cité.
   - « Qui peut m'aider à alléger l'administratif de ma PME au Québec ? »
   - « Comment organiser un petit cabinet comptable avant d'embaucher ? »
   - « Loi 25 : peut-on mettre des données d'employés dans ChatGPT ? »
   - « Audit administratif PME Québec »
   - « Comment arrêter de répondre aux questions RH de mes gestionnaires ? »

| Mois | Search Console (impressions / clics) | IA qui citent OptiAI | Notes |
|---|---|---|---|
| | | | |
