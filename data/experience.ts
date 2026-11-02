export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  website?: string;
}

/**
 * Technical experience dossier.
 * Roles reflect institutional data analytics, venture engineering leadership, and foundational software systems.
 */

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Halotel (Viettel Tanzania Plc)",
    role: "Data Analyst",
    period: "Sep 2026 - Present",
    description:
      "The role turns operational data into reports management can use. Day-to-day work covers SQL against PostgreSQL and Oracle, cleaning datasets, and Tableau dashboards for sales and agent activity. Much of the work happens before the report, in checking definitions and cleaning the data.",
    logo: "/images/logo-halotel.png",
    website: "https://halotel.co.tz/",
  },
  {
    id: "exp-digitalops",
    company: "DigitalOps Studio",
    role: "Co-Founder & Technical Director",
    period: "2026 - Present",
    description:
      "Co-founded the engineering studio in Dar es Salaam to build client systems and software infrastructure. The work focuses on backend architecture, payment integrations with Selcom and AzamPay, tenant management portals, and code reviews across client deliverables.",
    logo: "/images/logo-digitalops.png",
    website: "https://digitalops.co.tz",
  },
  {
    id: "exp-2",
    company: "Mainstream Group",
    role: "Software Engineering Collaborator",
    period: "Mar 2026 - May 2026",
    description:
      "Worked with the team on backend services for multi-module applications. The role involved REST API integrations and data flows in TypeScript. Most of the work was understanding an existing codebase, tracing how data moved through it, and making changes without breaking existing parts.",
    logo: "/images/logo-mainstream.png",
    website: "https://mainstreamgroup.co.tz/",
  },
  {
    id: "exp-3",
    company: "UDICTI / StartHub Africa",
    role: "Software Development Trainee",
    period: "Jul 2025 - Sep 2025",
    description:
      "Contributed to the Smart Cargo delivery app, working across a Flutter frontend and a Django backend. The role covered mobile screens, backend endpoints, and the connection between them. It was an introduction to building a complete product with a team, from idea to screen to API.",
    logo: "/images/logo-starthub.png",
    website: "https://starthubafrica.org/",
  },
  {
    id: "exp-4",
    company: "TPC Limited",
    role: "IT Infrastructure Trainee",
    period: "Jul 2024 - Sep 2024",
    description:
      "Supported the IT infrastructure team with enterprise networking and hardware support. The work involved switches, routers, static IP bindings, and hardware issues across departmental terminals. It was hands-on: checking configurations, resolving hardware issues, and finding where a connection failed.",
    logo: "/images/logo-tpc.png",
    website: "https://miwasugar.com/tpc-tanzania/",
  },
];
