import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const noticias = await getCollection('noticias');
  return rss({
    title: 'NotíciasJá',
    description: 'As últimas notícias do Brasil e do mundo',
    site: context.site,
    items: noticias.map((noticia) => ({
      title: noticia.data.title,
      pubDate: noticia.data.pubDate,
      description: noticia.data.description,
      link: `/noticia/${noticia.slug}/`,
    })),
  });
}
