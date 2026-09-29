import { site } from "src/data/site";

export const personJsonLd = (siteURL: URL) => {
  const home = new URL("/", siteURL).href;
  return {
    "@type": "Person",
    "@id": `${home}#person`,
    name: site.en.name,
    givenName: "Serhii",
    familyName: "Babich",
    jobTitle: "Senior Product Engineer",
    description: site.en.home.title,
    url: home,
    image: new URL("/serhii-babich.jpg", siteURL).href,
    email: "mailto:serhii@babich.dev",
    address: { "@type": "PostalAddress", addressCountry: "UA" },
    knowsLanguage: ["uk", "en"],
    knowsAbout: [
      "Product engineering",
      "Frontend architecture",
      "JavaScript",
      "TypeScript",
      "React",
      "Data visualization",
    ],
    sameAs: [
      "https://www.linkedin.com/in/babichss/",
      "https://youtube.com/@babichweb",
    ],
  };
};
