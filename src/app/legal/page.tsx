"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";
import { Icon, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

// Force dynamic rendering to avoid SSR issues with useSearchParams
export const dynamic = "force-dynamic";

type TabId = "privacy" | "terms" | "cookies" | "refunds";

interface Section {
  id: string;
  title: string;
  icon: string;
}

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "privacy", label: "Privacy Policy", icon: "lock" },
  { id: "terms", label: "Terms of Service", icon: "gavel" },
  { id: "cookies", label: "Cookie Policy", icon: "cookie" },
  { id: "refunds", label: "Refund Policy", icon: "receipt" },
];

const SECTIONS: Record<TabId, Section[]> = {
  privacy: [
    { id: "privacy-intro", title: "Introduction", icon: "info" },
    { id: "privacy-collect", title: "Information We Collect", icon: "database" },
    { id: "privacy-use", title: "How We Use Your Data", icon: "analytics" },
    { id: "privacy-share", title: "Data Sharing", icon: "share" },
    { id: "privacy-rights", title: "Your Rights", icon: "verified_user" },
  ],
  terms: [
    { id: "terms-intro", title: "Introduction", icon: "info" },
    { id: "terms-eligibility", title: "Eligibility", icon: "person" },
    { id: "terms-booking", title: "Booking & Payment", icon: "credit_card" },
    { id: "terms-conduct", title: "User Conduct", icon: "rule" },
    { id: "terms-liability", title: "Liability", icon: "shield" },
  ],
  cookies: [
    { id: "cookies-intro", title: "What Are Cookies", icon: "info" },
    { id: "cookies-types", title: "Types of Cookies", icon: "category" },
    { id: "cookies-manage", title: "Managing Cookies", icon: "settings" },
  ],
  refunds: [
    { id: "refunds-intro", title: "Refund Overview", icon: "info" },
    { id: "refunds-policy", title: "Cancellation Policy", icon: "event_busy" },
    { id: "refunds-process", title: "Refund Process", icon: "autorenew" },
  ],
};

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />
      <Suspense fallback={<LegalPageLoading />}>
        <LegalPageContent />
      </Suspense>
      <Footer />
    </div>
  );
}

function LegalPageLoading() {
  return (
    <main className="flex-1 py-10 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-surface-hover dark:bg-border-dark rounded mb-4" />
          <div className="h-12 w-96 bg-surface-hover dark:bg-border-dark rounded" />
        </div>
      </div>
    </main>
  );
}

function LegalPageContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as TabId | null;
  const [activeTab, setActiveTab] = useState<TabId>(
    tabParam && TABS.find((t) => t.id === tabParam) ? tabParam : "privacy"
  );
  const [activeSection, setActiveSection] = useState<string>(
    SECTIONS[activeTab][0].id
  );

  useEffect(() => {
    setActiveSection(SECTIONS[activeTab][0].id);
  }, [activeTab]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="flex-1 py-10 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap gap-2 pb-6">
          <Link
            href="/"
            className="text-text-secondary text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span className="text-text-secondary text-sm font-medium">/</span>
          <span className="text-text-primary dark:text-white text-sm font-medium">
            Legal & Privacy
          </span>
        </nav>

        {/* Page Header */}
        <header className="flex flex-wrap justify-between gap-3 pb-10 border-b border-border-light dark:border-border-dark">
          <div className="flex flex-col gap-3">
            <h1 className="text-text-primary dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Legal & Privacy Policy
            </h1>
            <p className="text-text-secondary text-base">
              Last updated: January 15, 2026
            </p>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex gap-2 mt-8 mb-6 overflow-x-auto pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-surface-dark text-text-primary dark:text-white border border-border-light dark:border-border-dark hover:border-primary"
              )}
            >
              <Icon name={tab.icon} size="sm" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 flex flex-col gap-4 bg-white dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
              <div className="flex flex-col mb-2">
                <h3 className="text-text-primary dark:text-white text-base font-bold">
                  Table of Contents
                </h3>
                <p className="text-text-secondary text-xs">
                  Navigate sections
                </p>
              </div>
              <nav className="flex flex-col gap-2">
                {SECTIONS[activeTab].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left",
                      activeSection === section.id
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-surface-hover dark:hover:bg-border-dark"
                    )}
                  >
                    <Icon
                      name={section.icon}
                      size="md"
                      className={
                        activeSection === section.id
                          ? "text-primary"
                          : "text-text-secondary"
                      }
                    />
                    <p
                      className={cn(
                        "text-sm",
                        activeSection === section.id
                          ? "font-semibold"
                          : "font-medium text-text-primary dark:text-white"
                      )}
                    >
                      {section.title}
                    </p>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl">
            {activeTab === "privacy" && <PrivacyContent />}
            {activeTab === "terms" && <TermsContent />}
            {activeTab === "cookies" && <CookiesContent />}
            {activeTab === "refunds" && <RefundsContent />}

            {/* Contact CTA */}
            <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                Have questions about our policies?
              </h3>
              <p className="text-text-secondary mb-6 max-w-md">
                Our support team is here to help. Reach out to us for any
                clarification regarding your rights and our services.
              </p>
              <Link href="/about#contact">
                <Button variant="primary" icon="mail">
                  Contact Support
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

