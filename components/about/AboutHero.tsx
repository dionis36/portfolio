import React from "react";
import Image from "next/image";
import { FileText, ArrowUpRight } from "lucide-react";
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
          <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3.5 sm:gap-2.5 shrink-0">
            <a
              href="/DIONIS_NASUWA_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-hover border border-border text-primary text-xs sm:text-sm font-medium hover:bg-[#dedede] transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.02)] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors" strokeWidth={1.65} />
              <span>Download CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
            </a>
            <ArrowLink href="/contact">
              Contact me
            </ArrowLink>
          </div>
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
