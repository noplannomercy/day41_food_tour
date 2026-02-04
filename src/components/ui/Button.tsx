"use client";

import { cn } from "@/lib/utils";
import { ButtonVariant, ButtonSize } from "@/types";
import { Icon } from "./Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-primary text-white",
    "hover:brightness-110 active:scale-95",
    "shadow-lg shadow-primary/20"
  ),
  secondary: cn(
    "bg-white/10 backdrop-blur-md",
    "border border-white/20 text-white",
    "hover:bg-white/20"
  ),
  ghost: "text-primary hover:underline",
  outline: cn(
    "bg-surface-hover dark:bg-surface-dark",
    "border border-border dark:border-border-dark",
    "text-text-primary dark:text-white",
    "hover:bg-primary hover:text-white hover:border-primary"
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "font-bold rounded-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <Icon name={icon} size="sm" />}
      {children}
      {icon && iconPosition === "right" && <Icon name={icon} size="sm" />}
    </button>
  );
}
