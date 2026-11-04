"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Search,
  FileText,
  Mail,
  Phone,
  Folder,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Check,
  Copy,
  ArrowRight,
  X,
  Download,
  Home as HomeIcon,
  User as UserIcon,
  HelpCircle,
} from "lucide-react";
import { Icons } from "../ui/Icons";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { educationList } from "@/data/education";
import { faqs } from "@/data/faqs";

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Credentials" | "Experience" | "FAQs" | "Quick Actions";
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  action: () => void;
  keywords?: string[];
}

const navPages = [
  { href: "/", label: "Home", icon: HomeIcon, desc: "Hero bio & featured work" },
  { href: "/about", label: "About", icon: UserIcon, desc: "Story, credentials & history" },
  { href: "/portfolio", label: "Portfolio", icon: Folder, desc: "9 case studies & systems" },
  { href: "/contact", label: "Contact", icon: Mail, desc: "Inquiries & WhatsApp" },
];

export default function NavModal({ isOpen, onClose }: NavModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus search input on open (desktop fine-pointer only) & lock scroll
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSelectedIndex(0);
      setSearch("");

      // Only auto-focus on desktop devices with fine pointer (mouse/trackpad) and screen width >= 640px.
      // On mobile/touch devices, auto-focus forces the virtual keyboard to slide up and obscure navigation cards.
      const isDesktop =
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: fine)").matches &&
        window.innerWidth >= 640;

      if (isDesktop) {
        timer = setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      }
    } else {
      document.body.style.overflow = "";
      setSearch("");
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = "";
      if (timer) clearTimeout(timer);
    };
  }, [isOpen]);

  const copyText = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  // Jump to specific experience card on the about page
  const navigateToExperience = useCallback((expId: string) => {
    onClose();
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/about") {
        const el = document.getElementById(expId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      router.push(`/about#${expId}`);
      // Fallback timeout to ensure smooth scroll after Next.js page mount
      setTimeout(() => {
        document.getElementById(expId)?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }, [router, onClose]);
 
  // Jump to specific FAQ on the contact page
  const navigateToFaq = useCallback((faqId: string) => {
    onClose();
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/contact") {
        window.location.hash = faqId;
        window.dispatchEvent(new HashChangeEvent("hashchange"));
        return;
      }
      router.push(`/contact#${faqId}`);
      setTimeout(() => {
        document.getElementById(faqId)?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }, [router, onClose]);

  // Default interactive items (4 navigation pages + 4 quick actions)
  const defaultItems = useMemo(() => [
    {
      id: "def-home",
      label: "Home",
      desc: "Hero bio & featured work",
      icon: HomeIcon,
      action: () => { router.push("/"); onClose(); },
    },
    {
      id: "def-about",
      label: "About",
      desc: "Story, credentials & history",
      icon: UserIcon,
      action: () => { router.push("/about"); onClose(); },
    },
    {
      id: "def-portfolio",
      label: "Portfolio",
      desc: "9 case studies & systems",
      icon: Folder,
      action: () => { router.push("/portfolio"); onClose(); },
    },
    {
      id: "def-contact",
      label: "Contact",
      desc: "Inquiries & WhatsApp",
      icon: Mail,
      action: () => { router.push("/contact"); onClose(); },
    },
    {
      id: "def-resume",
      label: "Download Resume (PDF)",
      desc: "DIONIS_NASUWA_CV.pdf",
      action: () => { window.open("/DIONIS_NASUWA_CV.pdf", "_blank"); onClose(); },
    },
    {
      id: "def-email",
      label: "Copy Email",
      desc: "nasuwadio36@gmail.com",
      action: () => { copyText("nasuwadio36@gmail.com", "copy-email-btn"); },
    },
    {
      id: "def-whatsapp",
      label: "WhatsApp",
      desc: "+255 620 796 031",
      action: () => { window.open("https://wa.me/255620796031", "_blank"); onClose(); },
    },
    {
      id: "def-github",
      label: "GitHub",
      desc: "github.com/dionis36",
      action: () => { window.open("https://github.com/dionis36", "_blank"); onClose(); },
    },
  ], [router, onClose, copyText]);

  // Compile all searchable commands
  const allCommands = useMemo<CommandItem[]>(() => {
    const list: CommandItem[] = [];

    // 1. Pages
    navPages.forEach((p) => {
      list.push({
        id: `page-${p.label}`,
        category: "Navigation",
        label: p.label,
        subtitle: p.desc,
        icon: p.icon,
        action: () => {
          router.push(p.href);
          onClose();
        },
        keywords: [p.label, p.desc, p.href],
      });
    });

    // 2. Projects
    projects.forEach((proj) => {
      list.push({
        id: `project-${proj.slug}`,
        category: "Projects",
        label: proj.title,
        subtitle: `${proj.category} • ${proj.services}`,
        icon: Folder,
        badge: proj.category,
        action: () => {
          router.push(`/portfolio/${proj.slug}`);
          onClose();
        },
        keywords: [proj.title, proj.services, proj.deliverables, proj.description],
      });
    });

    // 3. Credentials & Certifications
    educationList.forEach((edu, idx) => {
      list.push({
        id: `edu-${edu.degree}`,
        category: "Credentials",
        label: edu.degree,
        subtitle: `${edu.school} (${edu.period})`,
        icon: GraduationCap,
        badge: edu.grade,
        action: () => {
          if (edu.url) {
            window.open(edu.url, "_blank", "noopener,noreferrer");
          } else {
            router.push("/about#education");
          }
          onClose();
        },
        keywords: [edu.degree, edu.school, edu.grade || "", "certificate", "degree", "education"],
      });
    });

    // 4. Experience Roles (Clicking/Enter jumps directly to that experience card on /about)
    experiences.forEach((exp) => {
      list.push({
        id: `exp-${exp.id}`,
        category: "Experience",
        label: `${exp.role} at ${exp.company}`,
        subtitle: exp.period,
        icon: Briefcase,
        action: () => {
          navigateToExperience(exp.id);
        },
        keywords: [exp.role, exp.company, exp.period, "job", "work", "experience", "halotel", "digitalops", "mainstream", "starthub", "tpc"],
      });
    });

    // 5. Frequently Asked Questions
    faqs.forEach((faq) => {
      list.push({
        id: `faq-${faq.id}`,
        category: "FAQs",
        label: faq.question,
        subtitle: faq.answer.length > 85 ? faq.answer.slice(0, 85) + "..." : faq.answer,
        icon: HelpCircle,
        action: () => {
          navigateToFaq(faq.id);
        },
        keywords: [
          faq.question,
          faq.answer,
          "faq",
          "frequently asked questions",
          "halotel",
          "contract",
          "availability",
          "research",
          "digitalops",
          "freelance",
          "remote",
          "consulting",
        ],
      });
    });

    // 6. Quick Actions
    list.push(
      {
        id: "act-resume",
        category: "Quick Actions",
        label: "Download Resume (PDF)",
        subtitle: "DIONIS_NASUWA_CV.pdf",
        icon: Download,
        action: () => {
          window.open("/DIONIS_NASUWA_CV.pdf", "_blank");
          onClose();
        },
        keywords: ["cv", "resume", "pdf", "download"],
      },
      {
        id: "act-email",
        category: "Quick Actions",
        label: "Copy Email Address",
        subtitle: "nasuwadio36@gmail.com",
        icon: Mail,
        action: () => {
          copyText("nasuwadio36@gmail.com", "act-email");
        },
        keywords: ["email", "mail", "contact", "nasuwadio36@gmail.com"],
      },
      {
        id: "act-whatsapp",
        category: "Quick Actions",
        label: "Open WhatsApp Chat",
        subtitle: "+255 620 796 031",
        icon: Phone,
        action: () => {
          window.open("https://wa.me/255620796031", "_blank");
          onClose();
        },
        keywords: ["whatsapp", "phone", "chat", "message"],
      },
      {
        id: "act-github",
        category: "Quick Actions",
        label: "Open GitHub Profile",
        subtitle: "github.com/dionis36",
        icon: Icons.GitHub,
        action: () => {
          window.open("https://github.com/dionis36", "_blank");
          onClose();
        },
        keywords: ["github", "code", "repositories", "dionis36"],
      },
      {
        id: "act-linkedin",
        category: "Quick Actions",
        label: "Open LinkedIn Profile",
        subtitle: "linkedin.com/in/dionis-nasuwa",
        icon: Icons.LinkedIn,
        action: () => {
          window.open("https://linkedin.com/in/dionis-nasuwa", "_blank");
          onClose();
        },
        keywords: ["linkedin", "profile", "connect"],
      }
    );

    return list;
  }, [router, onClose, copyText, navigateToExperience, navigateToFaq]);

  // Filter commands by search query
  const filteredCommands = useMemo(() => {
    if (!search.trim()) return [];
    const query = search.toLowerCase().trim();
    return allCommands.filter((cmd) => {
      const matchLabel = cmd.label.toLowerCase().includes(query);
      const matchSubtitle = cmd.subtitle.toLowerCase().includes(query);
      const matchCategory = cmd.category.toLowerCase().includes(query);
      const matchKeywords = cmd.keywords?.some((k) => k.toLowerCase().includes(query));
      return matchLabel || matchSubtitle || matchCategory || matchKeywords;
    });
  }, [search, allCommands]);

  // Fully functional keyboard navigation for both default state and active search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      const isSearching = search.trim().length > 0;
      const totalItems = isSearching ? filteredCommands.length : defaultItems.length;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (totalItems === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (isSearching) {
          setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
        } else {
          // 2-column grid navigation in default state (0,1 -> 2,3 -> 4,5 -> 6,7 -> wrap)
          setSelectedIndex((prev) => {
            const next = prev + 2;
            return next < totalItems ? next : prev % 2;
          });
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (isSearching) {
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
        } else {
          setSelectedIndex((prev) => {
            const next = prev - 2;
            return next >= 0 ? next : totalItems - 2 + (prev % 2);
          });
        }
      } else if (e.key === "ArrowRight") {
        if (!isSearching) {
          e.preventDefault();
          setSelectedIndex((prev) => (prev % 2 === 0 ? prev + 1 : prev));
        }
      } else if (e.key === "ArrowLeft") {
        if (!isSearching) {
          e.preventDefault();
          setSelectedIndex((prev) => (prev % 2 === 1 ? prev - 1 : prev));
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (isSearching) {
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
        } else {
          if (defaultItems[selectedIndex]) {
            defaultItems[selectedIndex].action();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, search, filteredCommands, defaultItems, selectedIndex]);

  if (!isOpen) return null;

  const isSearching = search.trim().length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-[4px] transition-all font-sans"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] bg-surface rounded-[24px] border border-border shadow-[0_24px_64px_rgba(0,0,0,0.18)] flex flex-col max-h-[82vh] overflow-hidden relative font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-surface shrink-0">
          <Search className="w-4 h-4 text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, credentials, or pages..."
            className="w-full bg-transparent text-sm sm:text-base text-primary placeholder:text-faint focus:outline-none font-sans"
          />
          {search ? (
            <button
              onClick={() => {
                setSearch("");
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className="text-xs text-muted hover:text-primary transition-colors px-1 py-0.5 font-sans"
            >
              Clear
            </button>
          ) : (
            <kbd className="hidden md:inline-flex items-center gap-0.5 text-[10px] font-sans font-medium border border-border-subtle bg-surface-subtle px-1.5 py-0.5 rounded text-faint">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            aria-label="Close command menu"
            className="w-8 h-8 rounded-full bg-surface-subtle hover:bg-surface-hover text-muted hover:text-primary flex items-center justify-center transition-colors shrink-0 ml-1 cursor-pointer"
          >
            <Icons.Close className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1 overscroll-contain">
          {!isSearching ? (
            /* DEFAULT STATE: Fully Keyboard-Navigable Navigation + Quick Actions */
            <>
              {/* Primary Navigation */}
              <div>
                <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-3 font-sans">
                  Navigation
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {navPages.map((page, idx) => {
                    const isSelected = selectedIndex === idx;
                    const isActive =
                      page.href === "/"
                        ? pathname === "/" || pathname === "/home"
                        : pathname === page.href || pathname.startsWith(`${page.href}/`);
                    const PageIcon = page.icon;

                    return (
                      <div
                        key={page.href}
                        onClick={() => {
                          router.push(page.href);
                          onClose();
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isActive
                            ? isSelected
                              ? "bg-primary text-white border-primary shadow-sm ring-2 ring-primary/20"
                              : "bg-primary text-white border-primary shadow-sm"
                            : isSelected
                            ? "bg-surface-hover border-border shadow-xs text-primary"
                            : "bg-surface-subtle border-border-subtle hover:border-border hover:bg-surface-hover text-primary"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <PageIcon className={`w-4 h-4 ${isActive ? "text-white" : isSelected ? "text-primary" : "text-muted"}`} />
                          <div className="text-left">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className={`block text-sm font-medium leading-none ${isActive ? "text-white" : "text-primary"}`}>
                                {page.label}
                              </span>
                            </div>
                            <span className={`block text-[11px] leading-tight font-sans ${isActive ? "text-white/75" : "text-faint"}`}>
                              {page.desc}
                            </span>
                          </div>
                        </div>
                        <Icons.ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "text-white" : isSelected ? "text-primary translate-x-0.5" : "text-faint"}`} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <span className="block text-xs uppercase tracking-wider font-semibold text-faint mb-3 font-sans">
                  Quick Actions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Download Resume (Index 4) */}
                  <div
                    onClick={defaultItems[4].action}
                    onMouseEnter={() => setSelectedIndex(4)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all text-xs font-medium cursor-pointer ${
                      selectedIndex === 4
                        ? "bg-surface-hover border-border text-primary shadow-xs"
                        : "bg-surface-subtle border-border-subtle hover:border-border hover:bg-surface-hover text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Download className="w-3.5 h-3.5 text-muted" />
                      <span className="font-sans">Download Resume (PDF)</span>
                    </div>
                    <Icons.ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${selectedIndex === 4 ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-faint"}`} />
                  </div>

                  {/* Copy Email (Index 5) */}
                  <div
                    onClick={defaultItems[5].action}
                    onMouseEnter={() => setSelectedIndex(5)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all text-xs font-medium cursor-pointer ${
                      selectedIndex === 5
                        ? "bg-surface-hover border-border text-primary shadow-xs"
                        : "bg-surface-subtle border-border-subtle hover:border-border hover:bg-surface-hover text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {copiedId === "copy-email-btn" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Mail className="w-3.5 h-3.5 text-muted" />
                      )}
                      <span className="font-sans">
                        {copiedId === "copy-email-btn" ? "Email Copied!" : "Copy Email"}
                      </span>
                    </div>
                    <span className="text-[10px] text-faint font-sans">dio</span>
                  </div>

                  {/* WhatsApp (Index 6) */}
                  <div
                    onClick={defaultItems[6].action}
                    onMouseEnter={() => setSelectedIndex(6)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all text-xs font-medium cursor-pointer ${
                      selectedIndex === 6
                        ? "bg-surface-hover border-border text-primary shadow-xs"
                        : "bg-surface-subtle border-border-subtle hover:border-border hover:bg-surface-hover text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-muted" />
                      <span className="font-sans">WhatsApp (+255 620 796 031)</span>
                    </div>
                    <Icons.ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${selectedIndex === 6 ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-faint"}`} />
                  </div>

                  {/* GitHub Profile (Index 7) */}
                  <div
                    onClick={defaultItems[7].action}
                    onMouseEnter={() => setSelectedIndex(7)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all text-xs font-medium cursor-pointer ${
                      selectedIndex === 7
                        ? "bg-surface-hover border-border text-primary shadow-xs"
                        : "bg-surface-subtle border-border-subtle hover:border-border hover:bg-surface-hover text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icons.GitHub className="w-3.5 h-3.5 text-muted" />
                      <span className="font-sans">GitHub (@dionis36)</span>
                    </div>
                    <Icons.ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${selectedIndex === 7 ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-faint"}`} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* ACTIVE SEARCH STATE */
            <div className="space-y-2">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm font-medium text-primary mb-1 font-sans">
                    No results found
                  </p>
                  <p className="text-xs text-muted font-sans">
                    No match for &quot;{search}&quot;. Try searching for &quot;PaySim&quot;, &quot;Halotel&quot;, &quot;Resume&quot;, or &quot;Cisco&quot;.
                  </p>
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  const CmdIcon = cmd.icon;

                  return (
                    <div
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? "bg-surface-hover border border-border shadow-xs"
                          : "hover:bg-surface-hover border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-3">
                        <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center shrink-0">
                          {cmd.id === "act-email" && copiedId === "act-email" ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <CmdIcon className="w-4 h-4 text-muted" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-primary truncate font-sans">
                              {cmd.id === "act-email" && copiedId === "act-email"
                                ? "Email Address Copied!"
                                : cmd.label}
                            </span>
                            {cmd.badge && (
                              <span className="shrink-0 text-[10px] font-sans font-medium text-secondary bg-surface-subtle border border-border-subtle rounded px-1.5 py-0.5">
                                {cmd.badge}
                              </span>
                            )}
                          </div>
                          <span className="block text-xs text-muted truncate font-sans">
                            {cmd.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* 100% Plus Jakarta Sans for the category tag */}
                        <span className="text-[10px] uppercase tracking-wider font-sans font-semibold text-faint">
                          {cmd.category}
                        </span>
                        {isSelected && (
                          <Icons.ArrowRight className="w-3.5 h-3.5 text-primary" />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>

        {/* Footer info bar (Desktop only - hidden on mobile & tablets) */}
        <div className="hidden md:flex px-5 py-3 border-t border-border bg-surface-subtle/50 items-center justify-between text-[11px] text-faint font-sans">
          <span>Navigate with <kbd className="font-sans font-medium bg-surface border border-border-subtle px-1.5 py-0.5 rounded text-[10px]">↑</kbd> <kbd className="font-sans font-medium bg-surface border border-border-subtle px-1.5 py-0.5 rounded text-[10px]">↓</kbd></span>
          <span>Select with <kbd className="font-sans font-medium bg-surface border border-border-subtle px-1.5 py-0.5 rounded text-[10px]">↵ Enter</kbd></span>
        </div>
      </div>
    </div>
  );
}
