import { profile } from "./profile";

export interface PageMeta {
  title: string;
  subtitle?: string;
  seoDescription: string;
}

export interface PagesConfig {
  home: {
    seoTitle: string;
    seoDescription: string;
  };
  about: PageMeta;
  portfolio: PageMeta;
  contact: PageMeta;
}

/**
 * UI-safe variant.
 * Page metadata is not constrained by card height, so the copy stays natural.
 */

export const pagesConfig: PagesConfig = {
  home: {
    seoTitle: `${profile.name} | ${profile.role}`,
    seoDescription:
      "Portfolio of Dionis Ludovick Nasuwa, a data analyst and software developer in Dar es Salaam. SQL, Tableau, backend systems, and independent data projects.",
  },
  about: {
    title: "About Me",
    subtitle: profile.aboutHeroBio,
    seoDescription:
      "Background, career history, education, and technical work of Dionis Ludovick Nasuwa, a data analyst and software developer.",
  },
  portfolio: {
    title: "Portfolio",
    subtitle:
      "Selected data analysis and software projects, from mobile money fraud analysis to payment systems and developer tools.",
    seoDescription:
      "Data analysis and software projects by Dionis Ludovick Nasuwa, including PaySim, Plaqode, Paydable, PataSpace, Strata, INTLEQ, and Raven.",
  },
  contact: {
    title: "Contact",
    subtitle:
      "For data analysis, software development, or research collaborations, reach out through the direct channels below.",
    seoDescription:
      "Contact Dionis Ludovick Nasuwa for data analysis, software development, or research collaborations.",
  },
};
