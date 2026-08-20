"use client";

import React, { useState, useEffect } from "react";
import { Download, Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenCmd: () => void;
}

export default function Navbar({ onOpenCmd }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#overview" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  // Framer Motion Variants - Cohesive unified open/close transition
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1] as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1] as const,
        delayChildren: 0.02,
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -4 },
    open: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" as const } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        mobileMenuOpen
          ? "bg-[#080a0f] border-white/10 py-3.5"
          : scrolled
          ? "bg-white/75 backdrop-blur-md border-gray-200/80 py-3.5 shadow-2xs"
          : "bg-[#fafafa]/80 backdrop-blur-md border-gray-200/50 py-3.5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-3 group">
          <img
            src="/dio.png"
            alt="Dionis Nasuwa Logo"
            className="w-8 h-8 rounded-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className={`font-semibold text-sm tracking-tight transition-colors ${
              mobileMenuOpen ? "text-white" : "text-gray-900 group-hover:text-gray-600"
            }`}>
              Dionis Nasuwa
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/60 border border-gray-200/70 rounded-full px-3.5 py-1 backdrop-blur-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-600 hover:text-gray-900 px-3 py-1 rounded-full transition-colors hover:bg-white/80"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenCmd}
            className="h-7 inline-flex items-center gap-1.5 text-xs text-gray-600 bg-white/80 backdrop-blur-xs border border-gray-200 hover:border-gray-300 hover:text-gray-900 px-3 rounded-lg transition-all shadow-2xs font-mono cursor-pointer"
            title="Press Cmd + K to search"
          >
            <Search className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="translate-y-[1.5px]">Search</span>
            <kbd className="h-4 inline-flex items-center justify-center text-[10px] font-mono bg-gray-100/90 px-1.5 rounded text-gray-500 border border-gray-200/80 translate-y-[0.5px]">
              ⌘K
            </kbd>
          </button>

          <a
            href="/DIONIS_NASUWA_CV.pdf"
            download
            className="btn-editorial-liquid h-7 inline-flex items-center gap-2 text-xs font-medium px-3.5 rounded-lg shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span className="translate-y-[0.5px]">Resume (PDF)</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCmd}
            className={`p-2 rounded-lg border active:scale-95 transition-all ${
              mobileMenuOpen
                ? "bg-white/10 border-white/10 text-gray-300"
                : "bg-white/80 border-gray-200 text-gray-600"
            }`}
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#080a0f] text-white border border-[#1e2638] active:scale-95 transition-transform shadow-xs cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gray-200" /> : <Menu className="w-5 h-5 text-gray-200" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Solid Dark Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="sm:hidden absolute top-full left-0 right-0 h-[calc(100dvh-100%)] z-40 bg-[#080a0f] px-6 py-6 overflow-y-auto flex flex-col justify-between border-t border-white/10"
          >
            {/* Top Navigation Links */}
            <div className="pt-2">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={itemVariants}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xl font-semibold text-gray-100 hover:text-white px-4 py-4 rounded-2xl hover:bg-white/10 active:bg-white/15 transition-all group border border-transparent hover:border-white/10"
                  >
                    <span className="tracking-tight">{link.name}</span>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Action Section (Resume Download) */}
            <motion.div variants={itemVariants} className="pt-6 mt-6 border-t border-white/10 pb-4">
              <a
                href="/DIONIS_NASUWA_CV.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 text-base font-semibold bg-white text-gray-900 hover:bg-gray-100 active:scale-[0.98] py-4 rounded-2xl transition-all shadow-lg"
              >
                <Download className="w-5 h-5 text-gray-900" />
                <span>Download Resume (PDF)</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


