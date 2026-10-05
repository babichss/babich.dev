import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      // Only these pages are indexable; every other page is noindex, and a
      // noindexed URL here is a Search Console error.
      filter: (page) =>
        ["/", "/work/", "/cv/"].includes(new URL(page).pathname),
    }),
  ],
  output: "static",
  site: "https://www.babich.dev",
  build: {
    inlineStylesheets: "never",
  },
  prefetch: true,
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  markdown: {
    shikiConfig: {
      // Token colors stay CSS variables only; global.css picks light or dark
      // from the page's color-scheme.
      defaultColor: false,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
