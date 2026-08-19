import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dionis Ludovick Nasuwa | Full-Stack Software Engineer & Systems Architect",
  description:
    "Portfolio of Dionis Nasuwa, BSc Computer Science graduate @ UDSM CoICT. Certified Full Stack Open (Grade 5/5) & Scrum SFC™. Specialized in TypeScript monorepos, AST code parsing, and enterprise network infrastructure.",
  keywords: [
    "Dionis Nasuwa",
    "Dionis Ludovick Nasuwa",
    "Software Engineer Portfolio",
    "Full-Stack Developer Tanzania",
    "UDSM CoICT Computer Science",
    "Full Stack Open University of Helsinki 5/5",
    "TypeScript Monorepo",
    "AST DAG Code Parsing",
    "Plaqode Platform",
    "Strata Code Analyzer",
  ],
  authors: [{ name: "Dionis Ludovick Nasuwa", url: "https://github.com/dionis36" }],
  openGraph: {
    title: "Dionis Nasuwa — Full-Stack Software Engineer & Systems Architect",
    description:
      "BSc Computer Science @ UDSM CoICT | Certified Full Stack Open (Grade 5/5) & Scrum SFC™. Explore systems projects, monorepo architectures, and technical experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
