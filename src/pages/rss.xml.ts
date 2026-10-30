import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context: { site: URL }) {
  const articles = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Blogue OptiAI',
    description: "L'administratif des PME, sans jargon.",
    site: context.site,
    items: articles.map((a) => ({ title: a.data.title, description: a.data.description, pubDate: a.data.date, link: `/blog/${a.id}` })),
  });
}
