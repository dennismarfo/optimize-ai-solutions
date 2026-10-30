#!/usr/bin/env node
// Vérifie un article du blogue contre les règles de rédaction d'OptiAI.
// Usage : node scripts/verifier-article.mjs src/content/blog/mon-article.md
// Sort en erreur (code 1) s'il reste un problème bloquant. Les avertissements sont à relire à la main.
import { readFileSync } from 'node:fs';

const fichier = process.argv[2];
if (!fichier) {
  console.error('Usage : node scripts/verifier-article.mjs <fichier.md>');
  process.exit(2);
}
const brut = readFileSync(fichier, 'utf8');
const m = brut.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
if (!m) {
  console.error(`${fichier} : pas d'en-tête (frontmatter) valide.`);
  process.exit(1);
}
const [, entete, corps] = m;
const texte = corps.replace(/<!--[\s\S]*?-->/g, '');
const tout = `${entete}\n${texte}`;

const erreurs = [];
const avertissements = [];
const champ = (nom) => {
  const l = entete.match(new RegExp(`^${nom}:\\s*(.*)$`, 'm'));
  return l ? l[1].trim().replace(/^["']|["']$/g, '') : undefined;
};
const ligneDe = (index) => tout.slice(0, index).split('\n').length;
const chercher = (re, message, liste = erreurs) => {
  for (const r of tout.matchAll(re)) liste.push(`${message} : « ${r[0].trim()} » (ligne ~${ligneDe(r.index)})`);
};

// Règles de la marque et du ton.
chercher(/—/g, 'Tiret cadratin interdit');
chercher(/OptiAI-Solutions/gi, 'Écrire « OptiAI » ou « Solutions d\'automatisation OptiAI »');
chercher(/\b(workflows?|agents? (?:IA|d'IA)|LLMs?|prompts?|chatbots?)\b/gi, 'Jargon à remplacer');
chercher(/remplac\w*\s+(?:un|une|vos|votre|des|les)?\s*(?:employ|adjoint|personne|poste|humain)\w*/gi, "Ne jamais présenter l'IA comme un remplacement");
chercher(/\b(?:tu|toi|ton|ta|tes|t'as)\b/gi, 'Tutoiement : le site vouvoie');
chercher(/Diagnostic[^.\n]{0,80}\d[\d\s]*\s?\$|\d[\d\s]*\s?\$[^.\n]{0,80}Diagnostic/gi, 'Le prix du Diagnostic ne doit pas apparaître');
chercher(/\[À (?:ÉCRIRE|COMPLÉTER)[^\]]*\]/g, 'Passage encore à écrire');

// Points à confirmer à la main.
chercher(/\b(?:M\.|Mme|Madame|Monsieur)\s+[A-ZÉ]\w+/g, 'Nom de personne ? (aucun nom permis)', avertissements);
chercher(/\b\d{1,3}\s?%/g, "Pourcentage : est-il sourcé ? (aucun résultat inventé)", avertissements);
chercher(/(?:santé|médica\w*|médecin|patient\w*)/gi, "Donnée de santé ? Aucun cas réel permis", avertissements);
chercher(/\bagents?\b/gi, 'Mot « agent » : jargon si c\'est de l\'IA', avertissements);

// En-tête.
const titre = champ('title') ?? '';
const description = champ('description') ?? '';
if (!titre) erreurs.push('title manquant');
else if (titre.length > 65) avertissements.push(`title de ${titre.length} caractères (65 max conseillé pour Google)`);
if (description.length < 120 || description.length > 160) erreurs.push(`description de ${description.length} caractères (120 à 160)`);
if (!champ('resume')) erreurs.push('resume (« En bref ») manquant');
if (!/^faq:/m.test(entete)) erreurs.push('faq manquante (3 à 5 questions)');
else {
  const n = (entete.match(/^\s*-\s*q:/gm) || []).length;
  if (n < 3 || n > 5) avertissements.push(`${n} questions dans la FAQ (3 à 5 conseillées)`);
}
if (!/^profil:\s*(sites|bureau|tous)\s*$/m.test(entete)) avertissements.push('profil absent (sites, bureau ou tous)');

// Corps.
const liensInternes = new Set([...texte.matchAll(/\]\((\/[^)\s]*)\)/g)].map((r) => r[1]));
if (liensInternes.size < 3) erreurs.push(`${liensInternes.size} lien(s) interne(s) distinct(s) (3 minimum)`);
const mots = texte.replace(/[#>*_`[\]()|-]/g, ' ').split(/\s+/).filter(Boolean).length;
if (mots < 900 || mots > 1500) avertissements.push(`${mots} mots dans le corps (900 à 1 500 conseillés)`);
const h2 = (texte.match(/^## /gm) || []).length;
if (h2 < 3) avertissements.push(`${h2} intertitre(s) H2 (au moins 3 conseillés)`);

console.log(`\n${fichier}`);
console.log(`${mots} mots · ${h2} H2 · ${liensInternes.size} liens internes\n`);
for (const e of erreurs) console.log(`  ✗ ${e}`);
for (const a of avertissements) console.log(`  ! ${a}`);
if (!erreurs.length && !avertissements.length) console.log('  ✓ Aucun problème trouvé.');
console.log(erreurs.length ? `\n${erreurs.length} problème(s) à corriger.\n` : '\nAucun problème bloquant.\n');
process.exit(erreurs.length ? 1 : 0);
