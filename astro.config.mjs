import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { VIDEO } from './src/data/video-process.ts';

const site = 'https://www.optiai-solutions.com';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({
    filter: (page) => !page.includes('/merci'),
    serialize(item) {
      if (item.url.replace(/\/$/, '') === site + VIDEO.page) {
        item.video = [{
          thumbnail_loc: site + VIDEO.affiche,
          title: VIDEO.nom,
          description: VIDEO.description,
          content_loc: site + VIDEO.mp4,
          duration: VIDEO.dureeSecondes,
          publication_date: VIDEO.datePublication,
        }];
      }
      return item;
    },
  })],
});
