"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { Icons } from "../ui/Icons";

export default function ContactFaqs() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  // Deep-linking: open and scroll to accordion item if hash matches
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && faqs.some((f) => f.id === hash)) {
        setOpenId(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <div className="max-w-[960px] mx-auto px-6 py-12 sm:py-16 border-t border-border">
        {/* Header sitting on 12-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-8 sm:mb-10">
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-[26px] font-medium leading-[1.38] text-primary mb-2">
              FAQs
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Answers about my availability, consulting engagements, research focus, and software work.
            </p>
          </div>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-surface rounded-[20px] border border-border-subtle shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-200 scroll-mt-28"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 hover:bg-surface-subtle transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-medium text-primary">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-surface-subtle flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-surface-hover" : ""
                    }`}
                  >
                    <Icons.Close className="w-3.5 h-3.5 text-primary" />
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-muted leading-relaxed border-t border-border-subtle pt-4 space-y-3">
                      <p>{faq.answer}</p>
                      {faq.link && (
                        <div className="pt-1">
                          <Link
                            href={faq.link.href}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-muted transition-colors group"
                          >
                            <span>{faq.link.text}</span>
                            <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
