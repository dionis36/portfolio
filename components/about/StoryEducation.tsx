import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { educationList } from "@/data/education";
import { Icons } from "../ui/Icons";

export default function StoryEducation() {
  return (
    <section>
      <div className="max-w-[960px] mx-auto px-6 py-12 sm:py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Left: My Story */}
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-[26px] font-medium leading-[1.38] text-primary mb-5">
              My Story
            </h2>
            <div className="space-y-4 text-muted text-base leading-relaxed">
              {profile.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: Education */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium text-primary mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {educationList.map((item, idx) => (
                <div
                  key={item.degree}
                  className={idx > 0 ? "border-t border-border-subtle pt-5" : ""}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-primary leading-snug">
                      {item.degree}
                    </h4>
                    {item.grade && (
                      <span className="shrink-0 text-[11px] font-medium text-secondary bg-surface-subtle border border-border-subtle rounded px-1.5 py-0.5">
                        {item.grade}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted mt-1">
                    {item.school}
                  </div>
                  <div className="text-xs text-faint mt-1.5 flex items-center justify-between">
                    <span>{item.period}</span>
                    {item.url && (
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-0.5 text-xs text-muted hover:text-primary transition-colors font-medium"
                      >
                        <span>Verify</span>
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
