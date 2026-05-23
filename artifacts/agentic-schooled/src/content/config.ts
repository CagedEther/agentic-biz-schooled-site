import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    path: z.string(),
    order: z.number(),
    description: z.string(),
    heroImage: z.string().optional(),
    hideFromNav: z.boolean().optional(),
  }),
});

export const collections = { pages };
