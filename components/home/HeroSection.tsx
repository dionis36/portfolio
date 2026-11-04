import React from "react";
import Image from "next/image";
import { FileText, ArrowUpRight } from "lucide-react";
import ArrowLink from "../ui/ArrowLink";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-8">
            {/* Avatar Thumbnail */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-[152px] lg:h-[152px] rounded-full overflow-hidden shrink-0 border-2 border-border shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-6 sm:mb-8 md:mb-9 transition-all duration-300">
              <Image
                src={profile.avatar}
                alt={`${profile.name} - ${profile.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 152px"
                priority
              />
            </div>

            {/* Intro Text */}
            <h1 className="text-3xl sm:text-[38px] font-medium leading-[1.26] tracking-tight text-primary mb-3 sm:mb-4">
              {profile.greetingLine1}
              <br />
              {profile.greetingLine2}
            </h1>

            <p className="text-muted text-base sm:text-[17px] leading-relaxed mb-6">
              {profile.heroBio}
            </p>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <a
                href="/DIONIS_NASUWA_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-hover border border-border text-primary text-sm font-medium hover:bg-[#dedede] transition-all duration-250 ease-out shadow-[0_2px_8px_0_rgba(0,0,0,0.02)] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-muted group-hover:text-primary transition-colors duration-250 ease-out" strokeWidth={1.65} />
                <span>Download CV</span>
                <span className="inline-flex items-center transform transition-transform duration-250 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors duration-250 ease-out" />
                </span>
              </a>
              <ArrowLink href="/contact">Contact me</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
