import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      // Mirrors every noindex rule; a noindexed URL here is a Search Console error.
      filter: (page) => {
        const { pathname } = new URL(page);
        return !(
          pathname.startsWith("/uk/") ||
          pathname.startsWith("/interviews/") ||
          pathname.startsWith("/youtube/") ||
          /^\/blog\/\d{4}\//.test(pathname)
        );
      },
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
