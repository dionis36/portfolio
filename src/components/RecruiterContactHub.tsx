"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin, Clock } from "lucide-react";

// Custom Social SVG Icons
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Response Time: Typically within 1–2 hours</span>
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
              <div className="grid grid-cols-3 gap-3 pt-1">
                <a
                  href="https://github.com/dionis36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-mono font-medium transition-all group"
                >
                  <GithubIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/dionis-nasuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-mono font-medium transition-all group"
                >
                  <LinkedinIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://instagram.com/dionis_nasuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-mono font-medium transition-all group"
                >
                  <InstagramIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
                  <span>Instagram</span>
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
