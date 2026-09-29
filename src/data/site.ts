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
    navLabel: "Головна навігація",
    nav: [
      { href: "/work/", title: "Проєкти (EN)", unprefixed: true },
      { href: "/cv/", title: "CV (EN)", unprefixed: true },
    ],
    home: {
      metaTitle: "Сергій Бабіч — Senior Product Engineer",
      metaDescription:
        "Сергій Бабіч — продуктовий інженер: складні інтерфейси для роботи з даними та ML, понад 15 років у фронтенді. Відкритий до віддалених позицій Senior / Staff.",
      title: "Продуктовий інженер: складні інтерфейси для роботи з даними.",
    },
    interviews: {
      metaTitle: "Співбесіди для компаній і розробників",
      metaDescription:
        "Технічні співбесіди для компаній та індивідуальний формат для розробників.",
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
      metaDescription: "Формати співпраці з YouTube-каналом Сергія Бабіча.",
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
      empty: "Поки що немає опублікованих дописів.",
      yearTitle: (year: number) => `Блоґ ${year}`,
      yearDescription: (year: number) => `Усі дописи блоґу за ${year} рік`,
      yearHeading: (year: number) => `Усі дописи за ${year} рік`,
      yearEmpty: (year: number) =>
        `Поки що немає опублікованих дописів за ${year} рік.`,
      monthTitle: (monthName: string, year: number) =>
        `Блоґ ${monthName} ${year}`,
      monthDescription: (monthName: string, year: number) =>
        `Усі дописи блоґу за ${monthName} ${year}`,
      monthHeading: (monthName: string, year: number) =>
        `Усі дописи за ${monthName} ${year} року`,
      monthEmpty: (monthName: string, year: number) =>
        `Поки що немає опублікованих дописів за ${monthName} ${year}.`,
      dayTitle: (dateName: string) => `Блоґ: ${dateName}`,
      dayDescription: (dateName: string) => `Усі дописи блоґу за ${dateName}`,
      dayHeading: (dateName: string) => `Усі дописи за ${dateName}`,
    },
  },
  en: {
    name: "Serhii Babich",
    title: "Serhii Babich.",
    navLabel: "Main navigation",
    nav: [
      { href: "/work/", title: "Work" },
      { href: "/cv/", title: "CV" },
    ],
    home: {
      metaTitle: "Serhii Babich — Senior Product Engineer",
      metaDescription:
        "I'm a product engineer for complex data interfaces: 15+ years in frontend, most recently ML evaluation at DataRobot. Open to remote Senior / Staff roles.",
      title: "Product engineer for complex data interfaces.",
    },
    work: {
      metaTitle: "Product Engineering Case Studies",
      metaDescription:
        "Five case studies: two ML evaluation features and my multi-agent engineering workflow at DataRobot, a schema-mapping editor, and a startup frontend I led.",
    },
    cv: {
      metaTitle: "CV: Senior Product Engineer",
      metaDescription:
        "Senior Product Engineer with 15+ years building data-heavy apps and interactive tools, most recently at DataRobot. Remote from Ukraine (EET).",
    },
    interviews: {
      metaTitle: "Technical interviews",
      metaDescription:
        "Independent technical interviews for hiring teams, frontend from Trainee to Tech Lead.",
    },
    proposal: {
      metaTitle: "Interviewing for hiring teams",
      metaDescription:
        "Technical interviews for hiring teams: an interview plan, the interviews themselves, and an independent technical assessment.",
    },
    youtube: {
      metaTitle: "Partner with my YouTube channel",
      metaDescription:
        "Partnership formats for Serhii Babich's Ukrainian YouTube channel about web development.",
    },
    blog: {
      metaTitle: "Blog: HTML, CSS and Web Development",
      metaDescription:
        "I write about HTML, CSS and the web platform: how browsers handle broken HTML, what deprecated means, new CSS features, and building without a framework.",
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
      dayTitle: (dateName: string) => `Blog: ${dateName}`,
      dayDescription: (dateName: string) => `All blog posts from ${dateName}`,
      dayHeading: (dateName: string) => `All posts from ${dateName}`,
    },
  },
} satisfies Record<Lang, unknown>;
