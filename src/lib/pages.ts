import { getCollection, render, type CollectionEntry } from "astro:content";
import type { Lang } from "src/lib/i18n";

type PageKey = CollectionEntry<"pages">["data"]["page"];

export const getPage = async (lang: Lang, key: PageKey) => {
  const page = (await getCollection("pages")).find(
    (entry) => entry.data.lang === lang && entry.data.page === key,
  );

  if (!page) {
    throw new Error(`Missing ${key} copy for ${lang}`);
  }

  return render(page);
};
