"use client";

import React, { useState } from "react";
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
