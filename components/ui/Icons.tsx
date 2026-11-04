import React from "react";
import {
  Home as LucideHome,
  User as LucideUser,
  BookOpen as LucideBookOpen,
  Folder as LucideFolder,
  Mail as LucideMail,
  Phone as LucidePhone,
  Grid3X3 as LucideGrid3X3,
  X as LucideX,
  ArrowRight as LucideArrowRight,
  ArrowUpRight as LucideArrowUpRight,
  type LucideProps,
} from "lucide-react";

export interface IconProps extends LucideProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const Icons = {
  // Dock: Home (House)
  Home: ({ className = "w-5 h-5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideHome className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Dock: About (User / Profile)
  User: ({ className = "w-5 h-5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideUser className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Dock: Blog (Editorial Book)
  Book: ({ className = "w-5 h-5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideBookOpen className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Dock: Portfolio (Folder / Projects)
  Folder: ({ className = "w-5 h-5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideFolder className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Dock: Contact (Mail / Envelope)
  Mail: ({ className = "w-5 h-5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideMail className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Direct Phone / Call
  Phone: ({ className = "w-4 h-4", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucidePhone className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Dock: Menu Grid (Smoothed 9-Dot Grid)
  Menu: ({ className = "w-5 h-5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideGrid3X3 className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Modal: Close (X)
  Close: ({ className = "w-5 h-5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideX className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Interactive Links: Arrow Right
  ArrowRight: ({ className = "w-3.5 h-3.5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideArrowRight className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Interactive Links: Arrow Up-Right (External)
  ArrowUpRight: ({ className = "w-3.5 h-3.5", strokeWidth = 1.6, ...props }: IconProps) => (
    <LucideArrowUpRight className={className} strokeWidth={strokeWidth} {...props} />
  ),

  // Social Brand Icons
  Facebook: ({ className = "w-4 h-4", ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),

  Twitter: ({ className = "w-4 h-4", ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),

  LinkedIn: ({ className = "w-4 h-4", ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z" />
    </svg>
  ),

  Instagram: ({ className = "w-4 h-4", ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),

  Dribbble: ({ className = "w-4 h-4", ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.127 10.638c-.352-.023-2.686-.16-5.184.664-.492-1.127-1.026-2.23-1.6-3.297 2.684-1.118 4.965-1.139 5.385-1.134.819 1.096 1.325 2.441 1.399 3.767zm-3.076-5.361c-.551.01-2.585.088-5.068 1.137-1.144-2.072-2.39-3.955-2.607-4.28 2.052-.777 4.354-.783 6.467.433.456.784.872 1.737 1.208 2.71zm-9.761-3.149c.231.344 1.488 2.229 2.64 4.314-3.324 1.018-6.685 1.053-7.254 1.054.745-2.222 2.37-4.048 4.614-5.368zm-7.29 7.472c.594-.002 3.666-.035 6.941-.986.602 1.137 1.161 2.308 1.674 3.504-4.57 1.368-8.544 1.346-8.615 1.346v-3.864zm1.517 5.76c.214-.002 3.669-.028 7.973-1.397.669 1.761 1.203 3.541 1.583 5.289-3.771 1.112-7.854.088-9.556-3.892zm11.392 3.424c-.392-1.688-.91-3.414-1.558-5.12 2.355-.838 4.453-.787 4.79-.769-.175 2.502-1.399 4.697-3.232 5.889z" />
    </svg>
  ),

  GitHub: ({ className = "w-4 h-4", ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),

  WhatsApp: ({ className = "w-4 h-4", ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  ),
};

