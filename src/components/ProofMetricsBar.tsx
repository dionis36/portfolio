"use client";

import React from "react";
import { Award, Briefcase, Code, Terminal } from "lucide-react";

export default function ProofMetricsBar() {
  const metrics = [
    {
      label: "Helsinki Full Stack Open",
      value: "Grade 5/5",
      subtext: "Max score in React, Node, REST & Security",
      icon: Award,
    },
    {
      label: "Industry Experience",
      value: "3 Traineeships",
      subtext: "Mainstream Group, StartHub Africa, TPC Ltd",
      icon: Briefcase,
    },
    {
      label: "Key Systems Built",
      value: "Monorepos & AST",
      subtext: "Plaqode (TS Monorepo) & Strata (Code AST/DAG)",
      icon: Code,
    },
    {
      label: "Agile Project Mgmt",
      value: "SFC™ Certified",
      subtext: "SCRUMstudy sprint & delivery validation",
      icon: Terminal,
    },
  ];

  return (
    <section className="py-6 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="natural-card bg-white p-4.5 flex flex-col justify-between hover:border-gray-300 transition-all shadow-2xs group"
              >
                <div>
                  {/* Icon Inline Beside Primary Value */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-700 group-hover:text-gray-900 group-hover:bg-gray-100/70 shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-base font-bold text-gray-900 tracking-tight leading-none">
                      {m.value}
                    </div>
                  </div>

                  {/* Category Label */}
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">
                    {m.label}
                  </span>

                  {/* Descriptive Subtext */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {m.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
