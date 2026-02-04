import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon, Badge } from "@/components/ui";
import { Guide } from "@/types";

interface GuideCardProps {
  guide: Guide;
  className?: string;
}

export function GuideCard({ guide, className }: GuideCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 group",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
        <Image
          src={guide.image}
          alt={`Portrait of ${guide.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        {/* Name and Languages */}
        <div className="flex items-center justify-between">
          <h3 className="text-text-primary dark:text-white text-xl font-bold leading-normal">
            {guide.name}
          </h3>
          <div className="flex gap-1 text-sm text-text-secondary dark:text-text-dark-muted">
            {guide.languages.slice(0, 2).map((lang) => (
              <Badge key={lang} variant="default" size="sm">
                {lang.slice(0, 2).toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
          <Icon name="restaurant" size="sm" />
          <span>{guide.title}</span>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <Icon name="schedule" size="sm" />
          <span>{guide.experience} years experience</span>
        </div>

        {/* Bio */}
        <p className="text-text-secondary dark:text-text-dark-muted text-sm leading-normal line-clamp-3">
          {guide.bio}
        </p>
      </div>
    </article>
  );
}
