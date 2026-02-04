"use client";

import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  filled?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
};

export function Icon({ name, size = "md", filled = false, className }: IconProps) {
  return (
    <span
      className={cn(
        "material-symbols-outlined select-none",
        sizeMap[size],
        filled && "filled",
        className
      )}
      style={{
        fontVariationSettings: filled
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      }}
    >
      {name}
    </span>
  );
}
