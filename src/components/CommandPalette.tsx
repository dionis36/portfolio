"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  FileText,
  Mail,
  Phone,
  Code2,
  Briefcase,
  Cpu,
  GraduationCap,
  X,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

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

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onShowToast,
}: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyText = (text: string, label: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onShowToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const commands = [
    {
      id: "copy-email",
      category: "Contact Actions",
      label: "Copy Email (nasuwadio36@gmail.com)",
      icon: Mail,
      action: () => copyText("nasuwadio36@gmail.com", "Email", "copy-email"),
    },
    {
      id: "copy-phone",
      category: "Contact Actions",
      label: "Copy WhatsApp (+255 719 231 593)",
      icon: Phone,
      action: () => copyText("+255719231593", "WhatsApp Number", "copy-phone"),
    },
    {
      id: "download-cv",
      category: "Resume",
      label: "Download Resume PDF (DIONIS_NASUWA_CV.pdf)",
      icon: FileText,
      action: () => {
        window.open("/DIONIS_NASUWA_CV.pdf", "_blank");
        onClose();
      },
    },
    {
      id: "nav-projects",
      category: "Navigation",
      label: "Jump to Projects (Plaqode & Strata)",
      icon: Code2,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-experience",
      category: "Navigation",
      label: "Jump to Work Experience (Mainstream Group, StartHub, TPC)",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-skills",
      category: "Navigation",
      label: "Jump to Skills Matrix",
      icon: Cpu,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-certifications",
      category: "Navigation",
      label: "Jump to Certifications (Helsinki 5/5 & Scrum SFC)",
      icon: GraduationCap,
      action: () => {
        document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "github-link",
      category: "External Profiles",
      label: "Open GitHub Profile (github.com/dionis36)",
      icon: GithubIcon,
      action: () => {
        window.open("https://github.com/dionis36", "_blank");
        onClose();
      },
    },
    {
      id: "linkedin-link",
      category: "External Profiles",
      label: "Open LinkedIn Profile (linkedin.com/in/dionis-nasuwa)",
      icon: LinkedinIcon,
      action: () => {
        window.open("https://linkedin.com/in/dionis-nasuwa", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-gray-900/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden text-gray-900 animate-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-200 gap-3">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-sm font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-gray-500 text-xs font-mono">
              No matching commands.
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const Icon = cmd.icon;
              const isCopied = copiedId === cmd.id;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-100 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-900">
                        {cmd.label}
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono">
                        {cmd.category}
                      </div>
                    </div>
                  </div>

                  {cmd.id.startsWith("copy-") ? (
                    <div className="text-[11px] font-mono text-gray-500 flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-gray-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700" />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Command Footer */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-[11px] text-gray-500 flex items-center justify-between font-mono">
          <span>Navigate using ↑ ↓ or ESC</span>
          <span className="px-1.5 py-0.5 rounded bg-white border border-gray-200 text-gray-700">
            ⌘K / ESC
          </span>
        </div>
      </div>
    </div>
  );
}
