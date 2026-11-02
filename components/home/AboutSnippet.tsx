import React from "react";
import Link from "next/link";
import ArrowLink from "../ui/ArrowLink";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { Icons } from "../ui/Icons";

export default function AboutSnippet() {
  return (
    <section>
      <div className="py-12 sm:py-16 max-w-[960px] mx-auto px-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Left Column: Bio */}
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-[26px] font-medium leading-[1.38] text-primary mb-4">
              About Me
            </h2>
            <div className="space-y-4 text-muted text-base leading-relaxed mb-6">
              {profile.aboutBioShort.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <ArrowLink href="/about">More about me</ArrowLink>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium text-primary mb-6">
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={idx > 0 ? "border-t border-border-subtle pt-5" : ""}
                >
                  <h4 className="text-sm font-semibold text-primary leading-snug">
                    {exp.role}
                  </h4>
                  <div className="text-sm text-muted mt-1">
                    {exp.company}
                  </div>
                  <div className="text-xs text-faint mt-1.5 flex items-center justify-between">
                    <span>{exp.period}</span>
                    {exp.website && (
                      <Link
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-0.5 text-xs text-muted hover:text-primary transition-colors font-medium"
                      >
                        <span>Visit</span>
                        <Icons.ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
