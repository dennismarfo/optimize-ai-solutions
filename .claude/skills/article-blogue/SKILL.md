---
name: article-blogue
description: Produit un article du blogue d'OptiAI optimisé pour Google et les assistants IA, de l'entrevue terrain avec Dennis jusqu'à l'aperçu Vercel, et le publie seulement sur son accord. À utiliser quand Dennis dit « écris un article », « prochain article », « /article-blogue [sujet] », ou demande de terminer un brouillon du blogue.
---

# Article de blogue OptiAI

Dépôt : la racine de ce projet (site Astro, production = `main` sur Vercel).
Stratégie et sujets : `docs/seo/plan-editorial.md`.

Rien n'est publié sans un « publie » explicite de Dennis.

## 1. Choisir le sujet
- Si Dennis donne un sujet, prenez-le, et trouvez son profil et son pilier dans le plan éditorial (ajoutez-le au tableau s'il n'y est pas).
- Sinon, prenez le premier sujet « à écrire » ou « brouillon » du tableau. L'ordre alterne déjà les profils.
- Annoncez en une ligne : le sujet, le profil et le pilier.

## 2. Entrevue terrain (dans cette conversation, pas dans un sous-agent)
Posez à Dennis 3 ou 4 questions courtes, toutes dans un seul message, adaptées au sujet. Par exemple :
1. Une situation réelle où vous avez vu ce problème : qui, quoi, combien de temps, par quel canal ? On anonymise, sans nom.
2. Une phrase qu'un dirigeant ou un employé vous a dite à ce sujet.
3. Ce que vous avez corrigé ou recommandé, et ce qu'il ne faut surtout pas faire.
4. Un ordre de grandeur estimé par le dirigeant (temps, fréquence), s'il y en a un.

Attendez ses réponses. S'il répond « je ne sais pas » sur un point, la section correspondante reste générale, sans rien inventer.

Pour un brouillon existant (comme `cartographier-administratif-pme.md`), posez les questions qui permettent de remplir ses `[À ÉCRIRE]`.

## 3. Rédaction
Créez une branche à partir de `main` à jour :

```bash
git checkout main && git pull && git checkout -b article/<slug>
```

Puis lancez le sous-agent `redacteur-blogue` avec :
- le sujet, le profil et le pilier ;
- les réponses de Dennis, mot pour mot ;
- les articles déjà publiés, pour les liens internes ;
- le chemin du fichier à créer ou à compléter.

Quand il a fini, relisez vous-même l'article en entier. Relancez `node scripts/verifier-article.mjs <fichier>` : il ne doit rester aucun ✗. Vérifiez à la main chaque !, chaque fait sourcé et chaque `[À COMPLÉTER]`.

S'il reste des `[À COMPLÉTER]`, posez ces questions à Dennis avant l'aperçu.

## 4. Aperçu
1. Sur la branche `article/<slug>` seulement, passez `draft: false`.
2. Lancez `npm run build`.
3. Vérifiez dans `dist/blog/<slug>.html` :
   - le JSON-LD (`BlogPosting` et `FAQPage`) ;
   - l'encadré « En bref » ;
   - la FAQ.
4. Faites un commit, puis `git push -u origin article/<slug>`.
5. Récupérez l'adresse d'aperçu Vercel du déploiement de la branche (outil Vercel `list_deployments`, projet `optimize-ai-solutions`, équipe `dennismarfos-projects`). Attendez qu'il soit READY.
6. Vérifiez l'article sur ordinateur et à 375 px de large : aucun débordement horizontal.
7. Donnez à Dennis :
   - le lien d'aperçu ;
   - le titre et la description, tels qu'ils apparaîtront dans Google ;
   - le nombre de mots ;
   - les sources citées.

   Demandez-lui ensuite s'il publie ou s'il veut des changements.

## 5. Publication (seulement après « publie »)
1. Fusionnez la branche dans `main` (`git checkout main && git merge --ff-only article/<slug>`, sinon un merge normal), puis faites un push.
2. Dans la même mise en ligne :
   - **`public/llms.txt`** : ajoutez une ligne sous « Articles », au format `- [Titre](https://www.optiai-solutions.com/blog/<slug>) : la réponse en une phrase.`
   - **`docs/seo/plan-editorial.md`** : mettez le sujet à « publié AAAA-MM-JJ ».
3. Vérifiez que `https://www.optiai-solutions.com/blog/<slug>` répond, une fois le déploiement de production READY.
4. Remettez à Dennis :
   - **un post LinkedIn prêt à copier.** De 120 à 200 mots, au vouvoiement, sans tiret cadratin, sans emoji en série et sans mot-clic en rafale (2 au plus). Il ouvre sur la scène de terrain et finit sur le lien de l'article.
   - **le rappel Search Console** : Inspection de l'URL, puis Demander une indexation, pour l'adresse de l'article.

## Mettre à jour un article publié
Même démarche, sur une branche `article/<slug>-maj`. Ajoutez `maj: AAAA-MM-JJ` dans l'en-tête sans changer `date`. Une mise à jour réelle (fait vérifié, section ajoutée) améliore le classement. Un simple changement de date, non.
