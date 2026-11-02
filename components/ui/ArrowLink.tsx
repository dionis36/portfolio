import React from "react";
import Link from "next/link";
import { Icons } from "./Icons";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export default function ArrowLink({
  href,
  children,
  className = "",
  isExternal = false,
}: ArrowLinkProps) {
  const content = (
    <>
      <span className="leading-snug">{children}</span>
      <span className="inline-flex items-center transform transition-transform duration-250 ease-out group-hover:translate-x-1">
        {isExternal ? (
          <Icons.ArrowUpRight className="w-3.5 h-3.5" />
        ) : (
          <Icons.ArrowRight className="w-3.5 h-3.5" />
        )}
      </span>
    </>
  );

  const classes = `group inline-flex items-center gap-2 text-primary font-medium text-base hover:text-secondary transition-colors duration-250 ease-out ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
