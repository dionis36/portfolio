import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ArrowLink from "@/components/ui/ArrowLink";
import { Icons } from "@/components/ui/Icons";
import HomeCta from "@/components/home/HomeCta";


interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Resolve dynamic project links
  const links: { label: string; url: string }[] = [];

  if (project.tableauUrl) {
    links.push({ label: "Tableau Dashboard", url: project.tableauUrl });
  }

  if (
    project.websiteUrl &&
    !project.websiteUrl.includes("github.com") &&
    project.websiteUrl !== project.tableauUrl
  ) {
    links.push({ label: "Visit Website", url: project.websiteUrl });
  } else if (project.liveUrl && project.liveUrl !== project.websiteUrl) {
    links.push({ label: "Visit Website", url: project.liveUrl });
  }

  if (project.githubUrl) {
    links.push({ label: "GitHub Repository", url: project.githubUrl });
  }

  if (links.length === 0 && project.websiteUrl) {
    links.push({
      label: project.websiteUrl.includes("github.com") ? "GitHub Repository" : "Visit Website",
      url: project.websiteUrl,
    });
  }

  return (
    <main className="flex-1 w-full pb-16 sm:pb-24">
      {/* Top Header */}
      <section className="pt-12 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-[960px] mx-auto px-6">
          {/* Back link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs  tracking-wider font-semibold text-faint hover:text-primary transition-colors mb-6"
          >
            <span className="rotate-180 inline-block">
              <Icons.ArrowRight className="w-3 h-3" />
            </span>
            <span>Back to portfolio</span>
          </Link>

          {/* Title & Subtitle */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-8 sm:mb-10">
            <div className="md:col-span-8">
              <h1 className="text-3xl sm:text-[40px] font-medium leading-[1.25] tracking-tight text-primary mb-4">
                {project.title}
              </h1>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* 4-Column Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 py-6 border-y border-border">
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                Client
              </span>
              <span className="text-sm font-medium text-primary">
                {project.client}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                Date
              </span>
              <span className="text-sm text-muted">
                {project.date}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                Services
              </span>
              <span className="text-sm text-muted leading-snug block">
                {project.services}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                {links.length > 1
                  ? "Links"
                  : links[0]?.label === "Visit Website"
                  ? "Website"
                  : "Repository"}
              </span>
              <div className="flex flex-col gap-1.5">
                {links.map((link) => (
                  <ArrowLink
                    key={link.url}
                    href={link.url}
                    isExternal
                    className="text-sm"
                  >
                    {link.label}
                  </ArrowLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Showcase Mockup */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-surface-subtle border border-border-subtle">
            <Image
              src={project.heroImage || project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 960px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Narrative Section: About the Project */}
      <section>
        <div className="max-w-[960px] mx-auto px-6 pb-12 sm:pb-16 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-8">
              <h2 className="text-2xl sm:text-[28px] font-medium leading-[1.35] text-primary mb-4">
                About the Project
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                {project.aboutProject.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section: Project Execution */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-8">
              <h2 className="text-2xl sm:text-[28px] font-medium leading-[1.35] text-primary mb-4">
                Project Execution
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                {project.execution.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner Card */}
      <HomeCta />
    </main>
  );
}
