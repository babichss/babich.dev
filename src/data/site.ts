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
    tagline: "Senior Product Engineer · відкритий до віддаленої роботи",
    navLabel: "Головна навігація",
    menuLabel: "Відкрити меню",
    nav: [
      { href: "/work", title: "Проєкти (EN)", unprefixed: true },
      { href: "/cv", title: "CV (EN)", unprefixed: true },
    ],
    home: {
      metaTitle: "Senior Product Engineer",
      metaDescription:
        "Сергій Бабіч — продуктовий інженер: складні інтерфейси для роботи з даними та ML, понад 15 років у фронтенді. Відкритий до віддалених позицій Senior / Staff.",
      title: "Продуктовий інженер: складні інтерфейси для роботи з даними.",
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
    tagline: "Senior Product Engineer · open to remote roles",
    navLabel: "Main navigation",
    menuLabel: "Open menu",
    nav: [
      { href: "/work", title: "Work" },
      { href: "/cv", title: "CV" },
    ],
    home: {
      metaTitle: "Senior Product Engineer",
      metaDescription:
        "Serhii Babich — product engineer for complex data and ML interfaces, 15+ years in frontend. Open to remote Senior / Staff Product Engineer roles.",
      title: "Product engineer for complex data interfaces.",
    },
    work: {
      metaTitle: "Work",
      metaDescription:
        "Case studies by Serhii Babich: ML evaluation features and a multi-agent engineering workflow at DataRobot, a schema-mapping editor at Edvantis, and the SkillReveal frontend.",
    },
    cv: {
      metaTitle: "CV",
      metaDescription:
        "CV of Serhii Babich, Senior Product Engineer: 15+ years in frontend, most recently at DataRobot. Open to remote Senior / Staff roles.",
    },
    interviews: {
      metaTitle: "Interviews",
      metaDescription:
        "Independent technical interviews for hiring teams, frontend from Trainee to Tech Lead.",
    },
    proposal: {
      metaTitle: "Interviewing for Hiring Teams",
      metaDescription:
        "Technical interviews for hiring teams: an interview plan, the interviews themselves, and an independent technical assessment.",
    },
    youtube: {
      metaTitle: "Partner with my YouTube channel",
      metaDescription:
        "Partnership formats for Serhii Babich's YouTube channel.",
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
