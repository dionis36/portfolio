"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

// Custom Social SVG Icons
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export default function RecruiterContactHub({ onShowToast }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nasuwadio36@gmail.com");
    setCopiedEmail(true);
    onShowToast("Email (nasuwadio36@gmail.com) copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Crisp Blueprint Radial Dot Grid Overlay (Footer Bookend) */}
      <div className="absolute inset-0 bg-editorial-dots pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="natural-card bg-white p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Info */}
            <div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Let's Connect
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Open for full-time software engineering roles, full-stack projects, or systems architecture opportunities. Available for both local and remote positions.
              </p>

              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Based in Dar es Salaam, Tanzania (EAT / UTC+3)</span>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="space-y-3">
              
              {/* Direct Email Link */}
              <a
                href="mailto:nasuwadio36@gmail.com"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 text-left transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <Mail className="w-4.5 h-4.5 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
                  <div>
                    <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Direct Email</div>
                    <div className="text-sm font-semibold text-gray-900">
                      nasuwadio36@gmail.com
                    </div>
                  </div>
                </div>

                <span className="text-xs font-mono text-gray-500 group-hover:text-gray-900 font-medium">
                  Send Email ↗
                </span>
              </a>

              {/* Separated Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/255719231593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <MessageSquare className="w-4 h-4 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">WhatsApp</div>
                      <div className="text-xs font-semibold text-gray-900 truncate">
                        +255 719 231 593
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 group-hover:text-gray-900 shrink-0">
                    Chat ↗
                  </span>
                </a>

                {/* Phone Direct */}
                <a
                  href="tel:+255754794174"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Phone className="w-4 h-4 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Phone Call</div>
                      <div className="text-xs font-semibold text-gray-900 truncate">
                        +255 754 794 174
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 group-hover:text-gray-900 shrink-0">
                    Call ↗
                  </span>
                </a>
              </div>

              {/* Social Links Matrix */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                <a
                  href="https://github.com/dionis36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-mono font-medium transition-all group min-w-0"
                >
                  <GithubIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
                  <span className="truncate translate-y-[0.5px]">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/dionis-nasuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-mono font-medium transition-all group min-w-0"
                >
                  <LinkedinIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
                  <span className="truncate translate-y-[0.5px]">LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/i.t.s_d.i.o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-mono font-medium transition-all group min-w-0"
                >
                  <InstagramIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 shrink-0 transition-colors" />
                  <span className="truncate translate-y-[0.5px]">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs font-mono text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6">
          <div>
            © {new Date().getFullYear()} Dionis Ludovick Nasuwa.
          </div>
          <div className="flex items-center gap-4">
            <a href="#overview" className="hover:text-gray-900">Back to Top ↑</a>
            <a href="/DIONIS_NASUWA_CV.pdf" download className="hover:text-gray-900">Resume (PDF)</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
