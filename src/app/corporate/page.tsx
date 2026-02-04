"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button, Icon, Input, Textarea, Select } from "@/components/ui";
import { Hero, SectionHeader } from "@/components/shared";

const FEATURES = [
  {
    icon: "settings_suggest",
    title: "Customized Itineraries",
    description: "From strict dietary restrictions to specific historical themes, we build the tour around your company goals.",
  },
  {
    icon: "badge",
    title: "Professional Guides",
    description: "Fluent English-speaking guides trained in corporate etiquette and local food culture storytelling.",
  },
  {
    icon: "local_shipping",
    title: "Seamless Logistics",
    description: "Door-to-door transportation and premium venue bookings handled for groups of up to 100+ attendees.",
  },
];

const TEAM_PACKAGES = [
  {
    name: "Team Bonding",
    description: "Perfect for small teams looking for a casual food adventure.",
    groupSize: "10-20 people",
    duration: "3 hours",
    price: "From $800",
    features: ["Guided market tour", "4 food tastings", "Team photos", "Digital album"],
  },
  {
    name: "Executive Experience",
    description: "Premium experience for leadership teams and VIP clients.",
    groupSize: "5-15 people",
    duration: "4 hours",
    price: "From $1,500",
    features: ["Private restaurant bookings", "6+ course tasting menu", "Sommelier service", "Gift bags"],
    featured: true,
  },
  {
    name: "Large Group Event",
    description: "Full-scale events for conferences and company retreats.",
    groupSize: "50-100+ people",
    duration: "Full day",
    price: "Custom",
    features: ["Multiple venue coordination", "Custom catering", "Entertainment", "Branded materials"],
  },
];

const BENEFITS = [
  {
    icon: "groups",
    title: "Team Building",
    description: "Food brings people together. Our experiences foster genuine connections among colleagues.",
  },
  {
    icon: "trending_up",
    title: "Boost Morale",
    description: "Give your team a memorable experience they'll talk about for years to come.",
  },
  {
    icon: "public",
    title: "Cultural Immersion",
    description: "Perfect for international teams visiting Seoul or local teams exploring their own city.",
  },
  {
    icon: "workspace_premium",
    title: "Premium Quality",
    description: "We partner with the finest restaurants and venues to ensure top-tier experiences.",
  },
];

const TRUSTED_COMPANIES = [
  { name: "GlobalTech", icon: "travel_explore" },
  { name: "Skyline Inc", icon: "domain" },
  { name: "DataFlow", icon: "monitoring" },
  { name: "Connect", icon: "public" },
  { name: "FinCore", icon: "payments" },
];

const GROUP_SIZE_OPTIONS = [
  { value: "10-20", label: "10-20 people" },
  { value: "20-50", label: "20-50 people" },
  { value: "50-100", label: "50-100 people" },
  { value: "100+", label: "100+ people" },
];

export default function CorporatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="px-4 md:px-10 py-5">
          <Hero
            title="Unforgettable Korean Food Experiences for Teams"
            subtitle="Boost morale and foster connection with our custom corporate food tours and team-building culinary events in the heart of Seoul."
            backgroundImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600"
            primaryCta={{ label: "Inquire Now", href: "#inquiry" }}
            secondaryCta={{ label: "View Packages", href: "#packages" }}
            variant="full"
          />
        </section>

        {/* Trusted By Section */}
        <section className="px-4 md:px-10 py-10 bg-surface dark:bg-surface-dark border-y border-border dark:border-border-dark">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-center text-sm uppercase tracking-widest text-text-muted mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {TRUSTED_COMPANIES.map((company, index) => (
                <div key={index} className="flex items-center gap-2 text-text-primary dark:text-white">
                  <Icon name={company.icon} size="xl" />
                  <span className="font-bold text-xl">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 md:px-10 py-16">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Why Choose Our Corporate Tours?"
              subtitle="We specialize in large-scale logistics and premium experiences tailored for international professionals and visiting delegations."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-8 rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={feature.icon} size="lg" className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-text-primary dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Building Packages */}
        <section id="packages" className="px-4 md:px-10 py-16 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Team Building Packages"
              subtitle="Choose from our carefully curated packages or let us create a custom experience for your team."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {TEAM_PACKAGES.map((pkg, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-8 rounded-xl border ${
                    pkg.featured
                      ? "border-primary bg-surface dark:bg-surface-dark shadow-lg ring-2 ring-primary"
                      : "border-border dark:border-border-dark bg-surface dark:bg-surface-dark shadow-sm"
                  }`}
                >
                  {pkg.featured && (
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-dark-muted mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-secondary dark:text-text-dark-muted mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="group" size="sm" />
                      {pkg.groupSize}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="schedule" size="sm" />
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-text-secondary dark:text-text-dark-muted">
                        <Icon name="check" size="sm" className="text-success mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#inquiry">
                    <Button variant={pkg.featured ? "primary" : "outline"} fullWidth>
                      Get Quote
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 md:px-10 py-16">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Benefits of Corporate Food Tours"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size="xl" className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-text-primary dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry" className="px-4 md:px-10 py-16 bg-background-light dark:bg-background-dark">
          <div className="max-w-[960px] mx-auto">
            <div className="bg-surface dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-border dark:border-border-dark">
              {/* Left Side - Info */}
              <div className="w-full md:w-1/2 p-10 bg-primary text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Request a Proposal</h3>
                  <p className="text-white/80 mb-8">
                    Tell us about your event needs and our corporate events team will get back to you within 24 hours with a custom proposal.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Icon name="call" />
                      <span>+82 2-1234-5678</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="mail" />
                      <span>events@deliciouskorea.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="location_on" />
                      <span>Jung-gu, Seoul, South Korea</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <p className="text-sm text-white/60 italic">
                    &quot;The most organized and culturally enriching experience our leadership team has had in Seoul.&quot; - HR Director, GlobalTech
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="w-full md:w-1/2 p-10">
                <form className="flex flex-col gap-6">
                  <Input
                    label="Company Name"
                    placeholder="e.g. Acme Corp"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label="Estimated Group Size"
                      options={GROUP_SIZE_OPTIONS}
                      placeholder="Select size"
                    />
                    <Input
                      label="Preferred Date"
                      type="date"
                    />
                  </div>
                  <Input
                    label="Contact Email"
                    type="email"
                    placeholder="email@company.com"
                  />
                  <Textarea
                    label="Message & Special Requests"
                    placeholder="Tell us about dietary needs or specific interests..."
                    rows={4}
                  />
                  <Button variant="primary" size="lg" fullWidth>
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 md:px-10 py-16">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Moments from Past Events"
            />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
              <div
                className="aspect-video bg-cover bg-center rounded-lg shadow-sm"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600")',
                }}
              />
              <div
                className="aspect-video bg-cover bg-center rounded-lg shadow-sm"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600")',
                }}
              />
              <div
                className="aspect-video bg-cover bg-center rounded-lg shadow-sm"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600")',
                }}
              />
              <div
                className="aspect-video bg-cover bg-center rounded-lg shadow-sm"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600")',
                }}
              />
              <div
                className="aspect-video bg-cover bg-center rounded-lg shadow-sm"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=600")',
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
