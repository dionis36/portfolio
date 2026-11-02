export interface ProfileData {
  name: string;
  role: string;
  greetingLine1: string;
  greetingLine2: string;
  heroBio: string;
  aboutBioShort: string[];
  aboutHeroTitle: string;
  aboutHeroBio: string;
  story: string[];
  avatar: string;
  portrait: string;
  email: string;
}

/**
 * UI-safe variant.
 * GUIDELINES are used as a layout sanity check, not a strict contract.
 * Hero and snippet copy are tightened. Story paragraphs stay full because the About page has room.
 */

export const profile: ProfileData = {
  name: "Dionis Ludovick Nasuwa",
  role: "Data Analyst & Software Developer",
  greetingLine1: "Hello, I'm Dionis.",
  greetingLine2: "A data analyst and software developer.",
  heroBio:
    "My work sits between data analysis and software development. At Halotel, that means SQL, clean operational data, and Tableau reports. When needed, I build the tools around the data.",
  aboutBioShort: [
    "Most of my work is in data analysis. At Halotel, the day-to-day work involves SQL against PostgreSQL and Oracle, cleaning operational data, and preparing Tableau reports. The questions are practical: why sales moved, where agent activity changed, or why two systems show different numbers. A large part of the work happens before the report, in checking definitions and cleaning the data so the final figures hold up.",
    "Software development is the other side of that work. I studied computer science at the University of Dar es Salaam, and earlier roles were in backend services, mobile applications, and IT infrastructure. Those roles showed how data is created, stored, and moved before it reaches a report. When an analysis needs a script, an API, or an application, I can build it rather than wait for another team.",
  ],
  aboutHeroTitle: "About Me",
  aboutHeroBio:
    "Most of my work sits where data analysis and software development overlap. At Halotel, the day-to-day work involves SQL against PostgreSQL and Oracle, cleaning operational data, and building Tableau reports for management. Earlier roles covered backend services, mobile applications, and IT infrastructure, which showed how data is created and stored before it reaches a report. Working across both areas has made each one clearer: the software side shows how data is produced, and the data side shows what the software is actually for. I am now preparing for postgraduate study in data science, with a focus on statistical methods and practical research.",
  story: [
    "Computer science at the University of Dar es Salaam gave me the foundation I still rely on: programming, relational databases, algorithms, and how software systems are put together. I graduated in October 2026. Alongside the degree, I completed the University of Helsinki's Full Stack Open with a grade of 5/5, which added practical work in TypeScript, React, Node.js, testing, and containerized deployment. The degree gave me the theory; Full Stack Open gave me practice in building and shipping complete applications. Both matter now, because most analysis eventually needs an application, an API, or a script that someone else can run.",
    "My professional experience has moved between infrastructure, software, and data. At TPC Limited, the work was in enterprise networking: switches, static IP bindings, routers, and hardware issues across departmental terminals. At UDICTI and StartHub Africa, the work moved to software development, where I contributed to the Smart Cargo delivery app built with Flutter and a Django backend. At Mainstream Group, the focus was backend work: REST API integrations and data flows in TypeScript for multi-module applications. I now work as a Data Analyst at Halotel, where the work involves SQL, PostgreSQL, Oracle, and Tableau dashboards for operational reporting.",
    "Outside work, I build projects that test ideas outside my current role. PaySim analyzed 6.3 million synthetic mobile money transactions in PostgreSQL, with SQL queries, window functions, and a three-tab Tableau dashboard. Plaqode and Paydable are backend-heavy systems: a nine-app Turborepo monorepo with RS256 authentication, and a payment system built around PostgreSQL advisory locks and webhook retries. Strata, INTLEQ, and Raven explore code structure, local retrieval, and command-line tooling. Each project forced a decision about how the data or the system should work. I am now preparing for a master's in data science, with an interest in statistical methods, machine learning, and applied research.",
  ],
  avatar: "/dio.png",
  portrait: "/images/about-img.jpeg",
  email: "nasuwadio36@gmail.com",
};
