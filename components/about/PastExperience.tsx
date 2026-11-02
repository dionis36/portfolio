import React from "react";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Icons } from "../ui/Icons";

export default function PastExperience() {
  return (
    <section>
      <div className="max-w-[960px] mx-auto px-6 py-12 sm:py-16 border-t border-border">
        {/* Header sitting on 12-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-8 sm:mb-10">
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-[26px] font-medium leading-[1.38] text-primary mb-2">
              My Experience
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Roles in data analysis, backend systems, and enterprise infrastructure.
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              className="scroll-mt-24 bg-surface rounded-[20px] border border-border-subtle shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:border-border"
            >
              {/* Top Bar */}
              <div className="px-6 pt-6 pb-2 sm:px-7 sm:pt-7 sm:pb-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-border-subtle p-1 flex items-center justify-center shrink-0 overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={36}
                      height={36}
                      className="w-full h-full object-contain filter grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-primary">
                    {exp.company}
                  </h3>
                </div>

                {exp.website && (
                  <Link
                    href={exp.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted hover:text-primary transition-colors font-medium"
                  >
                    <span>Visit</span>
                    <Icons.ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              {/* Bottom Details Grid */}
              <div className="px-6 pb-6 pt-2 sm:px-7 sm:pb-7 sm:pt-3 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {/* Meta Column */}
                <div className="md:col-span-5 space-y-4">
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                      Title
                    </span>
                    <span className="text-sm sm:text-base font-medium text-primary">
                      {exp.role}
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                      Period
                    </span>
                    <span className="text-sm text-muted">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description Column */}
                <div className="md:col-span-7">
                  <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                    Description
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
