import type { CollectionEntry } from "astro:content";
import { defaultLang, langParam, languages, type Lang } from "./i18n";

export type BlogPost = CollectionEntry<"blog">;

export const sortPostsByDate = (posts: BlogPost[]) =>
  posts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );

export const getPostsForLang = (posts: BlogPost[], lang: Lang) =>
  posts.filter((post) => post.data.lang === lang);

export const getLangPostGroups = (posts: BlogPost[]) =>
  languages.map((lang) => ({
    lang,
    posts: getPostsForLang(posts, lang),
  }));

export const getPathLang = (lang: Lang | undefined) => lang ?? defaultLang;

export const getLangParams = (lang: Lang) => ({
  lang: langParam(lang),
});
