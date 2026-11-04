import React from "react";
import type { Metadata } from "next";
import { pagesConfig } from "@/data/pages";
import ContactHero from "@/components/contact/ContactHero";
import ContactDirect from "@/components/contact/ContactDirect";
import SocialSection from "@/components/about/SocialSection";
import ContactFaqs from "@/components/contact/ContactFaqs";
import { socialLinks } from "@/data/socials";

export const metadata: Metadata = {
  title: pagesConfig.contact.title,
  description: pagesConfig.contact.seoDescription,
};

export default function ContactPage() {
  const publicProfiles = socialLinks.filter(
    (s) => s.name !== "Email" && s.name !== "WhatsApp" && s.name !== "Phone"
  );

  return (
    <main className="flex-1 w-full pb-16 sm:pb-20">
      <ContactHero />
      <ContactDirect />
      <SocialSection
        title="Public profiles"
        items={publicProfiles}
      />
      <ContactFaqs />
    </main>
  );
}
