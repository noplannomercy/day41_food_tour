"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "@/components/ui";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  linkText,
  linkHref,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 mb-8",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {align === "left" && linkText && linkHref ? (
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#181211' }}>
            {title}
          </h2>
          <Link
            href={linkHref}
            className="font-semibold flex items-center gap-1 hover:underline text-sm"
            style={{ color: '#ee3b2b' }}
          >
            {linkText}
            <Icon name="arrow_forward" size="sm" />
          </Link>
        </div>
      ) : (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#181211' }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={cn(
            "text-lg",
            align === "center" && "max-w-[600px]"
          )}
          style={{ color: '#896561' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
