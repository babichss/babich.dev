import { describe, expect, it } from "vitest";
import {
  defaultLang,
  getAlternateLang,
  getLangFromPath,
  getLangStaticPaths,
  isLang,
  isNoindexLang,
  langParam,
  languages,
  linksToAlternateLang,
  localizedPath,
  stripLangFromPath,
  ukrainianDetached,
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

describe("defaultLang", () => {
  it("is English", () => {
    expect(defaultLang).toBe("en");
  });
});

describe("getLangFromPath", () => {
  it("reads a non-default language from the first segment", () => {
    expect(getLangFromPath("/uk/blog")).toBe("uk");
    expect(getLangFromPath("/uk")).toBe("uk");
  });

  it("falls back to the default language otherwise", () => {
    expect(getLangFromPath("/blog")).toBe(defaultLang);
    expect(getLangFromPath("/")).toBe(defaultLang);
    expect(getLangFromPath("/fr/blog")).toBe(defaultLang);
  });

  it("never reads the default language as a path prefix", () => {
    expect(getLangFromPath("/en/blog")).toBe(defaultLang);
  });
});

describe("langParam", () => {
  it("is undefined for the default language", () => {
    expect(langParam(defaultLang)).toBeUndefined();
  });

  it("is the language itself otherwise", () => {
    expect(langParam("uk")).toBe("uk");
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
    expect(localizedPath(defaultLang, "/")).toBe("/");
  });

  it("prefixes a non-default language", () => {
    expect(localizedPath("uk", "/blog")).toBe("/uk/blog");
  });

  it("normalizes a path missing its leading slash", () => {
    expect(localizedPath("uk", "blog")).toBe("/uk/blog");
  });

  it("prefixes root as just /lang, not /lang/", () => {
    expect(localizedPath("uk", "/")).toBe("/uk");
  });
});

describe("stripLangFromPath", () => {
  it("removes a leading non-default language segment", () => {
    expect(stripLangFromPath("/uk/blog")).toBe("/blog");
  });

  it("leaves a path with no language segment untouched", () => {
    expect(stripLangFromPath("/blog")).toBe("/blog");
  });

  it("collapses to root when nothing remains", () => {
    expect(stripLangFromPath("/uk")).toBe("/");
    expect(stripLangFromPath("/")).toBe("/");
  });
});

describe("getAlternateLang", () => {
  it("swaps between the two configured languages", () => {
    expect(getAlternateLang("uk")).toBe("en");
    expect(getAlternateLang("en")).toBe("uk");
  });
});

describe("ukrainianDetached", () => {
  it("is on, so /uk/ is noindex and English does not link to it", () => {
    expect(ukrainianDetached).toBe(true);
    expect(isNoindexLang("uk")).toBe(true);
    expect(isNoindexLang("en")).toBe(false);
    expect(linksToAlternateLang("en")).toBe(false);
    expect(linksToAlternateLang("uk")).toBe(true);
  });
});
