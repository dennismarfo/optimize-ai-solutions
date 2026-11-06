// Vidéo « Comment on travaille » : une seule source pour le lecteur, la transcription,
// les données structurées et le plan du site. Les textes reprennent les sous-titres.
export const VIDEO = {
  page: '/comment-on-travaille',
  mp4: '/video/optiai-comment-on-travaille.mp4',
  vtt: '/video/optiai-comment-on-travaille.fr-CA.vtt',
  affiche: '/video/optiai-comment-on-travaille.webp',
  nom: "Comment se déroule le Diagnostic Présence, l'audit administratif d'OptiAI",
  description: "En 1 min 21 s, Denis Kojo présente les quatre étapes du Diagnostic Présence (Démarrage, Terrain, Cartographie, Restitution), les trois engagements d'OptiAI et la garantie de remboursement.",
  datePublication: '2026-11-06T09:00:00-05:00',
  dureeIso: 'PT1M21S',
  dureeSecondes: 81,
  mention: 'Voix de synthèse créée à partir de celle de Denis Kojo.',
};

export const CHAPITRES = [
  { t: 0, temps: '0:00', titre: 'Ce qui vient après la réservation', texte: "Avant de réserver un appel avec un inconnu, vous voulez savoir ce qui vient après. Alors je vous montre comment on travaille, étape par étape." },
  { t: 8, temps: '0:08', titre: "Qu'est-ce que le Diagnostic Présence ?", texte: "Je suis Denis Kojo. Avant d’automatiser quoi que ce soit, on cartographie le réel. C’est le Diagnostic Présence : quatre étapes, en trois à quatre semaines." },
  { t: 18, temps: '0:18', titre: 'Étape 1 : Démarrage', texte: "D’abord, deux heures avec vous : vos rôles, vos outils, et les irritants de la semaine passée, exemples à l’appui." },
  { t: 25, temps: '0:25', titre: 'Étape 2 : Terrain', texte: "Ensuite, 30 à 45 minutes avec chaque gestionnaire, parce que le processus prévu et le processus réel ne sont presque jamais les mêmes. Dès la deuxième semaine, on corrige déjà une chose simple." },
  { t: 36, temps: '0:36', titre: 'Étape 3 : Cartographie', texte: "Puis chaque irritant reçoit une note sur 30, selon six critères. Cette note dit s’il faut réorganiser, automatiser ou ajouter de l’IA. Vos données sont classées en zones verte, jaune ou rouge, Loi 25 comprise." },
  { t: 49, temps: '0:49', titre: 'Étape 4 : Restitution', texte: "Enfin, vous recevez six livrables et une feuille de route à 90 jours ou moins. Les livrables vous restent, et c’est vous qui décidez s’il y a un pilote." },
  { t: 57, temps: '0:57', titre: 'Les trois engagements', texte: "Nos règles ne changent pas : on ne remplace personne, rien ne va en production sans test en parallèle, et vos données restent chez vous." },
  { t: 65, temps: '1:05', titre: 'La garantie de remboursement', texte: "Si le Diagnostic ne trouve pas au moins cinq heures par semaine à récupérer, il vous est remboursé en entier." },
  { t: 72, temps: '1:12', titre: 'Comment commencer', texte: "Tout commence par un appel de 30 minutes. Moins de paperasse, plus de présence." },
];

export const TRANSCRIPTION = CHAPITRES.map((c) => c.texte).join(' ');

// `complet` ajoute les chapitres et la transcription : réservé à la page de la vidéo.
export function videoJsonld(site: URL | string, complet = false) {
  const base = String(site).replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${base}${VIDEO.page}#video`,
    name: VIDEO.nom,
    description: VIDEO.description,
    thumbnailUrl: [`${base}${VIDEO.affiche}`],
    uploadDate: VIDEO.datePublication,
    duration: VIDEO.dureeIso,
    contentUrl: `${base}${VIDEO.mp4}`,
    inLanguage: 'fr-CA',
    creator: { '@type': 'Person', '@id': `${base}/a-propos#denis`, name: 'Denis Kojo', url: `${base}/a-propos` },
    publisher: { '@id': `${base}/#entreprise` },
    ...(complet && {
      transcript: TRANSCRIPTION,
      hasPart: CHAPITRES.map((c, i) => ({
        '@type': 'Clip',
        name: c.titre,
        startOffset: c.t,
        endOffset: CHAPITRES[i + 1]?.t ?? VIDEO.dureeSecondes,
        url: `${base}${VIDEO.page}?t=${c.t}`,
      })),
    }),
  };
}
