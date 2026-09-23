import type { Lang } from "src/lib/i18n";

export interface LinkContent {
  href: string;
  label: string;
  external?: boolean;
}

export const site = {
  uk: {
    name: "Сергій Бабіч",
    title: "Сергій Бабіч.",
    tagline: "Фронтенд-інженер, технічний інтервʼюєр, автор.",
    navLabel: "Головна навігація",
    menuLabel: "Відкрити меню",
    nav: [
      { href: "/", title: "Головна" },
      { href: "/interviews", title: "Співбесіди" },
      { href: "/youtube", title: "YouTube" },
      { href: "/blog", title: "Блоґ" },
    ],
    home: {
      metaTitle: "Головна",
      metaDescription: "Сергій Бабіч — технічний експерт",
      title: "Привіт, я — Сергій Бабіч",
    },
    interviews: {
      metaTitle: "Співбесіди для компаній і розробників",
      metaDescription:
        "Технічні співбесіди для компаній і індивідуальний формат для розробників.",
    },
    personalInterview: {
      metaTitle: "Індивідуальні технічні співбесіди",
      metaDescription:
        "Індивідуальні технічні співбесіди для розробників: перевірити рівень, підготуватися до вакансії або розібрати попередні співбесіди.",
    },
    proposal: {
      metaTitle: "Технічні співбесіди для компаній",
      metaDescription:
        "Технічні співбесіди для компаній: план оцінювання, розмова з кандидатом і незалежний технічний висновок.",
    },
    youtube: {
      metaTitle: "YouTube",
      metaDescription: "Формати співпраці для YouTube-каналу Сергія Бабіча",
    },
    blog: {
      metaTitle: "Блоґ",
      metaDescription:
        "Блоґ Сергія Бабіча про веброзробку, співбесіди, команди й технічні рішення",
      title: "Блоґ",
      intro:
        "Тут я пишу про веброзробку, співбесіди, команди, технічні рішення й усе, чим хочеться поділитися, поки думка не загубилася.",
      thanks: "Дякую, що завітали. Приємного читання.",
      allPosts: "Усі дописи",
      empty: "Поки що немає опублікованих постів.",
      yearTitle: (year: number) => `Блоґ ${year}`,
      yearDescription: (year: number) => `Всі пости блоґу за ${year} рік`,
      yearHeading: (year: number) => `Усі дописи за ${year} рік`,
      yearEmpty: (year: number) =>
        `Поки що немає опублікованих постів за ${year} рік.`,
      monthTitle: (monthName: string, year: number) =>
        `Блоґ ${monthName} ${year}`,
      monthDescription: (monthName: string, year: number) =>
        `Всі пости блоґу за ${monthName} ${year}`,
      monthHeading: (monthName: string, year: number) =>
        `Усі дописи за ${monthName} ${year} року`,
      monthEmpty: (monthName: string, year: number) =>
        `Поки що немає опублікованих постів за ${monthName} ${year}.`,
      dayTitle: (dateName: string) => `Блоґ | ${dateName}`,
      dayDescription: (dateName: string) => `Всі пости блоґу за ${dateName}`,
      dayHeading: (dateName: string) => `Усі дописи за ${dateName}`,
    },
  },
  en: {
    name: "Serhii Babich",
    title: "Serhii Babich.",
    tagline: "Frontend engineer, technical interviewer, author.",
    navLabel: "Main navigation",
    menuLabel: "Open menu",
    nav: [
      { href: "/", title: "Home" },
      { href: "/interviews", title: "Interviews" },
      { href: "/youtube", title: "YouTube" },
      { href: "/blog", title: "Blog" },
    ],
    home: {
      metaTitle: "Home",
      metaDescription: "Serhii Babich — technical expert",
      title: "Hi, I am Serhii Babich",
    },
    interviews: {
      metaTitle: "Interviews",
      metaDescription: "Serhii Babich — technical expert",
    },
    proposal: {
      metaTitle: "Cooperation Proposal",
      metaDescription: "Cooperation proposal from Serhii Babich",
    },
    youtube: {
      metaTitle: "YouTube",
      metaDescription:
        "Cooperation formats for Serhii Babich's YouTube channel",
    },
    blog: {
      metaTitle: "Blog",
      metaDescription:
        "Serhii Babich's blog about web development, interviews, teams, and technical decisions",
      title: "Blog",
      intro:
        "Here I write about web development, interviews, teams, technical decisions, and anything worth sharing before the thought disappears.",
      thanks: "Thanks for stopping by. Enjoy reading.",
      allPosts: "All posts",
      empty: "There are no published posts yet.",
      yearTitle: (year: number) => `Blog ${year}`,
      yearDescription: (year: number) => `All blog posts from ${year}`,
      yearHeading: (year: number) => `All posts from ${year}`,
      yearEmpty: (year: number) =>
        `There are no published posts from ${year} yet.`,
      monthTitle: (monthName: string, year: number) =>
        `Blog ${monthName} ${year}`,
      monthDescription: (monthName: string, year: number) =>
        `All blog posts from ${monthName} ${year}`,
      monthHeading: (monthName: string, year: number) =>
        `All posts from ${monthName} ${year}`,
      monthEmpty: (monthName: string, year: number) =>
        `There are no published posts from ${monthName} ${year} yet.`,
      dayTitle: (dateName: string) => `Blog | ${dateName}`,
      dayDescription: (dateName: string) => `All blog posts from ${dateName}`,
      dayHeading: (dateName: string) => `All posts from ${dateName}`,
    },
  },
} satisfies Record<Lang, unknown>;
