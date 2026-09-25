import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it, vi } from "vitest";
import StubPageContent from "src/test/StubPageContent.astro";

vi.mock("astro:content", () => ({
  getCollection: vi.fn(async () => [
    { data: { page: "interviews", lang: "uk" } },
    { data: { page: "interviews", lang: "en" } },
    { data: { page: "proposal", lang: "uk" } },
    { data: { page: "proposal", lang: "en" } },
    { data: { page: "personal-interview", lang: "uk" } },
    { data: { page: "youtube", lang: "uk" } },
    { data: { page: "youtube", lang: "en" } },
    { data: { page: "home", lang: "uk" } },
    { data: { page: "home", lang: "en" } },
  ]),
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

const render = async (Component: unknown, path: string) => {
  const container = await AstroContainer.create();
  return container.renderToString(
    Component as Parameters<typeof container.renderToString>[0],
    { request: new Request(`https://babich.dev${path}`) },
  );
};

const NOINDEX = '<meta name="robots" content="noindex">';

describe("noindex on the service pages", () => {
  it("interviews carries noindex", async () => {
    expect(await render(InterviewsPage, "/interviews")).toContain(NOINDEX);
  });

  it("interviews/hiring carries noindex", async () => {
    expect(await render(HiringPage, "/interviews/hiring")).toContain(NOINDEX);
  });

  it("interviews/personal carries noindex", async () => {
    expect(await render(PersonalPage, "/interviews/personal")).toContain(
      NOINDEX,
    );
  });

  it("youtube carries noindex", async () => {
    expect(await render(YouTubePage, "/youtube")).toContain(NOINDEX);
  });

  it("home does not carry noindex", async () => {
    expect(await render(HomePage, "/")).not.toContain(NOINDEX);
  });
});
