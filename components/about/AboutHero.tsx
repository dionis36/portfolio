import React from "react";
import Image from "next/image";
import ArrowLink from "../ui/ArrowLink";
import { profile } from "@/data/profile";
import { pagesConfig } from "@/data/pages";

export default function AboutHero() {
  return (
    <section className="pt-12 sm:pt-20 pb-12">
      <div className="max-w-[960px] mx-auto px-6">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-[640px]">
            <h1 className="text-3xl sm:text-[36px] font-medium leading-[1.28] tracking-tight text-primary mb-3">
              {pagesConfig.about.title}
            </h1>
            <p className="text-muted text-base leading-relaxed">
              {pagesConfig.about.subtitle}
            </p>
          </div>
          <ArrowLink href="/contact" className="shrink-0">
            Contact me
          </ArrowLink>
        </div>

        {/* Hero Portrait Banner */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-surface-subtle border border-border-subtle">
          <Image
            src={profile.portrait}
            alt={`${profile.name} - ${profile.role} Story`}
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 960px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
