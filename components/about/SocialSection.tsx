import React from "react";
import { Icons } from "../ui/Icons";
import { socialLinks } from "@/data/socials";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Icons.GitHub,
  LinkedIn: Icons.LinkedIn,
  Instagram: Icons.Instagram,
  WhatsApp: Icons.WhatsApp,
  Email: Icons.Mail,
  Phone: Icons.Phone,
  Facebook: Icons.Facebook,
  Twitter: Icons.Twitter,
};

interface SocialSectionProps {
  title?: string;
  items?: typeof socialLinks;
}

export default function SocialSection({
  title = "Connect & direct channels",
  items = socialLinks,
}: SocialSectionProps) {
  return (
    <section>
      <div className="max-w-[960px] mx-auto px-6 py-12 sm:py-16 border-t border-border">
        <h2 className="text-2xl sm:text-[26px] font-medium leading-[1.38] text-primary mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => {
            const Icon = iconMap[item.name] || Icons.ArrowRight;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface rounded-xl border border-border-subtle p-5 sm:p-6 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] transition-[border-color,transform] duration-250 ease-out hover:border-primary hover:scale-[0.99] active:scale-[0.98] block"
              >
                <div className="flex items-center justify-center gap-2.5 font-bold text-sm text-primary">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
