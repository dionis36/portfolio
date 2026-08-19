"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

// Custom Github Icon Component
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ProjectPropsMetadata {
  role: string;
  scope: string;
  architecture: string;
  impact: string;
}

interface Project {
  id: string;
  title: string;
  category: "ai-systems" | "web" | "fullstack-mobile";
  categoryLabel: string;
  tagline: string;
  description: string;
  props: ProjectPropsMetadata;
  badges: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export default function ProjectsBentoGrid() {
  const [activeTab, setActiveTab] = useState<"all" | "ai-systems" | "web" | "fullstack-mobile">("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const projects: Project[] = [
    {
      id: "plaqode-platform",
      title: "Plaqode — High-Performance Digital Identity Monorepo",
      category: "web",
      categoryLabel: "Monorepo Architecture",
      tagline: "Turborepo-orchestrated QR & business card ecosystem with stateless RS256 auth",
      description:
        "Plaqode is a distributed monorepo powering digital QR code generation, business card creation, and event ticketing. Built with Next.js 14/15, Fastify, and Turborepo, it implements stateless RS256 JWT authentication with isolated Prisma clients per service to prevent schema bottlenecks across an 8-app ecosystem.",
      props: {
        role: "Lead Systems Architect",
        scope: "8-App Distributed System",
        architecture: "Turborepo Monorepo",
        impact: "RS256 Zero-Latency Auth",
      },
      badges: ["Next.js 14/15", "Fastify", "Turborepo", "TypeScript", "Prisma ORM", "RS256 JWTs"],
      highlights: [
        "Stateless RS256 authentication with zero-latency asymmetric cryptographic verification",
        "Isolated database strategy with independent Prisma schemas per service on Neon Postgres",
        "Turborepo remote caching ensuring zero redundant builds across 8 integrated applications",
      ],
      githubUrl: "https://github.com/dionis36/plaqode-platform",
      liveUrl: "https://plaqode.com",
      isFeatured: true,
    },
    {
      id: "intleq-ai",
      title: "INTLEQ — Local LLM RAG Platform & Vector Database",
      category: "ai-systems",
      categoryLabel: "AI & Vector Search",
      tagline: "FastAPI + Ollama + pgvector Retrieval-Augmented Generation engine",
      description:
        "INTLEQ is an offline-first RAG platform enabling private AI inference. The FastAPI backend integrates Ollama (llama3.2:1b) and pgvector (PostgreSQL extension) for semantic vector similarity search without cloud dependencies. Features asyncpg for non-blocking concurrent user sessions.",
      props: {
        role: "AI Systems Engineer",
        scope: "Private Offline RAG",
        architecture: "FastAPI + pgvector",
        impact: "Zero Cloud API Reliance",
      },
      badges: ["FastAPI", "Ollama", "pgvector", "Python", "React/Vite", "Docker"],
      highlights: [
        "Private-by-default RAG architecture with local Ollama LLM execution & pgvector cosine similarity",
        "Async-first Python backend leveraging FastAPI + asyncpg for high-concurrency vector queries",
        "Containerized vector database with automated schema operators via SQLAlchemy ORM",
      ],
      githubUrl: "https://github.com/dionis36/intleq",
      liveUrl: "",
      isFeatured: true,
    },
    {
      id: "strata",
      title: "Strata — PHP Legacy Modernization Intelligence Platform",
      category: "ai-systems",
      categoryLabel: "AST & Graph Theory",
      tagline: "AST-based structural analysis engine for de-risking monolith refactoring",
      description:
        "Strata de-risks monolith-to-microservices transformation by converting PHP codebases into structural intelligence graphs. Parses source code into ASTs, computes Strongly Connected Components (SCC) to isolate circular entanglements, and calculates graph centrality risk scores.",
      props: {
        role: "Compiler & Graph Architect",
        scope: "Enterprise Code Audit",
        architecture: "AST + Graph SCC Theory",
        impact: "Monolith De-Risking",
      },
      badges: ["Python 3.11+", "AST Parsing", "Graph Theory", "Streamlit UI", "FastAPI", "Neo4j"],
      highlights: [
        "Graph centrality analysis identifying high-degree bottleneck classes and functions",
        "Strongly Connected Components (SCC) clustering to isolate circular code entanglements",
        "Multi-dimensional risk scoring combining structural metrics, superglobals, and legacy anti-patterns",
      ],
      githubUrl: "https://github.com/dionis36/strata",
      liveUrl: "",
      isFeatured: true,
    },
    {
      id: "raven",
      title: "Raven — Cross-Platform Git Commit Assistant CLI",
      category: "ai-systems",
      categoryLabel: "Go CLI & Systems",
      tagline: "Go-native terminal tool analyzing git diffs for Conventional Commit suggestions",
      description:
        "Raven is a terminal CLI written in Go that parses staged git diffs and suggests Conventional Commit messages. Built with Bubble Tea (TUI framework) and Cobra CLI, it offers interactive commit flows with instant undo/fixup primitives in a single 10MB zero-dependency static executable.",
      props: {
        role: "Go Systems Engineer",
        scope: "Developer CLI Tooling",
        architecture: "Go 1.25 + Bubble Tea",
        impact: "10MB Zero-Dep Executable",
      },
      badges: ["Go 1.25+", "Bubble Tea TUI", "Cobra CLI", "Makefile", "Cross-Platform"],
      highlights: [
        "Smart AST-free git diff analysis inferring commit types (feat, fix, docs) automatically",
        "Interactive TUI with non-destructive undo primitives ('raven undo' & 'raven fix')",
        "Single-binary distribution (~10MB) for Linux, macOS, and Windows with zero runtime overhead",
      ],
      githubUrl: "https://github.com/dionis36/raven",
      liveUrl: "",
      isFeatured: true,
    },
    {
      id: "udsm-journal-portal",
      title: "UDSM Journal Portal — Academic Impact Analytics Monorepo",
      category: "web",
      categoryLabel: "Geospatial & GPU",
      tagline: "Next.js + Fastify geospatial analytics for university research dissemination",
      description:
        "A Phase-2 monorepo providing archival and impact monitoring for UDSM academic journals. Next.js 16 integrates deck.gl (GPU-accelerated geospatial rendering) for real-time readership heatmaps. The Fastify backend orchestrates OJS data extraction and PostGIS spatial indexing.",
      props: {
        role: "Geospatial Data Engineer",
        scope: "University Academic Platform",
        architecture: "deck.gl GPU + PostGIS",
        impact: "Sub-ms Spatial Analytics",
      },
      badges: ["Next.js 16", "Fastify", "deck.gl", "PostGIS", "PostgreSQL", "WebSockets"],
      highlights: [
        "GPU-accelerated geospatial rendering via deck.gl + react-map-gl without main-thread blocking",
        "Real-time WebSocket readership pulse streaming directly from backend to interactive heatmaps",
        "PostGIS spatial indexing for sub-millisecond proximity queries and regional readership aggregation",
      ],
      githubUrl: "https://github.com/dionis36/udsm-journal-portal",
      liveUrl: "",
      isFeatured: false,
    },
    {
      id: "dispatch-lms",
      title: "Dispatch LMS — Football League Management REST Backend",
      category: "web",
      categoryLabel: "Real-Time & Redis",
      tagline: "Express monorepo with Prisma, Redis, and real-time Socket.io events",
      description:
        "Dispatch is a Football League Management System backend built with Express, Prisma, and PostgreSQL. Features a monorepo structure separating REST API endpoints, Redis pub/sub WebSocket live updates (Socket.io), and Redis-backed rate limiting with Swagger UI docs.",
      props: {
        role: "Backend Infrastructure Dev",
        scope: "Sports Analytics Engine",
        architecture: "Express + Redis Pub/Sub",
        impact: "Decoupled WebSocket Streams",
      },
      badges: ["Express.js", "Prisma ORM", "PostgreSQL", "Redis Pub/Sub", "Socket.io", "Swagger UI"],
      highlights: [
        "Socket.io + Redis Pub/Sub decoupling WebSocket live event broadcasting from REST HTTP endpoints",
        "Stateful sliding-window rate limiting backed by Redis + bcrypt authentication stack",
        "OpenAPI Swagger UI integration paired with pre-configured Postman collection workflows",
      ],
      githubUrl: "https://github.com/dionis36/dispatch",
      liveUrl: "",
      isFeatured: false,
    },
    {
      id: "pataspace",
      title: "PataSpace — Real Estate FinTech & Verified Rental Platform",
      category: "fullstack-mobile",
      categoryLabel: "Django & FinTech",
      tagline: "Django 5 + React + Flutter ecosystem with mobile money escrow & geospatial verification",
      description:
        "PataSpace is a full-stack real estate marketplace and fintech platform engineered for high-density urban rental markets like Dar es Salaam. Built with Django 5.0, React 18 (Redux Toolkit), and Flutter, it integrates M-Pesa/Tigo Pesa mobile money escrow to enable 'Rent Now, Pay Monthly' financing, Africa's Talking SMS pipelines, Leaflet marker clustering, and field-agent GPS photo verification.",
      props: {
        role: "Full-Stack FinTech Dev",
        scope: "Dar es Salaam Urban Rental",
        architecture: "Django 5 + React + Flutter",
        impact: "M-Pesa 'Rent Now Pay Monthly'",
      },
      badges: ["Django 5.0", "React 18", "Flutter", "PostgreSQL", "M-Pesa / SMS", "Leaflet Maps"],
      highlights: [
        "FinTech Mobile Money Escrow Layer: Enables 'Rent Now, Pay Monthly' financing via M-Pesa & Tigo Pesa APIs",
        "Geospatial Field Verification System: Leaflet marker clustering paired with field-agent GPS photo auditing",
        "Multi-Channel Alert Infrastructure: Africa's Talking SMS API integration for push notifications & price tracking",
      ],
      githubUrl: "https://github.com/dionis36/propms-backend",
      liveUrl: "",
      isFeatured: false,
    },
    {
      id: "smart-cargo-app",
      title: "Smart Cargo — Flutter Cross-Platform Delivery Mobile App",
      category: "fullstack-mobile",
      categoryLabel: "Flutter & Mobile",
      tagline: "Real-time parcel tracking with multilingual UI and smart distance-based pricing",
      description:
        "Smart Cargo is a Flutter mobile app connecting users with delivery drivers across East Africa. Features real-time tracking, multilingual support (Swahili/English via easy_localization), OpenStreetMap address geocoding, and dynamic distance/weight pricing algorithms.",
      props: {
        role: "Mobile Lead Developer",
        scope: "East Africa Logistics",
        architecture: "Flutter + OpenStreetMap",
        impact: "Multi-Variable Distance Pricing",
      },
      badges: ["Flutter/Dart", "OpenStreetMap", "Firebase Auth", "Django Backend", "Multilingual"],
      highlights: [
        "Multi-variable distance rate calculator (base price + distance + weight + fragility premium)",
        "Responsive Sizer design scaling seamlessly across Android/iOS phones and tablets",
        "Centralized Swahili & English localization allowing instant runtime language toggling",
      ],
      githubUrl: "https://github.com/dionis36/smart_cargo_app",
      liveUrl: "",
      isFeatured: false,
    },
  ];

  // Filtering Logic
  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") {
      return isExpanded ? true : p.isFeatured;
    }
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-gray-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gray-700" />
              <span>Architectural Systems & Applications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Selected Projects
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200">
            {[
              { id: "all", label: "All Systems (8)" },
              { id: "ai-systems", label: "AI & Systems" },
              { id: "web", label: "Web & Monorepos" },
              { id: "fullstack-mobile", label: "Full-Stack & Mobile" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  if (tab.id !== "all") setIsExpanded(true);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-[0.98] ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-2xs font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Editorial Cards List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="natural-card bg-white p-6 sm:p-8 group transition-all"
            >
              {/* Top Header Row */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <span className="inline-flex items-center justify-center text-[11px] font-mono leading-none px-3 pt-1.5 pb-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200 font-medium">
                  {project.categoryLabel}
                </span>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-gray-600 hover:text-gray-900 active:scale-[0.98] bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-lg border border-gray-200 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-gray-700" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900" />
                </a>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-gray-500 mb-4">
                {project.tagline}
              </p>

              {/* Page Props Metadata Telemetry Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 py-3 border-y border-gray-100 my-4 font-mono text-[11px]">
                <div>
                  <div className="text-gray-400 uppercase tracking-wider text-[9px] mb-0.5 font-semibold">Role</div>
                  <div className="font-semibold text-gray-900 truncate">{project.props.role}</div>
                </div>
                <div>
                  <div className="text-gray-400 uppercase tracking-wider text-[9px] mb-0.5 font-semibold">Scope</div>
                  <div className="font-semibold text-gray-900 truncate">{project.props.scope}</div>
                </div>
                <div>
                  <div className="text-gray-400 uppercase tracking-wider text-[9px] mb-0.5 font-semibold">Architecture</div>
                  <div className="font-semibold text-gray-900 truncate">{project.props.architecture}</div>
                </div>
                <div>
                  <div className="text-gray-400 uppercase tracking-wider text-[9px] mb-0.5 font-semibold">Impact</div>
                  <div className="font-semibold text-gray-900 truncate">{project.props.impact}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2 mb-6 border-l-2 border-gray-200 pl-4 py-1">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                {project.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center text-[11px] font-mono leading-none tabular-nums px-2.5 pt-1.5 pb-1 rounded-lg bg-gray-100/90 text-gray-700 border border-gray-200/80 hover:border-gray-300 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show All / Show Less Toggle */}
        {activeTab === "all" && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 active:scale-[0.98] text-gray-800 text-xs font-mono font-semibold transition-all shadow-2xs"
            >
              {isExpanded ? (
                <>
                  <span>Show Featured Systems Only</span>
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                </>
              ) : (
                <>
                  <span>View All 8 Engineering Projects</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
