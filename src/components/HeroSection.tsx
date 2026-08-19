"use client";

import React, { useState } from "react";
import { Download, Mail, MessageSquare, Check, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onShowToast: (msg: string) => void;
}

export default function HeroSection({ onShowToast }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nasuwadio36@gmail.com");
    setCopied(true);
    onShowToast("Email (nasuwadio36@gmail.com) copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Crisp Blueprint Radial Dot Grid Overlay */}
      <div className="absolute inset-0 bg-editorial-dots pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Category Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-3 pt-1.5 pb-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-mono leading-none mb-6">
          <span>Available for Software Engineering Roles</span>
        </div>

        {/* Headline & Editorial Copy */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Dionis Ludovick Nasuwa
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-700 tracking-tight">
            Full-Stack Software Engineer & Systems Architect
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
            Computer Science graduate from <strong className="text-gray-900 font-semibold">UDSM CoICT</strong>. Certified in <strong className="text-gray-900 font-semibold">Full Stack Open (University of Helsinki, Grade 5/5)</strong> and <strong className="text-gray-900 font-semibold">Scrum Fundamentals (SFC™)</strong>. Focused on architecting high-availability TypeScript monorepos, AST code parsers, and enterprise network infrastructure.
          </p>
        </div>

        {/* Clean Neutral Credential Badges */}
        <div className="flex flex-wrap gap-2 pt-6 pb-8">
          <div className="inline-flex items-center justify-center px-3 pt-2 pb-1.5 rounded-lg bg-gray-100/90 border border-gray-200/80 text-gray-800 text-xs font-mono leading-none tabular-nums">
            Helsinki Full Stack Open — Grade 5/5
          </div>
          <div className="inline-flex items-center justify-center px-3 pt-2 pb-1.5 rounded-lg bg-gray-100/90 border border-gray-200/80 text-gray-800 text-xs font-mono leading-none">
            Scrum Fundamentals Certified (SFC™)
          </div>
          <div className="inline-flex items-center justify-center px-3 pt-2 pb-1.5 rounded-lg bg-gray-100/90 border border-gray-200/80 text-gray-800 text-xs font-mono leading-none">
            BSc Computer Science @ UDSM CoICT
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="/DIONIS_NASUWA_CV.pdf"
            download
            className="btn-editorial-liquid flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 active:scale-[0.98] text-xs font-mono transition-all group shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-700 font-mono">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
                <span>nasuwadio36@gmail.com</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/255719231593"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 active:scale-[0.98] text-xs font-mono transition-all group shadow-2xs"
          >
            <MessageSquare className="w-4 h-4 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
