import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Icons } from "../ui/Icons";
import ProjectMockupFrame from "./ProjectMockupFrame";

interface PortfolioCardProps {
  project: Project;
  variant?: "featured" | "grid";
}

export default function PortfolioCard({
  project,
  variant = "grid",
}: PortfolioCardProps) {
  // 1. Featured Full-Width Card (Horizontal Layout)
  if (variant === "featured") {
    return (
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block bg-surface border border-border-subtle rounded-[20px] p-6 sm:p-8 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] transition-[border-color,transform,box-shadow] duration-250 ease-out hover:border-primary hover:scale-[0.99] active:scale-[0.98] overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Info Column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="w-[41px] h-[41px] rounded-xl bg-surface-subtle flex items-center justify-center p-2 mb-4">
              <Image
                src={project.icon}
                alt={project.title}
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-xs font-medium text-faint mb-1">
              {project.client}
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-primary mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-muted leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              <span>See project</span>
              <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                <Icons.ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Thumbnail Mockup Column */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border-subtle">
              <ProjectMockupFrame
                src={project.thumbnail}
                alt={project.title}
                style={project.mockupStyle || "bleed"}
                priority={true}
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // 2. Standard 2-Column Grid Card (Vertical Stack Layout with Tucked Mockup)
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col justify-between bg-surface border border-border-subtle rounded-[20px] pt-6 pl-6 pr-0 pb-0 sm:pt-7 sm:pl-7 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] transition-[border-color,transform,box-shadow] duration-250 ease-out hover:border-primary hover:scale-[0.99] active:scale-[0.98] overflow-hidden"
    >
      {/* Top Details (with right padding) */}
      <div className="pr-6 sm:pr-7">
        <div className="w-[41px] h-[41px] rounded-xl bg-surface-subtle flex items-center justify-center p-2 mb-4">
          <Image
            src={project.icon}
            alt={project.title}
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-xs font-medium text-faint mb-1">
          {project.client}
        </div>

        <h3 className="text-base sm:text-lg font-medium text-primary mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          <span>See project</span>
          <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
            <Icons.ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Bottom Mockup Image (Tucked into bottom-right corner) */}
      <div className="mt-6 -mr-0.5 -mb-0.5">
        <div className="relative aspect-[16/11] w-full rounded-tl-xl overflow-hidden border-t border-l border-border-subtle">
          <ProjectMockupFrame
            src={project.thumbnail}
            alt={project.title}
            style={project.mockupStyle || "bleed"}
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>
      </div>
    </Link>
  );
}
