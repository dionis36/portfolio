import React from "react";
import ArrowLink from "@/components/ui/ArrowLink";

export default function HomeCta() {
  return (
    <section className="pt-8 sm:pt-12">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="bg-surface rounded-[24px] border border-border-subtle p-8 sm:p-12 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] text-center">
          <h2 className="text-2xl sm:text-[28px] font-medium text-primary mb-3">
            Get in touch and let’s talk<br className="hidden sm:inline" /> about your project
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[440px] mx-auto mb-6">
            Have a product idea or need assistance with your data system? Let’s create something great together.
          </p>
          <div className="flex justify-center">
            <ArrowLink href="/contact" className="text-base font-semibold">
              Get in touch
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
