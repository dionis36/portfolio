import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HomeCta from "@/components/home/HomeCta";

export default function HomePage() {
  return (
    <main className="flex-1 w-full pb-16 sm:pb-24">
      <HeroSection />
      <AboutSnippet />
      <FeaturedProjects />
      <HomeCta />
    </main>
  );
}
