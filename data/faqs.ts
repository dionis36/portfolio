export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
  };
}

export const faqs: FaqItem[] = [
  {
    id: "faq-contracts",
    question: "What types of roles and technical work are you open to?",
    answer: "I take on software engineering and data infrastructure contracts, as well as selected full-time engineering roles. My work focuses on backend APIs, database design, payment integrations, and data analysis pipelines. I am based in Dar es Salaam and work with remote teams globally.",
  },
  {
    id: "faq-availability",
    question: "How do you manage your availability alongside your role at Halotel?",
    answer: "My core daytime hours are dedicated to data analysis at Halotel HQ. I take on consulting, technical advisory, and software contracts during evenings and weekends, with clear project scopes and realistic delivery milestones.",
    link: {
      text: "View Halotel HQ role in Experience",
      href: "/about#exp-1",
    },
  },
  {
    id: "faq-research",
    question: "What are your focus areas for graduate research and academic collaboration?",
    answer: "As a University of Dar es Salaam Computer Science graduate, I am preparing for MSc research at the intersection of data engineering and software systems. My research interests include code analysis with abstract syntax trees, local retrieval systems, and statistical modeling of financial transaction data.",
  },
  {
    id: "faq-digitalops",
    question: "How do you handle client projects through DigitalOps Studio?",
    answer: "Through DigitalOps Studio, where I serve as Co-Founder and Technical Director, I architect client systems including payment integrations with Selcom and AzamPay, tenant management portals, and developer tools. Engagements run through structured sprints with documented APIs and reliable delivery.",
    link: {
      text: "View DigitalOps Studio case study",
      href: "/portfolio/digitalops-studio",
    },
  },
];
