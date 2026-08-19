"use client";

import React from "react";

export default function CertificationsSection() {
  const certs = [
    {
      title: "Full Stack Open Certification",
      issuer: "University of Helsinki",
      date: "July 2026",
      grade: "Grade 5/5 (Maximum Score)",
      description:
        "Comprehensive deep-dive certification covering advanced React, Redux, Node.js, Express, RESTful APIs, GraphQL, TypeScript, and secure web application architecture.",
    },
    {
      title: "Scrum Fundamentals Certified (SFC™)",
      issuer: "SCRUMstudy",
      date: "July 2026",
      grade: "Professional Certification",
      description:
        "Validated mastery in Agile project management principles, sprint backlog prioritization, daily standups, cross-functional team coordination, and iterative product delivery.",
    },
    {
      title: "BSc. Computer Science",
      issuer: "CoICT, University of Dar es Salaam",
      date: "Expected Oct 2026",
      grade: "Undergraduate Degree",
      description:
        "Core academic degree focusing on systems programming, software engineering, database management, algorithms, data structures, and enterprise networking.",
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-gray-50/60 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1">
            Academic & Professional Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Certifications & Education
          </h2>
        </div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="natural-card bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tabular-nums font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                    {cert.grade}
                  </span>
                  <span className="text-xs font-mono tabular-nums text-gray-500">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {cert.title}
                </h3>

                <div className="text-xs font-mono text-gray-600 mb-3">
                  {cert.issuer}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] font-mono text-gray-500">
                Verified Credential
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
