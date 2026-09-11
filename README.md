# optiai-solutions.com

Site vitrine d'OptiAI-Solutions (Denis Kojo) : pages HTML statiques, sans framework.

- `index.html` : accueil, formulaire de la ligne démo (webhook n8n `optiai-demo-rappel`, rappel par Maya).
- `chrono.html` : calculateur du coût du délai de réponse (webhook n8n `optiai-chrono-calc`).
- `confidentialite.html`, `merci.html` : pages annexes.

Déploiement : chaque push sur `main` est publié en production par Vercel (projet `optimize-ai-solutions`).
Les réglages de build sont dans `vercel.json`. L'ancienne version React/Vite reste dans l'historique Git.
