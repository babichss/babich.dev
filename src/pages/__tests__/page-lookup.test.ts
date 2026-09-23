import { getCollection } from "astro:content";
import { describe, expect, it } from "vitest";

// Pins the find-in-`pages`-collection / throw-if-missing sequence every page
// route runs today (lang × page-collection key → entry, or none), ahead of
// extracting it into a shared getPage(lang, key) helper. The render() step
// that follows a found entry is covered separately by the dist/ build
// byte-diff (astro build goes through Vite's real SSR pipeline, unlike this
// harness's Container API, which can't evaluate this repo's MDX entries).
const findPage = async (lang: "uk" | "en", page: string) =>
  (await getCollection("pages")).find(
    (entry) => entry.data.lang === lang && entry.data.page === page,
  );

const expectFound = (page: string, lang: "uk" | "en") =>
  it(`finds ${page}/${lang}`, async () => {
    const entry = await findPage(lang, page);
    expect(entry?.data).toEqual({ page, lang });
  });

describe("pages collection lookup", () => {
  expectFound("home", "uk");
  expectFound("home", "en");
  expectFound("interviews", "uk");
  expectFound("interviews", "en");
  expectFound("youtube", "uk");
  expectFound("youtube", "en");
  expectFound("proposal", "uk");
  expectFound("proposal", "en");

  it("is undefined for a lang/key combination with no matching entry -- the condition each route throws on", async () => {
    const entry = await findPage("en", "personal-interview");
    expect(entry).toBeUndefined();
  });
});
