import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import { site } from "../data/site";
import { languageNames } from "../lib/i18n";
import Nav from "./Nav.astro";

const render = async (path: string, props: Record<string, unknown> = {}) => {
  const container = await AstroContainer.create();
  return container.renderToString(Nav, {
    request: new Request(`https://babich.dev${path}`),
    props,
  });
};

describe("Nav", () => {
  it("renders the uk nav links and language switch to en", async () => {
    const html = await render("/interviews");

    for (const { href, title } of site.uk.nav) {
      expect(html).toContain(`href="${href}"`);
      expect(html).toContain(title);
    }
    expect(html).toContain('href="/en/interviews"');
    expect(html).toContain(languageNames.en);
  });

  it("renders the en nav links, localized hrefs, and language switch to uk", async () => {
    const html = await render("/en/interviews");

    for (const { href, title } of site.en.nav) {
      expect(html).toContain(`href="/en${href === "/" ? "" : href}"`);
      expect(html).toContain(title);
    }
    expect(html).toContain('href="/interviews"');
    expect(html).toContain(languageNames.uk);
  });

  it("marks the current nav link with aria-current", async () => {
    const html = await render("/interviews");

    expect(html).toMatch(
      /href="\/interviews"[^>]*aria-current="page"|aria-current="page"[^>]*href="\/interviews"/,
    );
  });

  it("omits the language switch when hideLanguageSwitch is set", async () => {
    const html = await render("/interviews", { hideLanguageSwitch: true });

    expect(html).not.toContain("language-switch");
  });
});
