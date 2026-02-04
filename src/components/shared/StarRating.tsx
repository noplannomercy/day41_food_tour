"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

const sizeMap = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl",
};

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  onChange,
  className,
}: StarRatingProps) {
  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index)}
          disabled={!interactive}
          className={cn(
            "transition-transform",
            interactive && "cursor-pointer hover:scale-110 active:scale-95",
            !interactive && "cursor-default"
          )}
        >
          <Icon
            name="star"
            filled={index < rating}
            className={cn(
              sizeMap[size],
              index < rating ? "text-warning" : "text-border dark:text-border-dark"
            )}
          />
        </button>
      ))}
    </div>
  );
}
