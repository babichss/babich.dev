import { describe, expect, it, vi } from "vitest";

const homeUk = { data: { page: "home", lang: "uk" } };
const homeEn = { data: { page: "home", lang: "en" } };

vi.mock("astro:content", () => ({
  getCollection: vi.fn(async () => [homeUk, homeEn]),
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
});
