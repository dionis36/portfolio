"use client";

import React, { useState, useEffect } from "react";
import { Download, Search, Menu, X, FileText } from "lucide-react";

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

  const navLinks = [
    { name: "About", href: "#overview" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? "bg-white/75 backdrop-blur-md border-gray-200/80 py-3 shadow-2xs"
          : "bg-[#fafafa]/80 backdrop-blur-md border-gray-200/50 py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center font-mono text-xs font-bold text-white shadow-xs">
            DN
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 text-sm tracking-tight group-hover:text-gray-600 transition-colors">
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
            className="flex items-center gap-1.5 text-xs text-gray-600 bg-white/80 backdrop-blur-xs border border-gray-200 hover:border-gray-300 hover:text-gray-900 px-3 py-1.5 rounded-lg transition-all shadow-2xs font-mono"
            title="Press Cmd + K to search"
          >
            <Search className="w-3.5 h-3.5 text-gray-500" />
            <span>Search</span>
            <kbd className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">
              ⌘K
            </kbd>
          </button>

          <a
            href="/DIONIS_NASUWA_CV.pdf"
            download
            className="btn-editorial-liquid flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-lg shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCmd}
            className="p-2 rounded-lg bg-white/80 border border-gray-200 text-gray-600"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/80 border border-gray-200 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-gray-900 py-1.5 font-medium border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="/DIONIS_NASUWA_CV.pdf"
              download
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-gray-900 text-white py-2.5 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
