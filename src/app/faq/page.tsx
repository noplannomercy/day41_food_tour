"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Hero, Accordion } from "@/components/shared";
import { Button, Input, Icon } from "@/components/ui";

// FAQ Data organized by categories
const FAQ_CATEGORIES = [
  {
    id: "booking",
    title: "Booking & Payment",
    faqs: [
      {
        id: "booking-1",
        question: "How do I book a tour?",
        answer: "You can book directly through our website by selecting your preferred tour and date. Once payment is confirmed, you'll receive a confirmation email with all details including the meeting point and guide contact information.",
      },
      {
        id: "booking-2",
        question: "What payment methods are accepted?",
        answer: "We accept all major credit cards (Visa, Mastercard, AMEX), PayPal, and Google Pay. For local residents, bank transfers can also be arranged upon request.",
      },
      {
        id: "booking-3",
        question: "Can I book for a large group (10+ people)?",
        answer: "Absolutely! For groups larger than 10, please contact us directly via our Contact page for special group rates and customized itineraries. We offer private tour options for corporate events and special occasions.",
      },
    ],
  },
  {
    id: "dietary",
    title: "Dietary Restrictions",
    faqs: [
      {
        id: "dietary-1",
        question: "I have a nut allergy. Is it safe?",
        answer: "Yes, but please let us know in advance. While Korean food uses sesame oil frequently, peanut or tree nut usage is less common but exists. Your guide will ensure all dishes served are safe for you.",
      },
      {
        id: "dietary-2",
        question: "Do you offer vegetarian or vegan options?",
        answer: 'We have a dedicated "Green Seoul" tour specifically for vegetarians. For our standard tours, options are limited due to the prevalence of fish sauce/shrimp paste, so we recommend the vegetarian-specific tour.',
      },
      {
        id: "dietary-3",
        question: "Can you accommodate gluten-free diets?",
        answer: "While we can accommodate some gluten-free needs, Korean cuisine heavily uses soy sauce which contains wheat. Please inform us in advance and we will do our best to find suitable alternatives.",
      },
    ],
  },
  {
    id: "meeting",
    title: "Meeting Points",
    faqs: [
      {
        id: "meeting-1",
        question: "Where do the tours start?",
        answer: "Most tours meet at major subway stations like Jongno 3-ga, Myeongdong, or Hongdae. Exact locations with a map link will be sent in your confirmation email 24 hours before the tour.",
      },
      {
        id: "meeting-2",
        question: "How do I recognize my guide?",
        answer: 'Our guides will be wearing a bright red "Delicious Korea" vest or holding a small company flag. You will also receive your guide\'s phone number in your confirmation email.',
      },
      {
        id: "meeting-3",
        question: "What if I'm running late?",
        answer: "Please contact your guide directly using the phone number provided in your confirmation email. We understand that delays can happen, but tours start on time for all guests. We recommend arriving 10 minutes early.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    faqs: [
      {
        id: "cancel-1",
        question: "What is the refund policy?",
        answer: "100% refund for cancellations made 72 hours before the tour. 50% refund for cancellations made between 24 and 72 hours before. No refund for cancellations within 24 hours of the tour start time.",
      },
      {
        id: "cancel-2",
        question: "What happens if the tour is cancelled due to weather?",
        answer: "If we cancel a tour due to extreme weather conditions, you will receive a full refund or the option to reschedule to another date at no extra cost.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return FAQ_CATEGORIES;

    const query = searchQuery.toLowerCase();
    return FAQ_CATEGORIES.map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      ),
    })).filter((category) => category.faqs.length > 0);
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[960px]">
            <div className="p-4">
              <Hero
                title="How can we help?"
                subtitle="Find answers to our most common questions about food tours in Seoul."
                backgroundImage="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1920"
                variant="compact"
                overlay="dark"
                align="center"
              />
            </div>
          </div>
        </div>

        {/* Search Section */}
        <section className="py-8 px-4 md:px-10">
          <div className="max-w-[960px] mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                <Icon name="search" />
              </div>
              <Input
                type="text"
                placeholder="Search for questions about spicy food, meeting spots, etc."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="pb-20 px-4 md:px-10">
          <div className="max-w-[960px] mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="search_off" size="xl" className="text-text-muted mb-4" />
                <p className="text-text-secondary dark:text-text-dark-muted text-lg">
                  No results found for &quot;{searchQuery}&quot;
                </p>
                <p className="text-text-muted text-sm mt-2">
                  Try a different search term or browse the categories below.
                </p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <section key={category.id} className="mb-10">
                  <h2 className="text-text-primary dark:text-white text-2xl font-bold leading-tight px-4 pb-3 pt-5 border-l-4 border-primary ml-1">
                    {category.title}
                  </h2>
                  <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border dark:border-border-dark p-4">
                    <Accordion
                      items={category.faqs}
                      defaultOpenId={category.faqs[0]?.id}
                    />
                  </div>
                </section>
              ))
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4 md:px-10">
          <div className="max-w-[960px] mx-auto">
            <div className="p-8 bg-primary-10 dark:bg-primary/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-text-primary dark:text-white">
                  Still have questions?
                </h3>
                <p className="text-text-secondary dark:text-text-dark-muted">
                  We&apos;re here to help you have the best culinary experience in Seoul.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/about#contact">
                  <Button variant="primary" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
