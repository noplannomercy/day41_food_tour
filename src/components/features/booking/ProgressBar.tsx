"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps?: number;
  steps?: string[];
}

export function ProgressBar({
  currentStep,
  totalSteps = 3,
  steps = ["Tour Selection", "Customer Information", "Payment Details"]
}: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100);
  const currentStepName = steps[currentStep - 1] || "";
  const nextStepName = steps[currentStep] || "";

  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Step Info */}
      <div className="flex gap-6 justify-between items-center">
        <p className="text-text-primary dark:text-white text-base font-medium leading-normal">
          Step {currentStep} of {totalSteps}: {currentStepName}
        </p>
        <p className="text-primary text-sm font-bold leading-normal">
          {percentage}% Complete
        </p>
      </div>

      {/* Progress Bar */}
      <div className="rounded-full bg-border dark:bg-border-dark h-3 overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Next Step */}
      {nextStepName && (
        <p className="text-text-secondary dark:text-text-dark-muted text-sm font-normal leading-normal">
          Next: {nextStepName}
        </p>
      )}

      {/* Step Dots */}
      <div className="flex justify-center gap-4 mt-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index + 1 <= currentStep
                ? "bg-primary"
                : "bg-border dark:bg-border-dark"
            )}
          />
        ))}
      </div>
    </div>
  );
}