function SectionHeading({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <h2
      id={id}
      className="text-text-primary dark:text-white text-xl md:text-[22px] font-bold leading-tight tracking-tight border-l-4 border-primary pl-4 mb-4 scroll-mt-24"
    >
      {title}
    </h2>
  );
}

function ContentSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mb-12", className)}>
      <div className="text-text-secondary dark:text-text-dark-muted space-y-4 text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function PrivacyContent() {
  return (
    <>
      <ContentSection>
        <SectionHeading id="privacy-intro" title="Introduction" />
        <p>
          Welcome to Delicious Korea. We are committed to protecting your
          personal information and your right to privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website or book our food tours.
        </p>
        <p>
          By using our services, you agree to the collection and use of
          information in accordance with this policy. We will not use or share
          your information with anyone except as described in this Privacy
          Policy.
        </p>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="privacy-collect" title="Information We Collect" />
        <p>We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and nationality when you make a booking.
          </li>
          <li>
            <strong>Payment Information:</strong> Credit card details and billing
            address (processed securely through our payment provider).
          </li>
          <li>
            <strong>Dietary Information:</strong> Any food allergies, dietary
            restrictions, or preferences you share with us.
          </li>
          <li>
            <strong>Communication Data:</strong> Messages, feedback, and reviews
            you send to us.
          </li>
        </ul>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="privacy-use" title="How We Use Your Data" />
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process and manage your tour bookings</li>
          <li>To send tour confirmations, reminders, and meeting point details</li>
          <li>To accommodate your dietary needs and preferences</li>
          <li>To improve our services based on your feedback</li>
          <li>To send promotional offers (only with your consent)</li>
          <li>To comply with legal obligations</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="privacy-share" title="Data Sharing" />
        <p>
          We do not sell your personal information. We may share your data with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tour Guides:</strong> Essential information needed to provide
            your tour experience.
          </li>
          <li>
            <strong>Restaurant Partners:</strong> Dietary requirements for
            reservation purposes only.
          </li>
          <li>
            <strong>Payment Processors:</strong> Secure handling of transactions.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law or to protect
            our rights.
          </li>
        </ul>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="privacy-rights" title="Your Rights" />
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent for marketing communications</li>
          <li>Data portability</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:privacy@deliciouskorea.com"
            className="text-primary hover:underline"
          >
            privacy@deliciouskorea.com
          </a>
        </p>
      </ContentSection>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <ContentSection>
        <SectionHeading id="terms-intro" title="Introduction" />
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          Delicious Korea website and participation in our food tours. By
          booking a tour or using our services, you agree to be bound by these
          Terms.
        </p>
        <p>
          Please read these Terms carefully before making a booking. If you do
          not agree to these Terms, please do not use our services.
        </p>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="terms-eligibility" title="Eligibility" />
        <p>To participate in our tours, you must:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be at least 18 years of age, or accompanied by a legal guardian</li>
          <li>
            Provide accurate and complete information during the booking process
          </li>
          <li>Have the legal capacity to enter into binding contracts</li>
          <li>
            For tours involving alcohol, participants must meet the legal drinking
            age (19 years in South Korea)
          </li>
        </ul>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="terms-booking" title="Booking & Payment" />
        <p>
          <strong>Reservations:</strong> All bookings are subject to availability.
          A booking is confirmed only after full payment is received and you
          receive a confirmation email.
        </p>
        <p>
          <strong>Payment:</strong> Full payment is required at the time of
          booking. We accept major credit cards, PayPal, and select digital
          payment methods.
        </p>
        <p>
          <strong>Pricing:</strong> All prices are listed in USD. Prices include
          all food tastings as specified in the tour description but exclude
          personal purchases.
        </p>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="terms-conduct" title="User Conduct" />
        <p>Participants agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Arrive at the meeting point on time</li>
          <li>Respect local customs and dining etiquette</li>
          <li>Follow the guide&apos;s instructions for safety</li>
          <li>Treat guides, restaurant staff, and other guests with respect</li>
          <li>Not engage in disruptive or inappropriate behavior</li>
        </ul>
        <p>
          We reserve the right to remove any participant whose behavior is
          disruptive, without refund.
        </p>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="terms-liability" title="Liability" />
        <p>
          <strong>Health & Safety:</strong> Participants must inform us of any
          severe food allergies or medical conditions prior to the tour. While we
          take precautions, food is consumed at your own risk.
        </p>
        <p>
          <strong>Force Majeure:</strong> Delicious Korea is not liable for
          cancellations or changes due to circumstances beyond our control,
          including natural disasters, government actions, or public health
          emergencies.
        </p>
        <p>
          <strong>Limitation:</strong> Our liability is limited to the amount paid
          for the tour. We are not responsible for indirect or consequential
          damages.
        </p>
      </ContentSection>
    </>
  );
}

