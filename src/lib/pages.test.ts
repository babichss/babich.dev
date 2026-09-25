import { describe, expect, it, vi } from "vitest";

const homeUk = { data: { page: "home", lang: "uk" } };
const homeEn = { data: { page: "home", lang: "en" } };
const workEn = { data: { page: "work", lang: "en" } };
const cvEn = { data: { page: "cv", lang: "en" } };

vi.mock("astro:content", () => ({
  getCollection: vi.fn(async () => [homeUk, homeEn, workEn, cvEn]),
  render: vi.fn(async (entry: unknown) => ({ Content: entry })),
}));

const { getPage } = await import("src/lib/pages");

describe("getPage", () => {
  it("renders the entry matching lang and key", async () => {
    const { Content } = await getPage("en", "home");

    expect(Content).toBe(homeEn);
  });

  it("throws naming the missing lang/key combination", async () => {
    await expect(getPage("en", "personal-interview")).rejects.toThrow(
      "Missing personal-interview copy for en",
    );
  });

  it("resolves the en-only work page", async () => {
    const { Content } = await getPage("en", "work");

    expect(Content).toBe(workEn);
  });

  it("resolves the en-only cv page", async () => {
    const { Content } = await getPage("en", "cv");

    expect(Content).toBe(cvEn);
  });
});
