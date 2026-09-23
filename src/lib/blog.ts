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

export type DateGranularity = "year" | "month" | "day";

export interface DateGroup {
  year: number;
  month?: number;
  day?: number;
  posts: BlogPost[];
}

const dateGroupKey = (post: BlogPost, granularity: DateGranularity) => {
  const date = post.data.publishDate;
  const parts = [date.getFullYear()];

  if (granularity !== "year") parts.push(date.getMonth() + 1);
  if (granularity === "day") parts.push(date.getDate());

  return parts.join("-");
};

// Groups posts by their publish date at the given granularity (e.g. every
// post published in the same year+month for "month"), each group sorted
// newest-first.
export const getDateGroups = (
  posts: BlogPost[],
  granularity: DateGranularity,
): DateGroup[] => {
  const groups = new Map<string, BlogPost[]>();

  for (const post of posts) {
    const key = dateGroupKey(post, granularity);
    groups.set(key, [...(groups.get(key) ?? []), post]);
  }

  return Array.from(groups.entries()).map(([key, groupPosts]) => {
    const [year, month, day] = key.split("-").map(Number);

    return { year, month, day, posts: sortPostsByDate(groupPosts) };
  });
};

export const getPathLang = (lang: Lang | undefined) => lang ?? defaultLang;

export const getLangParams = (lang: Lang) => ({
  lang: langParam(lang),
});
