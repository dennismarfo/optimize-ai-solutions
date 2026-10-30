import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    // Date de mise à jour, si l'article a été revu.
    maj: z.coerce.date().optional(),
    // Profil visé : dirigeants multi-sites, bureaux professionnels, ou les deux.
    profil: z.enum(['sites', 'bureau', 'tous']).default('tous'),
    // « En bref » : 2 ou 3 phrases qui répondent tout de suite à la question du titre.
    resume: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), r: z.string() })).optional(),
  }),
});

export const collections = { blog };
