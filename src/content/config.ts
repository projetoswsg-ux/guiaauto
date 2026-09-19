import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Redação'),
    image: z.string().optional(),
    category: z.string().default('Geral'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { noticias };
