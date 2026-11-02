export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  grade?: string;
  description?: string;
  url?: string | null;
  isLocalPdf?: boolean;
}

/**
 * UI-safe variant.
 * Full credential names are kept. Descriptions are short because this list shares a narrow sidebar.
 * The BSc school uses the university name; CoICT is mentioned in the description.
 * The GDPR PDF path must exist under public/.
 */

export const educationList: EducationItem[] = [
  {
    degree: "BSc in Computer Science",
    school: "University of Dar es Salaam",
    period: "2023 - 2026",
    grade: "Undergraduate degree",
    description:
      "The CoICT degree covered programming, data structures, algorithms, relational databases, computer networks, and operating systems. Coursework moved between theory and practice, with regular work in code and databases. It gave the foundation for later backend and data work.",
  },
  {
    degree: "Data Analytics Essentials",
    school: "Cisco Networking Academy",
    period: "Sept 2026",
    grade: "Professional certificate",
    description:
      "The course covered the path from raw data to a report: collecting and cleaning data, writing SQL queries, exploring patterns, and presenting findings through visualizations. It connected the analytical work to the questions a business actually asks.",
    url: "https://www.netacad.com/recognitions/verify/6aa25a13-b845-41e9-b101-67fff6e4a3e8",
  },
  {
    degree: "Full Stack Open Certification",
    school: "University of Helsinki",
    period: "July 2026",
    grade: "Grade 5/5",
    description:
      "A practical course in modern web development, completed with the maximum grade. The work covered TypeScript, React, Node.js, REST APIs, testing, authentication, and containerized deployment. Each part ended with an application that had to run and pass tests.",
    url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/f6f8b813200d909c8b20ee73c015446d",
  },
  {
    degree: "GDPR Foundations Certification",
    school: "Measured Collective",
    period: "Sept 2026",
    grade: "Compliance certificate",
    description:
      "The certification covered lawful processing, data subject rights, controller and processor responsibilities, privacy by design, and breach notification. The material is relevant to any system that stores customer or employee data, especially when data moves across systems or borders.",
    url: "/Certificate - GDPR Foundations.pdf",
    isLocalPdf: true,
  },
  {
    degree: "Scrum Fundamentals Certified (SFC)",
    school: "SCRUMstudy",
    period: "July 2026",
    grade: "Professional certificate",
    description:
      "The certification covered sprint planning, backlog refinement, daily standups, reviews, and retrospectives. The useful part was the rhythm behind the ceremony names: small pieces of work, regular checks, and a clear point where the team can adjust.",
    url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1176426",
  },
];
