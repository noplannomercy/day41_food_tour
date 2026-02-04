"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { Tour } from "@/types";
import { Icon, Badge, Button } from "@/components/ui";

interface TourCardProps {
  tour: Tour;
  className?: string;
}

export function TourCard({ tour, className }: TourCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col",
        "bg-white dark:bg-surface-dark",
        "rounded-xl overflow-hidden",
        "border border-black/5 dark:border-border-dark",
        "shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {tour.badge && (
          <Badge className="absolute top-3 left-3" variant="default">
            {tour.badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors" style={{ color: '#181211' }}>
            {tour.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <Icon name="star" size="sm" filled style={{ color: '#f59e0b' }} />
            <span className="text-sm font-bold" style={{ color: '#ee3b2b' }}>{tour.rating}</span>
          </div>
        </div>

        <p className="text-sm mb-4 line-clamp-2" style={{ color: '#896561' }}>
          {tour.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs mb-4" style={{ color: '#b59b98' }}>
          <span className="flex items-center gap-1">
            <Icon name="schedule" size="sm" /> {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="group" size="sm" /> Max {tour.maxGuests}
          </span>
          <span className="flex items-center gap-1 font-bold" style={{ color: '#ee3b2b' }}>
            {formatPrice(tour.price)}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link href={`/tours/${tour.slug}`}>
            <Button variant="outline" fullWidth icon="arrow_forward">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
