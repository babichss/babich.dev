export const defaultLang = "en";
export const languages = [defaultLang, "uk"] as const;

export type Lang = (typeof languages)[number];

export const languageNames: Record<Lang, string> = {
  en: "English",
  uk: "Українська",
};

export const dateLocales: Record<Lang, string> = {
  en: "en-US",
  uk: "uk-UA",
};

export const isLang = (value: string | undefined): value is Lang =>
  languages.includes(value as Lang);

// Only non-default languages appear as a path prefix; the default language
// lives at the unprefixed root.
const isPrefixLang = (value: string | undefined): value is Lang =>
  isLang(value) && value !== defaultLang;

export const getLangFromPath = (pathname: string): Lang => {
  const [firstSegment] = pathname.split("/").filter(Boolean);
  return isPrefixLang(firstSegment) ? firstSegment : defaultLang;
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

export const stripLangFromPath = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);

  if (isPrefixLang(parts[0])) {
    parts.shift();
  }

  return parts.length > 0 ? `/${parts.join("/")}` : "/";
};

export const getAlternateLang = (lang: Lang): Lang =>
  lang === defaultLang ? "uk" : defaultLang;
