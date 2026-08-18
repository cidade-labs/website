import { defineCollection, z } from 'astro:content';

/* ============================================================
   CONTENT COLLECTIONS
   ------------------------------------------------------------
   These define the "shape" of a blog post and a project.
   To ADD A NEW BLOG POST: drop a .md file in src/content/blog/
   To ADD A NEW PROJECT:   drop a .md file in src/content/projects/
   Fill in the fields below at the top of each file (frontmatter).
   ============================================================ */

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Cidade Labs'),
    lang: z.enum(['gl', 'es', 'en']).default('en'),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // status drives the coloured pill on the card
    status: z.enum(['live', 'soon', 'idea']).default('idea'),
    // where the standalone tool lives (external link). Optional
    // while a project is still an idea.
    url: z.string().optional(),
    // data source credit, shown on the card
    source: z.string().optional(),
    order: z.number().default(99),
    lang: z.enum(['gl', 'es', 'en']).default('en'),
  }),
});

export const collections = { blog, projects };
