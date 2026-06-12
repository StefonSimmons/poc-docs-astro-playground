import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const productDocumentation = defineCollection({
  loader: glob({ base: './src/content', pattern: '**/*.md' })
//   schema: z.object({
//     data: z.object({
//       fm: z.object({
//         title: z.string(),
//       }),
//       content: z.string(),
//     }),
    // description: z.string(),
    // pubDate: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
//   }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { productDocumentation };