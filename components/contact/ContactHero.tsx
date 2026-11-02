import React from "react";
import { pagesConfig } from "@/data/pages";

export default function ContactHero() {
  return (
    <section className="pt-12 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-8">
            <h1 className="text-3xl sm:text-[36px] font-medium leading-[1.28] tracking-tight text-primary mb-3">
              {pagesConfig.contact.title}
            </h1>
            <p className="text-muted text-base leading-relaxed">
              {pagesConfig.contact.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