function CookiesContent() {
  return (
    <>
      <ContentSection>
        <SectionHeading id="cookies-intro" title="What Are Cookies" />
        <p>
          Cookies are small text files that are placed on your device when you
          visit our website. They help us provide you with a better experience by
          remembering your preferences and understanding how you use our site.
        </p>
        <p>
          This Cookie Policy explains what cookies we use, why we use them, and
          how you can manage your cookie preferences.
        </p>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="cookies-types" title="Types of Cookies We Use" />
        <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-surface-hover dark:bg-border-dark p-3 font-bold text-sm text-text-primary dark:text-white">
            <span>Type</span>
            <span>Purpose</span>
            <span>Duration</span>
          </div>
          <div className="grid grid-cols-3 p-3 text-sm border-b border-border-light dark:border-border-dark">
            <span className="font-medium">Essential</span>
            <span>Required for basic site functionality</span>
            <span>Session</span>
          </div>
          <div className="grid grid-cols-3 p-3 text-sm border-b border-border-light dark:border-border-dark">
            <span className="font-medium">Analytics</span>
            <span>Help us understand site usage</span>
            <span>2 years</span>
          </div>
          <div className="grid grid-cols-3 p-3 text-sm border-b border-border-light dark:border-border-dark">
            <span className="font-medium">Preferences</span>
            <span>Remember your settings and choices</span>
            <span>1 year</span>
          </div>
          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-medium">Marketing</span>
            <span>Used for targeted advertising</span>
            <span>90 days</span>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="cookies-manage" title="Managing Cookies" />
        <p>
          You can control and manage cookies in several ways. Most browsers allow
          you to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>View what cookies are stored on your device</li>
          <li>Delete individual or all cookies</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies</li>
        </ul>
        <p>
          Please note that blocking all cookies may impact your experience on our
          website, as some features may not function properly.
        </p>
      </ContentSection>
    </>
  );
}

function RefundsContent() {
  return (
    <>
      <ContentSection>
        <SectionHeading id="refunds-intro" title="Refund Overview" />
        <p>
          We understand that travel plans can change. This Refund Policy outlines
          the conditions under which you may receive a refund for your Delicious
          Korea tour booking.
        </p>
        <p>
          All refund requests should be submitted via email to{" "}
          <a
            href="mailto:bookings@deliciouskorea.com"
            className="text-primary hover:underline"
          >
            bookings@deliciouskorea.com
          </a>
        </p>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="refunds-policy" title="Cancellation Policy" />
        <p>Our refund structure is as follows:</p>
        <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 bg-surface-hover dark:bg-border-dark p-3 font-bold text-sm text-text-primary dark:text-white">
            <span>Cancellation Time</span>
            <span>Refund Amount</span>
          </div>
          <div className="grid grid-cols-2 p-3 text-sm border-b border-border-light dark:border-border-dark">
            <span>More than 7 days before tour</span>
            <span className="text-success font-semibold">100% Refund</span>
          </div>
          <div className="grid grid-cols-2 p-3 text-sm border-b border-border-light dark:border-border-dark">
            <span>3 to 7 days before tour</span>
            <span className="text-warning font-semibold">50% Refund</span>
          </div>
          <div className="grid grid-cols-2 p-3 text-sm border-b border-border-light dark:border-border-dark">
            <span>Less than 72 hours before tour</span>
            <span className="text-primary font-semibold">No Refund</span>
          </div>
          <div className="grid grid-cols-2 p-3 text-sm">
            <span>No-show</span>
            <span className="text-primary font-semibold">No Refund</span>
          </div>
        </div>
        <p className="text-sm italic mt-4">
          Note: In case of tour cancellation by Delicious Korea due to extreme
          weather, guide illness, or unforeseen circumstances, a full refund or
          free rescheduling will be offered.
        </p>
      </ContentSection>

      <ContentSection>
        <SectionHeading id="refunds-process" title="Refund Process" />
        <p>To request a refund:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Email us at{" "}
            <a
              href="mailto:bookings@deliciouskorea.com"
              className="text-primary hover:underline"
            >
              bookings@deliciouskorea.com
            </a>{" "}
            with your booking confirmation number
          </li>
          <li>Include the reason for cancellation</li>
          <li>
            We will process your request within 2 business days and send
            confirmation
          </li>
          <li>
            Refunds are processed to the original payment method within 5-10
            business days
          </li>
        </ol>
        <p>
          <strong>Date Changes:</strong> If you need to change your tour date, we
          offer free rescheduling with at least 72 hours notice, subject to
          availability.
        </p>
      </ContentSection>
    </>
  );
}
