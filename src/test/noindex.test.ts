import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it, vi } from "vitest";
import StubPageContent from "src/test/StubPageContent.astro";

vi.mock("astro:content", () => ({
  getCollection: vi.fn(async (collection: string) =>
    collection === "blog"
      ? []
      : [
          { data: { page: "interviews", lang: "uk" } },
          { data: { page: "interviews", lang: "en" } },
          { data: { page: "proposal", lang: "uk" } },
          { data: { page: "proposal", lang: "en" } },
          { data: { page: "personal-interview", lang: "uk" } },
          { data: { page: "youtube", lang: "uk" } },
          { data: { page: "youtube", lang: "en" } },
          { data: { page: "home", lang: "uk" } },
          { data: { page: "home", lang: "en" } },
          { data: { page: "work", lang: "en" } },
          { data: { page: "cv", lang: "en" } },
        ],
  ),
  // The route under test only cares whether BaseLayout receives `noindex`,
  // never the real copy — every entry renders as the same stub.
  render: vi.fn(async () => ({ Content: StubPageContent })),
}));

// The real BaseLayout needs Astro.site, which astro/container never
// populates (astro@5.16.4) — see StubBaseLayout.astro. Swapping it out
// still exercises each route's own prop wiring, the thing under test.
vi.mock("src/layouts/BaseLayout.astro", async () => ({
  default: (await import("src/test/StubBaseLayout.astro")).default,
}));

const InterviewsPage = (await import("src/pages/[...lang]/interviews.astro"))
  .default;
const HiringPage = (await import("src/pages/[...lang]/interviews/hiring.astro"))
  .default;
const PersonalPage = (
  await import("src/pages/[...lang]/interviews/personal.astro")
).default;
const YouTubePage = (await import("src/pages/[...lang]/youtube.astro")).default;
const HomePage = (await import("src/pages/[...lang]/index.astro")).default;
const WorkPage = (await import("src/pages/[...lang]/work.astro")).default;
const CvPage = (await import("src/pages/[...lang]/cv.astro")).default;
const BlogIndexPage = (await import("src/pages/[...lang]/blog/index.astro"))
  .default;
const BlogPostPage = (await import("src/pages/[...lang]/blog/[slug].astro"))
  .default;
const YearArchivePage = (
  await import("src/pages/[...lang]/blog/[year]/index.astro")
).default;

const render = async (
  Component: unknown,
  path: string,
  props: Record<string, unknown> = {},
) => {
  const container = await AstroContainer.create();
  return container.renderToString(
    Component as Parameters<typeof container.renderToString>[0],
    { request: new Request(`https://babich.dev${path}`), props },
  );
};

const NOINDEX = '<meta name="robots" content="noindex">';

describe("noindex on the service pages", () => {
  it("interviews carries noindex", async () => {
    expect(await render(InterviewsPage, "/uk/interviews")).toContain(NOINDEX);
  });

  it("interviews/hiring carries noindex", async () => {
    expect(await render(HiringPage, "/uk/interviews/hiring")).toContain(
      NOINDEX,
    );
  });

  it("uk/interviews/personal carries noindex", async () => {
    expect(await render(PersonalPage, "/uk/interviews/personal")).toContain(
      NOINDEX,
    );
  });

  it("youtube carries noindex", async () => {
    expect(await render(YouTubePage, "/uk/youtube")).toContain(NOINDEX);
  });

  it("uk home carries noindex", async () => {
    expect(await render(HomePage, "/uk")).toContain(NOINDEX);
  });
});

describe("the indexable pages stay indexable", () => {
  it("en home does not carry noindex", async () => {
    expect(await render(HomePage, "/")).not.toContain(NOINDEX);
  });

  it("work does not carry noindex", async () => {
    expect(await render(WorkPage, "/work/")).not.toContain(NOINDEX);
  });

  it("cv does not carry noindex", async () => {
    expect(await render(CvPage, "/cv/")).not.toContain(NOINDEX);
  });
});

describe("noindex on the blog", () => {
  const post = {
    data: {
      title: "A post",
      description: "A post description",
      urlSlug: "a-post",
      publishDate: new Date("2024-01-15T00:00:00Z"),
    },
    render: async () => ({ Content: StubPageContent }),
  };

  it("blog index carries noindex", async () => {
    expect(await render(BlogIndexPage, "/blog/")).toContain(NOINDEX);
  });

  it("uk blog index carries noindex", async () => {
    expect(await render(BlogIndexPage, "/uk/blog/")).toContain(NOINDEX);
  });

  it("blog post carries noindex", async () => {
    expect(
      await render(BlogPostPage, "/blog/a-post/", {
        post,
        noAlternateLang: true,
      }),
    ).toContain(NOINDEX);
  });

  it("uk blog post carries noindex", async () => {
    expect(
      await render(BlogPostPage, "/uk/blog/a-post/", {
        post,
        noAlternateLang: true,
      }),
    ).toContain(NOINDEX);
  });
});

describe("noindex on the blog archives", () => {
  it("year archive carries noindex", async () => {
    expect(
      await render(YearArchivePage, "/blog/2024", {
        year: 2024,
        posts: [],
        noAlternateLang: true,
      }),
    ).toContain(NOINDEX);
  });
});
