export interface Project {
  id: string;
  client: string;
  title: string;
  description: string;
  category: string;
  slug: string;
  thumbnail: string;
  heroImage?: string;
  mockupStyle?: "bleed" | "floating" | "flat";
  icon: string;
  featured?: boolean;
  date: string;
  services: string;
  deliverables: string;
  websiteUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  tableauUrl?: string;
  subtitle: string;
  aboutProject: string[];
  execution: string[];
}

/**
 * UI-safe variant.
 * Card descriptions are shorter. Case-study paragraphs stay close to data/ because those pages have room.
 * Featured order: PaySim, Plaqode, Paydable.
 * Non-PaySim thumbnails reuse generic portfolio images until real screenshots exist.
 * PataSpace omits M-Pesa, Tigo, Flutter, and Leaflet claims.
 * Plaqode is nine apps. Paydable uses the verified retry schedule. Strata omits Tarjan; INTLEQ omits cosine/L2; Raven omits Cobra and the 10MB claim.
 * githubUrl and tableauUrl are optional additions for the later UI upgrade.
 */

export const projects: Project[] = [
  {
    id: "project-1",
    client: "Independent project",
    title: "PaySim Mobile Money Analytics",
    description:
      "An analysis of 6.3 million synthetic mobile money transactions in PostgreSQL. SQL queries and window functions exposed fraud patterns, and a three-tab Tableau dashboard made the results explorable.",
    category: "Data Analytics",
    slug: "paysim-mobile-money-analytics",
    thumbnail: "/images/tab1_macro_view.png",
    mockupStyle: "flat",
    icon: "Activity",
    featured: true,
    date: "2026",
    services: "PostgreSQL, SQL, Tableau Public",
    deliverables: "SQL analysis and three-tab Tableau dashboard",
    websiteUrl:
      "https://public.tableau.com/views/PaySimMobileMoneyAnalytics/TAB1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    githubUrl: "https://github.com/dionis36/paysim-mobile-money-analytics",
    tableauUrl:
      "https://public.tableau.com/views/PaySimMobileMoneyAnalytics/TAB1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    subtitle: "Fraud analysis across 6.3 million mobile money transactions.",
    aboutProject: [
      "PaySim is a synthetic mobile money dataset with 6,362,620 transactions across 744 hourly steps. The dataset includes five transaction types: CASH_IN, CASH_OUT, DEBIT, PAYMENT, and TRANSFER. The question was practical: whether the existing fraud flag, which relies on a static transfer threshold, was actually catching fraudulent activity or only a small slice of it.",
      "The data was loaded into PostgreSQL with currency values stored as DECIMAL(18,2) to preserve precision. Composite indexes on transaction type and fraud status, plus expression indexes on origin accounts, kept the analytical queries responsive. Common table expressions and window functions compared balance states before and after each transaction, which made it possible to see how funds moved through accounts rather than looking at single rows in isolation.",
    ],
    execution: [
      "The existing rule flagged only 16 of the 8,213 fraudulent transactions, which means it missed roughly 99.8 percent of them. Fraud appeared only in TRANSFER and CASH_OUT transactions, and the balance columns showed sequences that a single threshold could not see. The analysis did not claim to replace a fraud model; it showed where a simple rule breaks down.",
      "The final Tableau dashboard has three tabs: a macro view of network volume, a fraud view by hour, and an operations heatmap of balance discrepancies. The dashboard is public and built for exploration rather than a fixed report, so a viewer can filter by transaction type and time. The project made the gap between a rule and an investigation visible, which is the part that carried into later data work.",
    ],
  },
  {
    id: "project-2",
    client: "Independent project",
    title: "Momento Event Platform",
    description:
      "A seven-app Turborepo monorepo for live event media and guest interactions. The architecture handles ephemeral guest uploads without accounts, real-time venue displays over WebSockets, and background worker queues for media processing.",
    category: "Systems & Real-Time",
    slug: "momento-platform",
    thumbnail: "/images/momento1.png",
    heroImage: "/images/momento.png",
    mockupStyle: "flat",
    icon: "Radio",
    featured: true,
    date: "2026",
    services: "Turborepo, Fastify, BullMQ, Prisma",
    deliverables: "Distributed event monorepo and media processing pipeline",
    websiteUrl: "http://momento.digitalops.co.tz/",
    // githubUrl: "https://github.com/dionis36/momento",
    subtitle: "Real-time event media, ephemeral guest sessions, and background worker pipelines.",
    aboutProject: [
      "Live events generate hundreds of photos and audio messages that usually scatter across WhatsApp groups and shared folders after the event is over. Guests dislike downloading dedicated mobile apps or creating accounts just to upload a few photos, while organizers struggle to collect, moderate, and project those memories in real time during the reception. Momento was designed to remove that friction by treating the event as an ephemeral, real-time shared space.",
      "The codebase is a Turborepo monorepo with seven decoupled applications and shared packages. Guests join via a short URL or QR code without an account, generating an ephemeral session token that allows immediate photo and audio uploads. The Fastify API gateway ingests incoming media, writes records through Prisma to PostgreSQL, and broadcasts verified uploads directly to the live venue projector display over WebSockets.",
    ],
    execution: [
      "Heavy media operations are kept off the web servers entirely. Upload jobs are passed to a Redis queue powered by BullMQ, where dedicated worker processes generate responsive image sizes with Sharp, extract audio waveforms for voice guestbook messages, and compute Blurhash placeholders for instant client-side rendering. For post-event delivery, a streaming worker bundles raw high-resolution assets into multi-part ZIP archives directly from S3 storage, avoiding memory bottlenecks on the server.",
      "An organizer cockpit provides live moderation tools to approve, pin, or remove photos from the venue display screen before they appear to the crowd. Working across multiple client surfaces—a mobile web view for guests, a widescreen projector client, and an admin dashboard—reinforced the importance of shared TypeScript contracts. By keeping types and API envelopes in a shared workspace package, contract mismatches between the gateway and client applications were caught during compilation rather than at runtime.",
    ],
  },
  {
    id: "project-3",
    client: "DigitalOps (Co-founder & Technical Director)",
    title: "DigitalOps Studio",
    description:
      "The engineering studio and technology consultancy I co-founded in Dar es Salaam. We design and build payment infrastructure, rental marketplaces, and custom business software for companies across East Africa.",
    category: "Engineering & Infrastructure",
    slug: "digitalops-studio",
    thumbnail: "/images/digitalops4.png",
    heroImage: "/images/digitalops.png",
    mockupStyle: "flat",
    icon: "Layers",
    featured: true,
    date: "2026",
    services: "Next.js, TypeScript, Payment APIs, Architecture",
    deliverables: "Engineering consultancy website and client system architectures",
    websiteUrl: "https://digitalops.co.tz",
    liveUrl: "https://digitalops.co.tz",
    subtitle: "Production engineering, payment integration, and systems architecture in East Africa.",
    aboutProject: [
      "Many businesses in Tanzania run their core operations across disconnected spreadsheets, manual WhatsApp messages, and delayed mobile money receipts. When off-the-shelf software fails to handle local network conditions or regional payment providers, companies need systems built around how business actually moves on the ground. I co-founded DigitalOps with my brother to provide that engineering capability directly to local enterprises and startups.",
      "As Technical Director, my role covers technical architecture, backend infrastructure, and code reviews across client deliverables. The studio's own web platform is built with Next.js and Tailwind CSS, prioritizing fast initial load times, strict semantic HTML, and zero unnecessary script bloat. Behind the public site, the consultancy focuses on three core areas: custom web and mobile applications, payment automation with local gateways, and legacy software refactoring.",
    ],
    execution: [
      "The work centers on reliability under practical constraints. Local payment workflows require integrating networks like Selcom, AzamPay, and mobile money rails alongside international processors like Stripe. Because mobile networks frequently experience dropped connections and duplicate webhooks, our integrations prioritize idempotent processing, database locks, and retry queues to prevent double-crediting or lost transactions.",
      "Running an engineering studio changed how I approach software design. Building systems for external clients forces clear boundaries between business rules, data models, and external APIs. Whether developing a rental marketplace like PataSpace or architecting payment systems like Paydable, the focus is on maintaining clean data flows, predictable state, and codebases that teams can safely operate long after deployment.",
    ],
  },
  {
    id: "project-4",
    client: "Plaqode",
    title: "Plaqode Platform",
    description:
      "A nine-app Turborepo monorepo for digital identity, QR codes, and event ticketing. The work focused on stateless RS256 authentication, isolated PostgreSQL schemas, and a QR engine built for scan traffic.",
    category: "Systems & Monorepos",
    slug: "plaqode-platform",
    thumbnail: "/images/plaqode1.png",
    heroImage: "/images/plaqode.png",
    mockupStyle: "flat",
    icon: "QrCode",
    featured: false,
    date: "2026",
    services: "Turborepo, Fastify, RS256",
    deliverables: "Distributed monorepo and authentication service",
    websiteUrl: "https://github.com/dionis36/plaqode-platform",
    githubUrl: "https://github.com/dionis36/plaqode-platform",
    subtitle: "A distributed monorepo for digital cards, QR codes, and ticketing.",
    aboutProject: [
      "Plaqode started from a simple fragmentation problem. Digital business cards, event ticketing, and dynamic QR codes usually live in separate tools, which means separate accounts, separate billing, and analytics that do not line up. The platform brings those pieces into one system with a shared identity layer.",
      "The codebase is a Turborepo monorepo with nine applications. Each application has a clear boundary, and shared packages handle the pieces that should not be duplicated. PostgreSQL is split into isolated Prisma schemas for profiles, QR analytics, and ticketing, so a migration in one area does not lock or reshape another. Authentication runs as a separate Fastify service that signs RS256 tokens with a private key; the other applications verify those tokens with the public key.",
    ],
    execution: [
      "The authentication design removed the need for every service to call a central session endpoint. A signed token can be verified locally, which keeps the request path shorter and makes the services less coupled. The QR side uses a denormalized scan schema so that redirects and analytics writes do not compete with the profile tables. The monorepo build pipeline uses Turborepo caching to avoid rebuilding applications that have not changed.",
      "The project was mostly an exercise in keeping boundaries clear as the system grew. Nine applications in one repository can become a single large tangle if the package boundaries are weak, so the work focused on what each app owns and what it only consumes. That discipline is the part that transfers to other backend systems, even when the stack is different.",
    ],
  },
  {
    id: "project-5",
    client: "Independent project",
    title: "Paydable Engine",
    description:
      "A payment layer that handles provider callbacks, duplicate webhooks, and retries without crediting the same transaction twice. It sits between merchant systems and providers such as AzamPay, Selcom, Flutterwave, and Stripe.",
    category: "Fintech & Payments",
    slug: "paydable-engine",
    thumbnail: "/images/paydable.png",
    heroImage: "/images/paydable.png",
    mockupStyle: "floating",
    icon: "Lock",
    featured: false,
    date: "2026",
    services: "Node.js, PostgreSQL, Redis",
    deliverables: "Payment callback handling and webhook retry system",
    websiteUrl: "https://github.com/dionis36/paydable",
    githubUrl: "https://github.com/dionis36/paydable",
    subtitle: "Payment callbacks, advisory locks, and webhook retries.",
    aboutProject: [
      "Mobile money payments often fail in ordinary ways: a delayed USSD response, a dropped connection, or a provider sending the same callback twice. Without a concurrency control, two identical callbacks can arrive at the same time and credit a customer twice. Paydable was built around that failure mode rather than around the happy path.",
      "The system uses PostgreSQL advisory locks keyed to the transaction reference. When duplicate callbacks arrive, the first one takes the lock and commits, and the second waits or exits without writing a duplicate credit. A provider adapter layer gives AzamPay, Selcom, Flutterwave, Stripe, and a mock provider the same internal contract, so the rest of the system does not need to know which gateway handled a payment.",
    ],
    execution: [
      "Webhook delivery to merchant servers runs through a retry queue. The schedule is 1 minute, 5 minutes, 30 minutes, 2 hours, 6 hours, 12 hours, and 24 hours, which gives a merchant time to recover from a short outage without losing the event. Server-sent events push payment confirmations to the browser, so the user does not have to poll a status endpoint. Reconciliation checks compare internal records with provider reports and flag the cases that do not match.",
      "The project made payment failures feel less abstract. A webhook is not just an HTTP request; it is a state transition that has to be safe to repeat. The advisory lock and the retry queue are small pieces of code compared with the rest of the system, but they are the pieces that decide whether a merchant trusts the numbers. That is the part of backend work that stayed interesting.",
    ],
  },
  {
    id: "project-6",
    client: "Independent project",
    title: "PataSpace",
    description:
      "A Django and PostgreSQL backend for a rental marketplace. The work covers listings, favorites, alerts, SMS notifications, and media storage, with a focus on the property data model.",
    category: "Web & Marketplaces",
    slug: "pataspace",
    thumbnail: "/images/pataspace.png",
    heroImage: "/images/pataspace.png",
    mockupStyle: "flat",
    icon: "Building2",
    featured: false,
    date: "2025 - 2026",
    services: "Django, PostgreSQL, Cloudflare R2",
    deliverables: "Property marketplace backend",
    websiteUrl: "https://github.com/dionis36/propms-backend",
    githubUrl: "https://github.com/dionis36/propms-backend",
    subtitle: "A rental marketplace backend for property listings and alerts.",
    aboutProject: [
      "PataSpace is a rental marketplace backend built with Django and PostgreSQL. The data model covers properties, listings, favorites, and alerts, with the relationships that make it possible to browse, save, and notify without duplicating records. The backend is the part that holds the marketplace together; the interface can change, but the property data and the rules around it need to stay consistent.",
      "The system sends SMS notifications through Africa's Talking and stores media in Cloudflare R2. Those two integrations are not the center of the project, but they show how a backend connects to services outside its own database. The work was mostly about the unglamorous parts: model design, permissions, and making sure a listing does not lose its related records when something changes.",
    ],
    execution: [
      "The property model was designed around the relationships a rental marketplace actually needs: a property can have multiple listings, a user can save favorites, and an alert can be tied to the criteria a user cares about. Keeping those relationships explicit in PostgreSQL made the backend easier to reason about. The API layer exposes the operations the frontend needs without letting it write directly to the database.",
      "SMS alerts and media storage were added as separate services rather than mixed into the core property logic. That kept the notification path and the file path from leaking into every view. The project was a reminder that a marketplace backend is mostly a set of boundaries: what belongs to a property, what belongs to a user, and what should be handled by another service.",
    ],
  },
  {
    id: "project-7",
    client: "Independent project",
    title: "Strata",
    description:
      "A static analysis tool that reads PHP source, builds a dependency graph, and highlights tightly coupled code. The work makes structural risk visible before a refactor begins.",
    category: "Developer Tooling",
    slug: "strata",
    thumbnail: "/images/strata.png",
    heroImage: "/images/strata.png",
    mockupStyle: "flat",
    icon: "Network",
    featured: false,
    date: "2026",
    services: "Python, AST Parsing, Streamlit",
    deliverables: "Code analysis and refactoring dashboard",
    websiteUrl: "https://github.com/dionis36/strata",
    githubUrl: "https://github.com/dionis36/strata",
    subtitle: "Static analysis for tightly coupled PHP codebases.",
    aboutProject: [
      "Large PHP codebases often hide their structure in plain sight. A class can depend on a utility, the utility can depend on a model, and the model can point back to the class, creating a cycle that is difficult to see by reading files one at a time. Strata was built to make those cycles and shared dependencies visible before anyone starts moving code.",
      "The tool parses PHP source into an abstract syntax tree and extracts class definitions, function calls, and variable usage. Those relationships become a directed graph, where each node is a file or class and each edge is a dependency. Strongly connected components reveal the clusters that have to be understood together, and centrality measures show which nodes carry the most connections.",
    ],
    execution: [
      "The output is not a single risk score. Strata shows the graph, the cycles, and the centrality values so that a developer can see why a file is risky instead of trusting a number. The Streamlit dashboard lets a user inspect a cluster and simulate what happens when a node is removed or isolated. That simulation is deliberately simple; it is a way to ask a question, not a guarantee about a refactor.",
      "The project sits between static analysis and architecture. It does not run the code or measure runtime behavior; it looks at the shape of the source and the dependencies between files. That limits what it can say, but it also makes the tool fast and safe to run on a codebase that is already in production. The interesting part was turning a graph algorithm into something a developer could actually use.",
    ],
  },
  {
    id: "project-8",
    client: "Independent project",
    title: "INTLEQ",
    description:
      "A local retrieval system for private documents, built with FastAPI, Ollama, pgvector, and React. Document search and generation stay on the machine instead of going to a cloud API.",
    category: "AI & Data Systems",
    slug: "intleq",
    thumbnail: "/images/portfolio-1.png",
    mockupStyle: "flat",
    icon: "Cpu",
    featured: false,
    date: "2026",
    services: "FastAPI, Ollama, pgvector",
    deliverables: "Local RAG platform",
    websiteUrl: "https://github.com/dionis36/intleq",
    githubUrl: "https://github.com/dionis36/intleq",
    subtitle: "Private document retrieval with local models.",
    aboutProject: [
      "INTLEQ started from a constraint that many organizations share: internal documents cannot be sent to a public AI service. The project keeps the retrieval and generation local, using Ollama for the language model and pgvector for document embeddings. The result is a system that can answer questions over a private document set without a third-party API in the loop.",
      "Documents are split into chunks, embedded, and stored in PostgreSQL with pgvector. A query is embedded in the same space, and the nearest chunks are retrieved and passed to the local model as context. FastAPI handles the asynchronous backend, while the React interface provides a place to upload documents and ask questions. The design is intentionally local-first, which makes the trade-offs visible: smaller models, slower responses, and no dependency on an external provider.",
    ],
    execution: [
      "The retrieval layer is the part that matters most. A language model can only answer from the context it receives, so the quality of the chunking and the embedding search decides much of the result. The backend keeps the document indexing and the chat session separate, which makes it possible to re-index a collection without rebuilding the whole application. The React side stays simple: upload, ask, and read the answer alongside the retrieved context.",
      "The project is a practical example of local AI rather than a claim that local models match the largest cloud systems. The value is control: the data stays on the machine, the cost is predictable, and the system can run without an internet connection. Those constraints change the design, and that is what made the project worth building.",
    ],
  },
  {
    id: "project-9",
    client: "Independent project",
    title: "Raven",
    description:
      "A Go command-line tool that helps write Conventional Commits from staged changes. It uses a terminal interface for scope and summary selection, with undo and fix commands for the last commit.",
    category: "Developer Tooling",
    slug: "raven",
    thumbnail: "/images/portfolio-2.png",
    mockupStyle: "flat",
    icon: "Terminal",
    featured: false,
    date: "2026",
    services: "Go, Bubble Tea, Git",
    deliverables: "Commit assistant CLI",
    websiteUrl: "https://github.com/dionis36/raven",
    githubUrl: "https://github.com/dionis36/raven",
    subtitle: "A terminal assistant for Conventional Commits.",
    aboutProject: [
      "Conventional Commits are useful, but writing them by hand is easy to skip when a change is small. Raven looks at the staged diff and suggests a commit type, then gives the user a terminal interface for choosing a scope and editing the summary. The goal is to reduce the friction without taking the commit away from the person making it.",
      "The tool is written in Go and uses Bubble Tea for the terminal UI. It reads staged changes through git plumbing commands, so it does not need to parse the working tree or depend on a language runtime. The interface is keyboard-driven: choose a type, choose a scope, edit the message, and commit. The result is a small binary that fits into an existing Git workflow.",
    ],
    execution: [
      "The undo and fix commands are the part that makes the tool feel safe. A commit message is easy to change, but a bad commit can be annoying to repair with reflog commands. Raven wraps the common cases: undo the last commit without losing the changes, or amend the message without rewriting the entire history by hand. Those commands are not magic; they are small, explicit operations on top of Git.",
      "The project was a way to work with Go outside a web service. Most of the code is about reading input, rendering a terminal view, and running Git commands in the right order. The interesting part is the state handling: the tool has to know what is staged, what has been committed, and what can be safely undone. That is a different kind of problem from building an API, and it made the terminal feel like a real interface rather than a thin wrapper.",
    ],
  },
];
