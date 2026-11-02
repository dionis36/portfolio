"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../ui/Icons";
import NavModal from "./NavModal";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Icons.Home },
  { href: "/about", label: "About", icon: Icons.User },
  { href: "/portfolio", label: "Portfolio", icon: Icons.Folder },
  { href: "/contact", label: "Contact", icon: Icons.Mail },
];

export default function FloatingDock() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setModalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const leftNavItems = navItems.slice(0, 2); // Home, About
  const rightNavItems = navItems.slice(2);   // Portfolio, Contact

  const renderNavItem = (item: NavItem) => {
    const isActive =
      item.href === "/"
        ? pathname === "/" || pathname === "/home"
        : pathname === item.href || pathname.startsWith(`${item.href}/`);
    const Icon = item.icon;

    return (
      <li key={item.href} className="relative group">
        {/* Micro Tooltip on Hover */}
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 hidden sm:block whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium tracking-tight text-white shadow-md opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 z-50"
        >
          {item.label}
          <span
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-full border-[4px] border-transparent border-t-primary"
          />
        </span>

        <Link
          href={item.href}
          aria-label={item.label}
          aria-current={isActive ? "page" : undefined}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
            isActive
              ? "bg-primary text-white shadow-sm"
              : "bg-surface-subtle text-faint hover:bg-surface-hover hover:text-primary"
          }`}
        >
          <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
        </Link>
      </li>
    );
  };

  return (
    <>
      <nav
        aria-label="Floating Navigation Dock"
        className="fixed bottom-5 inset-x-0 z-40 flex justify-center pointer-events-none px-4"
      >
        <div className="pointer-events-auto bg-surface border border-border-subtle rounded-[24px] p-2 sm:p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <ul className="flex items-center gap-1.5 sm:gap-2.5">
            {leftNavItems.map(renderNavItem)}

            {/* Menu Modal Trigger Button (Centered) */}
            <li className="relative group">
              {/* Micro Tooltip on Hover */}
              <span
                role="tooltip"
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 hidden sm:block whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium tracking-tight text-white shadow-md opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 z-50"
              >
                Menu (⌘K)
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 top-full border-[4px] border-transparent border-t-primary"
                />
              </span>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-label="Open Navigation Menu"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  modalOpen
                    ? "bg-primary text-white shadow-sm"
                    : "bg-surface-subtle text-faint hover:bg-surface-hover hover:text-primary"
                }`}
              >
                <Icons.Menu className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              </button>
            </li>

            {rightNavItems.map(renderNavItem)}
          </ul>
        </div>
      </nav>

      {/* Global Navigation Modal */}
      <NavModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
