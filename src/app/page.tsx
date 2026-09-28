"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import HeroSection from "@/components/HeroSection";
import ProofMetricsBar from "@/components/ProofMetricsBar";
import ProjectsBentoGrid from "@/components/ProjectsBentoGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillMatrix from "@/components/SkillMatrix";
import CertificationsSection from "@/components/CertificationsSection";
import RecruiterContactHub from "@/components/RecruiterContactHub";
import Toast from "@/components/Toast";

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global intercept for all anchor links to use Lenis smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        // If it's just "#", scroll to top. Otherwise, scroll to the ID.
        if (href === "#") {
          lenis.scrollTo(0);
        } else {
          lenis.scrollTo(href);
        }
      }
    };

    document.documentElement.addEventListener("click", handleAnchorClick);

    return () => {
      document.documentElement.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-gray-900 selection:bg-gray-200 selection:text-gray-900">
      {/* Navigation Header */}
      <Navbar onOpenCmd={() => setCmdOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection onShowToast={showToast} />
        <ProofMetricsBar />
        <ProjectsBentoGrid />
        <ExperienceTimeline />
        <SkillMatrix />
        <CertificationsSection />
        <RecruiterContactHub onShowToast={showToast} />
      </main>

      {/* Recruiter Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
