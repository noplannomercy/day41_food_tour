import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import { Review } from "@/types";
import { StarRating } from "@/components/shared/StarRating";

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border dark:border-border-dark",
        className
      )}
    >
      {/* Star Rating */}
      <div className="mb-4">
        <StarRating rating={review.rating} size="sm" />
      </div>

      {/* Content */}
      <p className="text-text-primary dark:text-white font-medium mb-4 italic leading-relaxed">
        &ldquo;{review.content}&rdquo;
      </p>

      {/* Tour Name */}
      {review.tourName && (
        <p className="text-text-muted text-sm mb-4">
          Tour: <span className="text-primary font-medium">{review.tourName}</span>
        </p>
      )}

      {/* Author Info */}
      <div className="flex items-center justify-between border-t border-border dark:border-border-dark pt-4">
        <div className="flex items-center gap-3">
          {review.avatar && (
            <div className="w-10 h-10 rounded-full overflow-hidden relative">
              <Image
                src={review.avatar}
                alt={review.author}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="text-sm font-bold text-text-primary dark:text-white">
              {review.author}
            </p>
            <p className="text-xs text-text-muted">
              {review.country}
            </p>
          </div>
        </div>
        <time className="text-xs text-text-muted">
          {formatDate(review.date)}
        </time>
      </div>
    </article>
  );
}
