"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "primary" | "outline";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  default: "bg-white/90 dark:bg-black/70 text-text-primary dark:text-white",
  primary: "bg-primary text-white",
  outline: "bg-white/20 backdrop-blur-md border border-white/20 text-white",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
};

export function Badge({
  variant = "default",
  size = "sm",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-bold uppercase tracking-wider rounded",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
