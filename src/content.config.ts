import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productSchema = z.object({
  title: z.string(),
  h1: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  locale: z.enum(['uk', 'ru']),
  category: z.string().optional(),
  slug: z.string(),
  conceptId: z.string(),
  oldUrl: z.string(),
  priceFrom: z.number().optional(),
  image: z.string().optional(),
  gallery: z.array(z.string()).optional(),
});

const materials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materials' }),
  schema: productSchema,
});

const equipment = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/equipment' }),
  schema: productSchema,
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: productSchema,
});

export const collections = {
  materials,
  equipment,
  works,
};
