import type { CollectionEntry } from "astro:content";
import {
  defaultLang,
  getAlternateLang,
  langParam,
  languages,
  type Lang,
} from "src/lib/i18n";

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

export interface BlogLangGroup {
  lang: Lang;
  posts: BlogPost[];
  altPosts: BlogPost[];
}

// Each language's posts paired with its counterpart language's posts (its
// "alt" set), needed at every archive/slug getStaticPaths to decide whether
// a page's hreflang alternate was ever built.
export const getBlogLangGroups = (posts: BlogPost[]): BlogLangGroup[] => {
  const postsByLang = getLangPostGroups(posts);

  return postsByLang.map(({ lang, posts: langPosts }) => ({
    lang,
    posts: langPosts,
    altPosts:
      postsByLang.find((group) => group.lang === getAlternateLang(lang))
        ?.posts ?? [],
  }));
};

export const padDatePart = (value: number) => value.toString().padStart(2, "0");

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

// Whether `posts` (expected: one language's posts) has an entry for the
// given date, at whatever granularity of year/month/day is given — used to
// decide if an archive page's alternate-language counterpart was ever built.
export const hasPostInPeriod = (
  posts: BlogPost[],
  year: number,
  month?: number,
  day?: number,
) =>
  posts.some((post) => {
    const date = post.data.publishDate;

    if (date.getFullYear() !== year) return false;
    if (month !== undefined && date.getMonth() + 1 !== month) return false;
    if (day !== undefined && date.getDate() !== day) return false;

    return true;
  });

export const hasPostWithSlug = (posts: BlogPost[], urlSlug: string) =>
  posts.some((post) => post.data.urlSlug === urlSlug);

export const getPathLang = (lang: Lang | undefined) => lang ?? defaultLang;

export const getLangParams = (lang: Lang) => ({
  lang: langParam(lang),
});
