export type SocialPlatform =
  | "GitHub"
  | "LinkedIn"
  | "Instagram"
  | "WhatsApp"
  | "Email"
  | "Facebook"
  | "Twitter";

export interface SocialLink {
  name: SocialPlatform;
  href: string;
}

/**
 * UI-safe variant.
 * Verified public profiles and contact channels.
 */

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/dionis36" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dionis-nasuwa" },
  { name: "Instagram", href: "https://www.instagram.com/i.t.s_d.i.o/" },
  { name: "WhatsApp", href: "https://wa.me/255620796031" },
  { name: "Email", href: "mailto:nasuwadio36@gmail.com" },
];
