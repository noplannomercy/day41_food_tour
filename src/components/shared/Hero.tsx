"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "full" | "compact";
  overlay?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
  variant = "full",
  overlay = "dark",
  align = "center",
  className,
}: HeroProps) {
  const overlayGradient =
    overlay === "dark"
      ? "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)"
      : "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)";

  return (
    <section
      className={cn(
        "relative flex flex-col bg-cover bg-center bg-no-repeat",
        "rounded-none sm:rounded-xl overflow-hidden",
        variant === "full" ? "min-h-[600px]" : "min-h-[400px]",
        align === "center" ? "items-center justify-center text-center" : "items-start justify-end",
        className
      )}
      style={{
        backgroundImage: `${overlayGradient}, url("${backgroundImage}")`,
      }}
    >
      <div
        className={cn(
          "flex flex-col gap-4 p-6 md:p-8",
          align === "center" ? "max-w-[800px] items-center" : "max-w-[600px]"
        )}
      >
        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 text-lg md:text-xl font-medium">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {primaryCta && (
              <Link href={primaryCta.href}>
                <Button variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
