import { defineCollection, z } from 'astro:content'

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
})

const materials = defineCollection({
  type: 'content',
  schema: productSchema,
})

const equipment = defineCollection({
  type: 'content',
  schema: productSchema,
})

const works = defineCollection({
  type: 'content',
  schema: productSchema,
})

export const collections = {
  materials,
  equipment,
  works,
}
