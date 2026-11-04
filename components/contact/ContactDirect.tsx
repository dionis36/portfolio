"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactDirect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pb-8 sm:pb-10">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* 1. Direct Email Card */}
          <div className="bg-surface rounded-2xl border border-border-subtle p-5 sm:p-6 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-primary mb-3">
                <Mail className="w-5 h-5" strokeWidth={1.65} />
              </div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm sm:text-base font-medium text-primary hover:text-secondary transition-colors break-all block mb-3"
              >
                {profile.email}
              </a>
            </div>
            <div className="pt-2 border-t border-border-subtle flex items-center justify-between">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
              {/* <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-primary transition-colors"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a> */}
            </div>
          </div>

          {/* 2. Direct WhatsApp / Phone Card */}
          <div className="bg-surface rounded-2xl border border-border-subtle p-5 sm:p-6 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-primary mb-3">
                <MessageSquare className="w-5 h-5" strokeWidth={1.65} />
              </div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                WhatsApp & Calls
              </span>
              <a
                href="https://wa.me/255620796031"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-medium text-primary hover:text-secondary transition-colors block mb-3"
              >
                +255 620 796 031
              </a>
            </div>
            <div className="pt-2 border-t border-border-subtle">
              <a
                href="https://wa.me/255620796031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary transition-colors"
              >
                <span>Open WhatsApp chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3. Location & Availability Card */}
          <div className="bg-surface rounded-2xl border border-border-subtle p-5 sm:p-6 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-primary mb-3">
                <MapPin className="w-5 h-5" strokeWidth={1.65} />
              </div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-1">
                Base Location
              </span>
              <p className="text-sm sm:text-base font-medium text-primary mb-1">
                Dar es Salaam, Tanzania
              </p>
            </div>
            <div className="pt-2 border-t border-border-subtle">
              <span className="text-xs text-muted block">
                East Africa Time (UTC+3) • Remote & On-site
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
