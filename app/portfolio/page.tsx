import React from "react";
import type { Metadata } from "next";
import { pagesConfig } from "@/data/pages";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioList from "@/components/portfolio/PortfolioList";

export const metadata: Metadata = {
  title: pagesConfig.portfolio.title,
  description: pagesConfig.portfolio.seoDescription,
};

export default function PortfolioPage() {
  return (
    <main className="flex-1 w-full pb-12">
      <PortfolioHero />
      <PortfolioList />
    </main>
  );
}
