import React from "react";
import { projects } from "@/data/projects";
import { pagesConfig } from "@/data/pages";
import ArrowLink from "../ui/ArrowLink";
import PortfolioCard from "../portfolio/PortfolioCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const mainFeatured = featured[0];
  const gridFeatured = featured.slice(1, 3);

  return (
    <section>
      <div className="py-12 sm:py-16 max-w-[960px] mx-auto px-6 border-t border-border">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-end mb-8 sm:mb-10">
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-[26px] font-medium leading-[1.38] text-primary mb-2">
              Portfolio
            </h2>
            <p className="text-muted text-base">
              {pagesConfig.portfolio.subtitle}
            </p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <ArrowLink href="/portfolio">All projects</ArrowLink>
          </div>
        </div>

        {/* 1. Main Featured Project (Full Width Horizontal) */}
        {mainFeatured && (
          <div className="mb-6">
            <PortfolioCard project={mainFeatured} variant="featured" />
          </div>
        )}

        {/* 2. Secondary Featured Projects (2-Column Grid) */}
        {gridFeatured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridFeatured.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                variant="grid"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
