import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import { site } from "src/data/site";
import { languageNames } from "src/lib/i18n";
import Nav from "src/components/Nav.astro";

const render = async (path: string, props: Record<string, unknown> = {}) => {
  const container = await AstroContainer.create();
  return container.renderToString(Nav, {
    request: new Request(`https://babich.dev${path}`),
    props,
  });
};

describe("Nav", () => {
  it("renders the uk nav — Work/CV unprefixed, marked (EN) — and the language switch to en", async () => {
    const html = await render("/uk/blog");

    for (const { href, title } of site.uk.nav) {
      expect(html).toContain(title);
      expect(html).toContain(`href="${href}"`);
    }
    expect(html).toContain('href="/work"');
    expect(html).toContain('href="/cv"');
    expect(html).toContain(languageNames.en);
    expect(html).toContain('href="/blog" hreflang="en"');
  });

  it("renders the en nav with unprefixed links and the language switch to uk", async () => {
    const html = await render("/blog");

    expect(html).toContain('href="/work"');
    expect(html).toContain('href="/cv"');
    expect(html).not.toContain('href="/en');
    for (const { title } of site.en.nav) {
      expect(html).toContain(title);
    }
    expect(html).not.toContain("Blog");
    expect(html).toContain('href="/uk/blog" hreflang="uk"');
    expect(html).toContain(languageNames.uk);
  });

  it("marks the current nav link with aria-current, including a cross-language href", async () => {
    const html = await render("/work");

    expect(html).toMatch(
      /href="\/work"[^>]*aria-current="page"|aria-current="page"[^>]*href="\/work"/,
    );
  });

  it("omits the language switch when hideLanguageSwitch is set", async () => {
    const html = await render("/blog", { hideLanguageSwitch: true });

    expect(html).not.toContain("language-switch");
  });
});
