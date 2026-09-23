import { describe, expect, it } from "vitest";
import { getPage } from "./pages";

// The found-entry render() path is exercised by the dist/ build byte-diff
// instead of here: this env's SSR module runner can't evaluate this repo's
// MDX content entries (see src/pages/__tests__/page-lookup.test.ts).
describe("getPage", () => {
  it("throws naming the missing lang/key combination", async () => {
    await expect(getPage("en", "personal-interview")).rejects.toThrow(
      "Missing personal-interview copy for en",
    );
  });
});
