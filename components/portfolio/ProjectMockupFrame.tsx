import React from "react";
import Image from "next/image";

interface ProjectMockupFrameProps {
  src: string;
  alt: string;
  style?: "bleed" | "floating" | "flat";
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function ProjectMockupFrame({
  src,
  alt,
  style = "bleed",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 450px",
  className = "",
}: ProjectMockupFrameProps) {
  // 1. Guard against double-framing:
  // If the image is explicitly "flat", or is an existing baked mockup asset (e.g. -mockup.png or portfolio-*.png),
  // render directly without adding another outer gray frame.
  const isPreBaked =
    style === "flat" ||
    src.includes("-mockup") ||
    src.includes("portfolio-");

  if (isPreBaked) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-surface-subtle ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover group-hover:scale-[1.02] transition-transform duration-250 ease-out"
        />
      </div>
    );
  }

  // 2. Floating Variant: For single-screen / auth pages (Paydable)
  if (style === "floating") {
    return (
      <div
        className={`relative w-full h-full bg-[#E8E8E8] dark:bg-[#e8e8e8] p-3 sm:p-5 flex items-center justify-center overflow-hidden ${className}`}
      >
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_12px_28px_-4px_rgba(0,0,0,0.18)] border border-black/5 dark:border-white/10">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={960}
            priority={priority}
            sizes={sizes}
            className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-250 ease-out"
          />
        </div>
      </div>
    );
  }

  // 3. Bleed Variant (Default): For multi-section and hero landing pages (DigitalOps, Momento, Plaqode)
  // Window has rounded top corners and fits 100% width so that logos, headers and text are NEVER cropped horizontally.
  return (
    <div
      className={`relative w-full h-full bg-[#E8E8E8] dark:bg-[#e8e8e8] pt-4 px-4 sm:pt-6 sm:px-6 pb-0 overflow-hidden flex flex-col justify-end ${className}`}
    >
      <div className="relative w-full h-full rounded-t-xl sm:rounded-t-2xl overflow-hidden shadow-[0_12px_28px_-4px_rgba(0,0,0,0.18)] border-t border-x border-black/5 dark:border-white/10">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          priority={priority}
          sizes={sizes}
          className="w-full h-auto min-w-full block group-hover:scale-[1.02] transition-transform duration-250 ease-out"
        />
      </div>
    </div>
  );
}
