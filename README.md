# optiai-solutions.com

Site de Solutions d'automatisation OptiAI (Denis Kojo), construit avec [Astro](https://astro.build) et déployé sur Vercel.

## Commandes

- `npm install` puis `npm run dev` : site local sur http://localhost:4321
- `npm run build` : génère le site statique dans `dist/`

## Où modifier quoi

- `src/pages/` : une page = un fichier (`index.astro`, `diagnostic-presence.astro`, `methode.astro`, `solutions/`, `auto-diagnostic.astro`, `a-propos.astro`...)
- `src/content/blog/` : un article = un fichier Markdown. Mettre `draft: false` pour le publier.
- `src/components/` : en-tête, pied de page, appel à l'action final, démo Maya
- `src/config.ts` : lien de réservation Calendly, courriel, nom légal
- `src/styles/global.css` : la charte (navy, teal, orange réservé aux appels à l'action)
- `public/chrono.html` : calculateur du délai de réponse (webhook n8n `optiai-chrono-calc`), servi tel quel sur /chrono

La démo Maya (webhook n8n `optiai-demo-rappel`) est dans `src/components/MayaDemo.astro`.

Déploiement : chaque push sur `main` est publié en production par Vercel. Les autres branches donnent un aperçu.
