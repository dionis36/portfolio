export interface SkillItem {
  id: string;
  title: string;
  description: string;
  badges: string[];
  icon: string;
}

export const skills: SkillItem[] = [
  {
    id: "skill-1",
    title: "Data Science & Analytics",
    description:
      "Exploratory data analysis, querying relational databases with SQL, and building Tableau operational reports.",
    badges: [
      "SQL",
      "PostgreSQL",
      "OracleDB",
      "Tableau",
      "Python",
      "Data Cleaning",
      "Statistical Checks",
    ],
    icon: "/images/icon-skill-1.svg",
  },
  {
    id: "skill-2",
    title: "Programming & Full-Stack",
    description:
      "Building backend APIs, web applications, and cross-platform mobile apps with typed workflows.",
    badges: [
      "TypeScript",
      "React / Next.js",
      "Node.js",
      "Fastify",
      "Flutter",
      "Django",
      "REST APIs",
    ],
    icon: "/images/icon-skill-2.svg",
  },
  {
    id: "skill-3",
    title: "Databases, Cloud & DevOps",
    description:
      "Containerized environments, database schemas, and background worker infrastructure.",
    badges: [
      "PostgreSQL",
      "Redis",
      "Prisma ORM",
      "Docker",
      "Linux Admin",
      "Turborepo",
      "Git",
    ],
    icon: "/images/icon-skill-3.svg",
  },
  {
    id: "skill-4",
    title: "Networking & Infrastructure",
    description:
      "Enterprise LAN configurations, managed switches, routers, and workstation hardware diagnostics.",
    badges: [
      "Managed Switches",
      "Static IP Binding",
      "Router Setup",
      "LAN Diagnostics",
      "Hardware Support",
    ],
    icon: "/images/icon-skill-4.svg",
  },
];
