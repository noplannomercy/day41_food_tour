"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "py-4",
            index < items.length - 1 && "border-b border-border dark:border-border-dark"
          )}
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
          >
            <span className="text-text-primary dark:text-white text-base font-semibold leading-normal">
              {item.question}
            </span>
            <Icon
              name="expand_more"
              className={cn(
                "text-primary transition-transform duration-200",
                openId === item.id && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-200 ease-in-out",
              openId === item.id ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="text-text-secondary dark:text-text-dark-muted text-sm font-normal leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
