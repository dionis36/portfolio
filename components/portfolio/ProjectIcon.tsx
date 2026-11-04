import React from "react";
import Image from "next/image";
import {
  Activity,
  Radio,
  Layers,
  QrCode,
  Lock,
  Building2,
  Network,
  Cpu,
  Terminal,
  ShieldAlert,
  Database,
  Globe,
  GitCommit,
  type LucideIcon,
} from "lucide-react";

export const PROJECT_ICONS: Record<string, LucideIcon> = {
  Activity,
  Radio,
  Layers,
  QrCode,
  Lock,
  Building2,
  Network,
  Cpu,
  Terminal,
  ShieldAlert,
  Database,
  Globe,
  GitCommit,
};

interface ProjectIconProps {
  icon: string;
  title: string;
  className?: string;
}

export default function ProjectIcon({
  icon,
  title,
  className = "",
}: ProjectIconProps) {
  // If the icon is an image file path, render Next.js Image
  if (icon.startsWith("/") || icon.includes(".")) {
    return (
      <Image
        src={icon}
        alt={title}
        width={24}
        height={24}
        className={`w-full h-full object-contain ${className}`}
      />
    );
  }

  const IconComponent = PROJECT_ICONS[icon] || Activity;

  return (
    <IconComponent
      className={`w-5 h-5 text-primary ${className}`}
      strokeWidth={1.65}
      aria-hidden="true"
    />
  );
}
