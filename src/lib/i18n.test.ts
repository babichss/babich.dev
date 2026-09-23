import { describe, expect, it } from "vitest";
import {
  defaultLang,
  getAlternateLang,
  getLangFromPath,
  getLangStaticPaths,
  isLang,
  langParam,
  languages,
  localizedPath,
  stripLangFromPath,
} from "src/lib/i18n";

describe("isLang", () => {
  it("accepts configured languages", () => {
    expect(isLang("uk")).toBe(true);
    expect(isLang("en")).toBe(true);
  });

  it("rejects anything else, including undefined", () => {
    expect(isLang("fr")).toBe(false);
    expect(isLang(undefined)).toBe(false);
  });
});

describe("getLangFromPath", () => {
  it("reads a non-default language from the first segment", () => {
    expect(getLangFromPath("/en/blog")).toBe("en");
  });

  it("falls back to the default language otherwise", () => {
    expect(getLangFromPath("/blog")).toBe(defaultLang);
    expect(getLangFromPath("/")).toBe(defaultLang);
    expect(getLangFromPath("/fr/blog")).toBe(defaultLang);
  });
});

describe("langParam", () => {
  it("is undefined for the default language", () => {
    expect(langParam(defaultLang)).toBeUndefined();
  });

  it("is the language itself otherwise", () => {
    expect(langParam("en")).toBe("en");
  });
});

describe("getLangStaticPaths", () => {
  it("emits one params entry per configured language", () => {
    expect(getLangStaticPaths()).toEqual(
      languages.map((lang) => ({ params: { lang: langParam(lang) } })),
    );
  });
});

describe("localizedPath", () => {
  it("leaves the default language path bare", () => {
    expect(localizedPath(defaultLang, "/blog")).toBe("/blog");
  });

  it("prefixes a non-default language", () => {
    expect(localizedPath("en", "/blog")).toBe("/en/blog");
  });

  it("normalizes a path missing its leading slash", () => {
    expect(localizedPath("en", "blog")).toBe("/en/blog");
  });

  it("prefixes root as just /lang, not /lang/", () => {
    expect(localizedPath("en", "/")).toBe("/en");
  });
});

describe("stripLangFromPath", () => {
  it("removes a leading language segment", () => {
    expect(stripLangFromPath("/en/blog")).toBe("/blog");
  });

  it("leaves a path with no language segment untouched", () => {
    expect(stripLangFromPath("/blog")).toBe("/blog");
  });

  it("collapses to root when nothing remains", () => {
    expect(stripLangFromPath("/en")).toBe("/");
    expect(stripLangFromPath("/")).toBe("/");
  });
});

describe("getAlternateLang", () => {
  it("swaps between the two configured languages", () => {
    expect(getAlternateLang("uk")).toBe("en");
    expect(getAlternateLang("en")).toBe("uk");
  });
});
