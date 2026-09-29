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
    expect(html).toContain("Проєкти (EN)");
    expect(html).toContain("CV (EN)");
    expect(html).toContain('href="/work"');
    expect(html).toContain('href="/cv"');
    expect(html).toContain(languageNames.en);
    expect(html).toContain('hreflang="en"');
    expect(html).toContain('href="/blog"');
  });

  it("renders the en nav with unprefixed links and no language switch", async () => {
    const html = await render("/blog");

    expect(html).toContain('href="/work"');
    expect(html).toContain('href="/cv"');
    expect(html).not.toContain('href="/en');
    for (const { title } of site.en.nav) {
      expect(html).toContain(title);
    }
    expect(html).not.toContain("Blog");
    expect(html).not.toContain("/uk");
    expect(html).not.toContain("hreflang");
    expect(html).not.toContain(languageNames.uk);
  });

  it("shows the site name as the home link, with no tagline and no menu button", async () => {
    const html = await render("/work");

    expect(html).toContain(site.en.title);
    expect(html).toContain('href="/"');
    expect(html).not.toContain("<button");
    expect(html).not.toContain("popover");
    expect(html).not.toContain("open to remote roles");
  });

  it("puts the uk language switch last, after Work and CV", async () => {
    const html = await render("/uk/blog");

    expect(html.indexOf('href="/work"')).toBeLessThan(
      html.indexOf('href="/cv"'),
    );
    expect(html.indexOf('href="/cv"')).toBeLessThan(
      html.indexOf('hreflang="en"'),
    );
  });

  it("marks the current nav link with aria-current, including a cross-language href", async () => {
    const html = await render("/work");

    expect(html).toMatch(
      /href="\/work"[^>]*aria-current="page"|aria-current="page"[^>]*href="\/work"/,
    );
    expect(html.match(/aria-current="page"/g)).toHaveLength(1);
  });

  it("does not mark the other nav links current", async () => {
    const html = await render("/work");

    expect(html).not.toMatch(/href="\/cv"[^>]*aria-current/);
  });

  it("omits the language switch when hideLanguageSwitch is set", async () => {
    const html = await render("/uk/blog", { hideLanguageSwitch: true });

    expect(html).not.toContain("language-switch");
  });
});
