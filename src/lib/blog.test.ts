import { describe, expect, it } from "vitest";
import {
  getBlogLangGroups,
  getDateGroups,
  getLangParams,
  getLangPostGroups,
  getPathLang,
  getPostsForLang,
  padDatePart,
  sortPostsByDate,
  type BlogPost,
} from "src/lib/blog";

const post = (
  lang: BlogPost["data"]["lang"],
  publishDate: string,
  urlSlug = publishDate,
): BlogPost =>
  ({
    id: `${lang}/${urlSlug}`,
    collection: "blog",
    data: {
      title: urlSlug,
      description: "",
      publishDate: new Date(publishDate),
      urlSlug,
      lang,
    },
  }) as unknown as BlogPost;

describe("sortPostsByDate", () => {
  it("orders newest first", () => {
    const posts = [
      post("uk", "2024-01-01"),
      post("uk", "2024-03-01"),
      post("uk", "2024-02-01"),
    ];

    expect(sortPostsByDate(posts).map((p) => p.data.urlSlug)).toEqual([
      "2024-03-01",
      "2024-02-01",
      "2024-01-01",
    ]);
  });
});

describe("getPostsForLang", () => {
  it("keeps only the requested language", () => {
    const posts = [post("uk", "2024-01-01"), post("en", "2024-01-02")];

    expect(getPostsForLang(posts, "en")).toEqual([posts[1]]);
  });
});

describe("getLangPostGroups", () => {
  it("groups posts under every configured language, uk before en", () => {
    const posts = [post("en", "2024-01-02"), post("uk", "2024-01-01")];

    expect(getLangPostGroups(posts)).toEqual([
      { lang: "uk", posts: [posts[1]] },
      { lang: "en", posts: [posts[0]] },
    ]);
  });
});

describe("getDateGroups", () => {
  it("groups by year+month, newest group first when input is pre-sorted", () => {
    const posts = sortPostsByDate([
      post("uk", "2024-01-15"),
      post("uk", "2024-03-05"),
      post("uk", "2024-03-20"),
    ]);

    const groups = getDateGroups(posts, "month");

    expect(groups).toEqual([
      { year: 2024, month: 3, day: undefined, posts: [posts[0], posts[1]] },
      { year: 2024, month: 1, day: undefined, posts: [posts[2]] },
    ]);
  });

  it("groups by year alone, ignoring month/day", () => {
    const posts = [post("uk", "2023-06-01"), post("uk", "2023-12-01")];

    const groups = getDateGroups(posts, "year");

    expect(groups).toEqual([
      {
        year: 2023,
        month: undefined,
        day: undefined,
        posts: sortPostsByDate([...posts]),
      },
    ]);
  });

  it("groups by year+month+day", () => {
    const posts = [post("uk", "2024-05-01"), post("uk", "2024-05-02")];

    const groups = getDateGroups(posts, "day");

    expect(groups).toEqual([
      { year: 2024, month: 5, day: 1, posts: [posts[0]] },
      { year: 2024, month: 5, day: 2, posts: [posts[1]] },
    ]);
  });
});

describe("getBlogLangGroups", () => {
  it("pairs each language's posts with its counterpart's as altPosts", () => {
    const posts = [post("en", "2024-01-02"), post("uk", "2024-01-01")];

    expect(getBlogLangGroups(posts)).toEqual([
      { lang: "uk", posts: [posts[1]], altPosts: [posts[0]] },
      { lang: "en", posts: [posts[0]], altPosts: [posts[1]] },
    ]);
  });

  it("gives an empty altPosts when the counterpart language has no posts", () => {
    const posts = [post("uk", "2024-01-01")];

    expect(getBlogLangGroups(posts)).toEqual([
      { lang: "uk", posts: [posts[0]], altPosts: [] },
      { lang: "en", posts: [], altPosts: [posts[0]] },
    ]);
  });
});

describe("padDatePart", () => {
  it("pads a single digit with a leading zero", () => {
    expect(padDatePart(5)).toBe("05");
  });

  it("leaves a two-digit value unchanged", () => {
    expect(padDatePart(12)).toBe("12");
  });
});

describe("getPathLang", () => {
  it("falls back to the default language when undefined", () => {
    expect(getPathLang(undefined)).toBe("uk");
  });

  it("passes through a given language", () => {
    expect(getPathLang("en")).toBe("en");
  });
});

describe("getLangParams", () => {
  it("omits the param for the default language", () => {
    expect(getLangParams("uk")).toEqual({ lang: undefined });
  });

  it("carries the param for a non-default language", () => {
    expect(getLangParams("en")).toEqual({ lang: "en" });
  });
});
