import React from "react";
import type { Metadata } from "next";
import { pagesConfig } from "@/data/pages";
import AboutHero from "@/components/about/AboutHero";
import StoryEducation from "@/components/about/StoryEducation";
import PastExperience from "@/components/about/PastExperience";
import SkillsMatrix from "@/components/about/SkillsMatrix";
import SocialSection from "@/components/about/SocialSection";

export const metadata: Metadata = {
  title: pagesConfig.about.title,
  description: pagesConfig.about.seoDescription,
};

export default function AboutPage() {
  return (
    <main className="flex-1 w-full pb-28 sm:pb-32">
      <AboutHero />
      <StoryEducation />
      <PastExperience />
      <SkillsMatrix />
      <SocialSection />
    </main>
  );
}
