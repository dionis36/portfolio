"use client";

import React from "react";
import { Code2, Server, Network, Terminal } from "lucide-react";

export default function SkillMatrix() {
  const categories = [
    {
      title: "Programming & Web Stack",
      icon: Code2,
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "React / Next.js", level: "Advanced" },
        { name: "Node.js / Express", level: "Advanced" },
        { name: "PHP", level: "Proficient" },
        { name: "SQL", level: "Proficient" },
        { name: "Streamlit", level: "Proficient" },
        { name: "Dart", level: "Proficient" },
      ],
    },
    {
      title: "Databases, Cloud & DevOps",
      icon: Server,
      skills: [
        { name: "Docker Containerization", level: "Advanced" },
        { name: "Fly.io & Vercel Deployments", level: "Advanced" },
        { name: "Nginx Reverse Proxy", level: "Advanced" },
        { name: "PostgreSQL & MySQL", level: "Advanced" },
        { name: "Supabase & Redis", level: "Proficient" },
        { name: "Git & Monorepos", level: "Advanced" },
        { name: "SSH & Linux Admin", level: "Advanced" },
        { name: "REST & GraphQL APIs", level: "Advanced" },
      ],
    },
    {
      title: "Networking & Enterprise Infra",
      icon: Network,
      skills: [
        { name: "Switch & Router Deployment", level: "Hands-on" },
        { name: "Static IP Binding", level: "Hands-on" },
        { name: "LAN Setup & Troubleshooting", level: "Hands-on" },
        { name: "Hardware Diagnostics & Repair", level: "Hands-on" },
        { name: "Endpoint Network Security", level: "Hands-on" },
        { name: "Enterprise Maintenance", level: "Hands-on" },
      ],
    },
    {
      title: "Methodologies & Certifications",
      icon: Terminal,
      skills: [
        { name: "Agile / Scrum (SFC™ Certified)", level: "Certified" },
        { name: "Full Stack Open (Helsinki 5/5)", level: "Certified" },
        { name: "Monorepo Architecture", level: "Practiced" },
        { name: "Automated CI/CD Pipelines", level: "Practiced" },
        { name: "AST & DAG Code Parsing", level: "Specialized" },
        { name: "Systems Analysis & Analytics", level: "Practiced" },
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

                <div className="grid grid-cols-2 gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-gray-800 truncate pr-1">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 bg-white px-1.5 py-0.5 rounded border border-gray-200 shrink-0">
                        {skill.level}
                      </span>
                    </div>
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
