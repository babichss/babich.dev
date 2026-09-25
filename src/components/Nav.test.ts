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
  it("renders the uk nav — Work/CV already pointing at /en, marked (EN) — and the language switch to en", async () => {
    const html = await render("/blog");

    for (const { href, title } of site.uk.nav) {
      expect(html).toContain(`href="${href}"`);
      expect(html).toContain(title);
    }
    expect(html).toContain('href="/en/blog"');
    expect(html).toContain(languageNames.en);
  });

  it("renders the en nav — the cross-language Work/CV hrefs left as is, Blog localized — and the language switch to uk", async () => {
    const html = await render("/en/blog");

    // Work/CV are already /en-prefixed in the data; en must not double-prefix them.
    expect(html).toContain('href="/en/work"');
    expect(html).toContain('href="/en/cv"');
    expect(html).not.toContain('href="/en/en/');
    expect(html).toContain('href="/en/blog"');
    for (const { title } of site.en.nav) {
      expect(html).toContain(title);
    }
    expect(html).toContain('href="/blog"');
    expect(html).toContain(languageNames.uk);
  });

  it("marks the current nav link with aria-current, including a cross-language href", async () => {
    const html = await render("/en/work");

    expect(html).toMatch(
      /href="\/en\/work"[^>]*aria-current="page"|aria-current="page"[^>]*href="\/en\/work"/,
    );
  });

  it("omits the language switch when hideLanguageSwitch is set", async () => {
    const html = await render("/blog", { hideLanguageSwitch: true });

    expect(html).not.toContain("language-switch");
  });
});
