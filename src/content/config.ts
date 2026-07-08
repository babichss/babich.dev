import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    page: z.enum([
      "home",
      "interviews",
      "personal-interview",
      "proposal",
      "youtube",
    ]),
    lang: z.enum(["uk", "en"]).default("uk"),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    urlSlug: z.string(),
    lang: z.enum(["uk", "en"]).default("uk"),
  }),
});

export const collections = { blog, pages };
