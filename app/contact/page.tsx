import React from "react";
import type { Metadata } from "next";
import { pagesConfig } from "@/data/pages";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import SocialSection from "@/components/about/SocialSection";
import ContactFaqs from "@/components/contact/ContactFaqs";

export const metadata: Metadata = {
  title: pagesConfig.contact.title,
  description: pagesConfig.contact.seoDescription,
};

export default function ContactPage() {
  return (
    <main className="flex-1 w-full pb-12">
      <ContactHero />
      <ContactForm />
      <SocialSection />
      <ContactFaqs />
    </main>
  );
}
