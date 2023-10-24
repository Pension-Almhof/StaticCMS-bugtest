import { defineCollection, z } from "astro:content";

const homepageHighlightCollection = defineCollection({
  schema: ({ image }) => z.object({
    id: z.number(),
    name: z.string(),
    image: image(),
  }),
});


export const collections = {
  homepage_highlights: homepageHighlightCollection,
};