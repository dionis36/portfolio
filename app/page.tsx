import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <main className="flex-1 w-full pb-12">
      <HeroSection />
      <AboutSnippet />
      <FeaturedProjects />
    </main>
  );
}
