import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
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
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
