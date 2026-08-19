"use client";

import React from "react";
import { Code2, Server, Network, Terminal } from "lucide-react";

export default function SkillMatrix() {
  const categories = [
    {
      title: "Programming & Web Stack",
      icon: Code2,
      skills: [
        "TypeScript",
        "JavaScript (ES6+)",
        "Python",
        "React / Next.js",
        "Node.js / Express",
        "SQL",
        "Streamlit",
        "Dart",
      ],
    },
    {
      title: "Databases, Cloud & DevOps",
      icon: Server,
      skills: [
        "Docker Containerization",
        "Fly.io & Vercel Deployments",
        "Nginx Reverse Proxy",
        "PostgreSQL & MySQL",
        "Supabase & Redis",
        "Git & Monorepos",
        "SSH & Linux Admin",
        "REST & GraphQL APIs",
      ],
    },
    {
      title: "Networking & Enterprise Infra",
      icon: Network,
      skills: [
        "Switch & Router Deployment",
        "Static IP Binding",
        "LAN Setup & Troubleshooting",
        "Hardware Diagnostics & Repair",
        "Endpoint Network Security",
        "Enterprise Maintenance",
      ],
    },
    {
      title: "Methodologies & Certifications",
      icon: Terminal,
      skills: [
        "Agile / Scrum (SFC™ Certified)",
        "Full Stack Open (Helsinki 5/5)",
        "Monorepo Architecture",
        "Automated CI/CD Pipelines",
        "AST & DAG Code Parsing",
        "Systems Analysis & Analytics",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1">
            Categorized Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Skills & Competencies
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="natural-card bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-gray-100">
                  <div className="p-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skillName, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
