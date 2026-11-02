"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import PortfolioCard from "./PortfolioCard";
import { Icons } from "../ui/Icons";

export default function PortfolioList() {
  const [showAll, setShowAll] = useState(false);

  const firstProject = projects[0];
  const primaryGridProjects = projects.slice(1, 5);
  const archiveProjects = projects.slice(5);

  const visibleGridProjects = showAll
    ? [...primaryGridProjects, ...archiveProjects]
    : primaryGridProjects;

  return (
    <section className="pb-16 sm:pb-24">
      <div className="max-w-[960px] mx-auto px-6">
        {/* 1. Main Featured Project (Full-Width Horizontal) */}
        {firstProject && (
          <div className="mb-6">
            <PortfolioCard project={firstProject} variant="featured" />
          </div>
        )}

        {/* 2. 2-Column Grid */}
        {visibleGridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleGridProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                variant="grid"
              />
            ))}
          </div>
        )}

        {/* 3. View More Archive Toggle */}
        {archiveProjects.length > 0 && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle bg-surface text-sm font-medium text-muted hover:text-primary hover:border-border transition-all duration-200 cursor-pointer shadow-[0_2px_8px_0_rgba(0,0,0,0.02)] active:scale-[0.98]"
            >
              <span>
                {showAll
                  ? "Show fewer projects"
                  : `View all projects`}
              </span>
              <Icons.ArrowRight
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showAll ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

