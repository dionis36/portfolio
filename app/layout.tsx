import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingDock from "@/components/navigation/FloatingDock";
import { profile } from "@/data/profile";
import { pagesConfig } from "@/data/pages";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: pagesConfig.home.seoTitle,
    template: `%s | ${profile.name}`,
  },
  description: pagesConfig.home.seoDescription,
  icons: {
    icon: "/dio.png",
    shortcut: "/dio.png",
    apple: "/dio.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen bg-canvas text-primary font-sans flex flex-col selection:bg-primary selection:text-white pb-28">
        {children}
        {/* Subtle Bottom Fading Scroll Overlay (Pure Color Gradient Dissolve) */}
        <div
          aria-hidden="true"
          className="fixed bottom-0 inset-x-0 h-14 pointer-events-none z-30 bg-gradient-to-t from-canvas via-canvas/60 to-transparent"
        />
        <FloatingDock />
      </body>
    </html>
  );
}
