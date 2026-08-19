"use client";

import React from "react";
import { Calendar, MapPin, Check } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "Software Engineering Collaborator",
      company: "Mainstream Group (Technology Division)",
      location: "Dar es Salaam, Tanzania",
      period: "March 2026 – May 2026",
      bullets: [
        "Contributed to enterprise software development and system architecture design across multi-module applications.",
        "Engineered secure RESTful API integrations and backend data flows, enhancing system interoperability and processing speed.",
        "Engaged in Agile workflows, sprint reviews, and cross-functional team alignment to deliver project milestones reliably.",
      ],
      tags: ["TypeScript", "RESTful APIs", "System Architecture", "Agile Workflows"],
    },
    {
      role: "Software Development Trainee",
      company: "UDICTI / StartHub Africa Partnership",
      location: "Dar es Salaam, Tanzania",
      period: "July 2025 – September 2025",
      bullets: [
        "Collaborated on full-stack application development and UI layout design for the 'Smart Cargo' digital logistics management system.",
        "Mapped complex user workflows into intuitive interfaces, optimizing user navigation and real-time transaction tracking.",
        "Assisted in workflow testing and database query optimization to improve data transparency and reporting accuracy.",
      ],
      tags: ["Full-Stack", "Logistics Systems", "Database Optimization", "UI/UX Mapping"],
    },
    {
      role: "IT Infrastructure & Network Optimization Trainee",
      company: "TPC Limited",
      location: "Kilimanjaro / Tanzania",
      period: "July 2024 – September 2024",
      bullets: [
        "Upgraded network switches, deployed wireless routers, and set static IP bindings to optimize enterprise network uptime and secure routing.",
        "Diagnosed and resolved hardware/software maintenance issues across business-critical desktop terminals and network peripherals.",
        "Enforced endpoint network configuration standards to ensure operational continuity across enterprise departments.",
      ],
      tags: ["Network Switches", "Static IP Binding", "Hardware Diagnostics", "Enterprise Infrastructure"],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50/60 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1">
            Work History
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Technical Experience
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="natural-card bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-gray-700">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono tabular-nums text-gray-500">
                  <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200 text-gray-700 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-6">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                    <Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
