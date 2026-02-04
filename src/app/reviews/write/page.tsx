"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { StarRating } from "@/components/shared";
import { Button, Input, Textarea, Select, Icon } from "@/components/ui";
import { getTours } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function WriteReviewPage() {
  const tours = getTours();
  const [currentStep, setCurrentStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [selectedTour, setSelectedTour] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const tourOptions = tours.map((tour) => ({
    value: tour.id,
    label: tour.title,
  }));

  const selectedTourName = tours.find((t) => t.id === selectedTour)?.title || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setCurrentStep(3);
  };

  const progress = currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-10 px-4 md:px-0">
        <div className="max-w-[800px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 py-2 mb-4">
            <Link href="/" className="text-text-muted text-sm font-medium hover:underline">
              Home
            </Link>
            <span className="text-text-muted text-sm font-medium">/</span>
            <Link href="/reviews" className="text-text-muted text-sm font-medium hover:underline">
              Reviews
            </Link>
            <span className="text-text-muted text-sm font-medium">/</span>
            <span className="text-text-primary dark:text-white text-sm font-bold">
              Write a Review
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-text-primary dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Share Your Food Experience
            </h1>
            <p className="text-text-secondary dark:text-text-dark-muted text-lg font-normal">
              Your feedback helps us make our Seoul food tours even better!
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col gap-3 py-6 px-6 bg-white dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark shadow-sm mb-8">
            <div className="flex gap-6 justify-between items-center">
              <p className="text-text-primary dark:text-white text-base font-semibold">
                Step {currentStep} of 3:{" "}
                {currentStep === 1
                  ? "Select Tour"
                  : currentStep === 2
                  ? "Your Feedback"
                  : "Confirmation"}
              </p>
              <p className="text-primary text-sm font-bold">{progress}% Complete</p>
            </div>
            <div className="rounded-full bg-border dark:bg-border-dark h-2.5 w-full overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-center gap-4 mt-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    step <= currentStep ? "bg-primary" : "bg-border dark:bg-border-dark"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Select Tour */}
          {currentStep === 1 && (
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-text-primary dark:text-white text-2xl font-bold mb-6">
                  Which tour did you take?
                </h3>
                <div className="space-y-6">
                  <Select
                    label="Select Your Tour"
                    options={tourOptions}
                    value={selectedTour}
                    onChange={(e) => setSelectedTour(e.target.value)}
                    placeholder="Choose a tour..."
                    required
                  />

                  <div className="flex justify-end pt-4 border-t border-border dark:border-border-dark">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setCurrentStep(2)}
                      disabled={!selectedTour}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Review Form */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark shadow-sm overflow-hidden">
                <div className="px-8 pt-8">
                  <h3 className="text-text-primary dark:text-white text-2xl font-bold">
                    Rate your tour:{" "}
                    <span className="text-primary italic">&quot;{selectedTourName}&quot;</span>
                  </h3>
                </div>

                <div className="p-8 space-y-8">
                  {/* Star Rating */}
                  <div className="flex flex-col gap-4">
                    <label className="text-base font-semibold text-text-secondary dark:text-text-dark-muted">
                      Overall Rating
                    </label>
                    <StarRating
                      rating={rating}
                      size="lg"
                      interactive
                      onChange={setRating}
                    />
                  </div>

                  {/* Review Content */}
                  <div className="flex flex-col gap-4">
                    <Textarea
                      label="Write your review"
                      placeholder="Tell us about the highlights of your tour, the food, and your guide..."
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                      rows={6}
                      required
                    />
                    <div className="flex justify-between items-center text-xs text-text-muted">
                      <span>Minimum 50 characters recommended</span>
                      <span>{reviewContent.length} / 1000</span>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Input
                    label="Country"
                    placeholder="United States"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />

                  {/* Preview Info */}
                  <div className="p-4 bg-primary-10 dark:bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex gap-3">
                      <Icon name="info" className="text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-primary">After submitting, you&apos;ll see:</p>
                        <p className="text-sm text-text-secondary dark:text-text-dark-muted mt-1 italic">
                          &quot;Kamsahamnida! Thank you for sharing your journey with Delicious Korea. Your review helps other travelers discover the magic of Seoul&apos;s food scene.&quot;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border dark:border-border-dark">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-2.5 text-text-secondary dark:text-text-dark-muted font-bold hover:text-text-primary dark:hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <div className="flex gap-4">
                      <Button type="button" variant="outline" size="md">
                        Save Draft
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={!rating || !reviewContent || !name || !email || !country}
                      >
                        Submit Review
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark shadow-sm overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                  <Icon name="check_circle" size="xl" className="text-success" />
                </div>
                <h3 className="text-text-primary dark:text-white text-2xl font-bold mb-4">
                  Kamsahamnida!
                </h3>
                <p className="text-text-secondary dark:text-text-dark-muted text-lg mb-8 max-w-md mx-auto">
                  Thank you for sharing your journey with Delicious Korea. Your review helps other travelers discover the magic of Seoul&apos;s food scene.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/reviews">
                    <Button variant="primary" size="lg">
                      View All Reviews
                    </Button>
                  </Link>
                  <Link href="/tours">
                    <Button variant="outline" size="lg">
                      Book Another Tour
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Reward Banner */}
          <div className="mt-8 p-6 bg-surface-hover dark:bg-surface-dark rounded-xl flex items-center justify-between border border-border dark:border-border-dark">
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Icon name="card_giftcard" className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary dark:text-white">
                  Reviewer Reward
                </h4>
                <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                  Submit this review to receive a 10% discount on your next tour!
                </p>
              </div>
            </div>
            <Icon name="chevron_right" className="text-text-muted" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
