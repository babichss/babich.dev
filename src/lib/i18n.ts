export const defaultLang = "uk";
export const languages = [defaultLang, "en"] as const;

export type Lang = (typeof languages)[number];

export const languageNames: Record<Lang, string> = {
  uk: "Українська",
  en: "English",
};

export const dateLocales: Record<Lang, string> = {
  uk: "uk-UA",
  en: "en-US",
};

export const isLang = (value: string | undefined): value is Lang =>
  languages.includes(value as Lang);

export const getLangFromPath = (pathname: string): Lang => {
  const [firstSegment] = pathname.split("/").filter(Boolean);
  return isLang(firstSegment) ? firstSegment : defaultLang;
};

export const langParam = (lang: Lang) =>
  lang === defaultLang ? undefined : lang;

export const getLangStaticPaths = () =>
  languages.map((lang) => ({
    params: { lang: langParam(lang) },
  }));

export const localizedPath = (lang: Lang, path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (lang === defaultLang) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `/${lang}` : `/${lang}${normalizedPath}`;
};

export const localizedHtml = (lang: Lang, html: string) =>
  html.replace(/href="(\/(?!\/)[^"#?]*)"/g, (_match, href: string) => {
    return `href="${localizedPath(lang, href)}"`;
  });

export const stripLangFromPath = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);

  if (isLang(parts[0])) {
    parts.shift();
  }

  return parts.length > 0 ? `/${parts.join("/")}` : "/";
};

export const getAlternateLang = (lang: Lang): Lang =>
  lang === defaultLang ? "en" : defaultLang;
