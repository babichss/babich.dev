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
  const [firstSegment] = normalizedPath.split("/").filter(Boolean);

  // An href that already names its own language (a cross-language nav
  // link, e.g. the UK nav pointing at /en/work) is left as is — prefixing
  // it again would double it regardless of the current page's lang.
  if (isLang(firstSegment)) {
    return normalizedPath;
  }

  if (lang === defaultLang) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `/${lang}` : `/${lang}${normalizedPath}`;
};

export const stripLangFromPath = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);

  if (isLang(parts[0])) {
    parts.shift();
  }

  return parts.length > 0 ? `/${parts.join("/")}` : "/";
};

export const getAlternateLang = (lang: Lang): Lang =>
  lang === defaultLang ? "en" : defaultLang;
