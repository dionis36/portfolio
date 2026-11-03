import React from "react";
import Image from "next/image";
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

            <ArrowLink href="/contact">Contact me</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
