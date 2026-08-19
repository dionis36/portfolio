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
    <section className="py-8 border-y border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gray-50/50 border border-gray-200 flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-white border border-gray-200 text-gray-700 shrink-0 shadow-2xs">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900 font-mono tabular-nums tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-800">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-gray-500 pt-0.5 leading-snug">
                    {m.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
