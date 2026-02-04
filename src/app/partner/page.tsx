"use client";

import { Navbar, Footer } from "@/components/layout";
import { Button, Icon, Input, Textarea, Select } from "@/components/ui";
import { Hero, SectionHeader } from "@/components/shared";

const STATS = [
  { label: "Monthly Travelers", value: "5,000+" },
  { label: "Partner Restaurants", value: "150+" },
  { label: "Social Reach", value: "1.2M+" },
];

const PARTNERSHIP_TYPES = [
  {
    icon: "photo_camera",
    title: "For Influencers",
    description: "Exclusive access to unique hidden food gems, professional media support, and affiliate commissions for your audience.",
    benefits: [
      "Complimentary tours for content creation",
      "Professional photo/video support",
      "Affiliate commission program",
      "Early access to new experiences",
    ],
  },
  {
    icon: "public",
    title: "For Travel Agencies",
    description: "Reliable local partnership with high commission rates, white-label options, and seamless API-driven booking integration.",
    benefits: [
      "Competitive B2B pricing",
      "White-label tour options",
      "API booking integration",
      "Dedicated account manager",
    ],
  },
  {
    icon: "restaurant_menu",
    title: "For Restaurants",
    description: "Increase your visibility among premium international tourists and get featured in global food documentaries.",
    benefits: [
      "Featured in tour itineraries",
      "International tourist exposure",
      "Marketing collaboration",
      "Review & feedback insights",
    ],
  },
  {
    icon: "hotel",
    title: "For Hotels",
    description: "Offer your guests authentic local experiences and earn commission on every booking made through your concierge.",
    benefits: [
      "Concierge partnership program",
      "In-room promotional materials",
      "Commission on guest bookings",
      "Exclusive packages for hotel guests",
    ],
  },
];

const BENEFITS_LIST = [
  {
    icon: "trending_up",
    title: "Grow Your Reach",
    description: "Access our network of 5,000+ monthly international travelers actively seeking food experiences.",
  },
  {
    icon: "payments",
    title: "Competitive Commissions",
    description: "Earn attractive commissions on every booking. Top partners earn over $10,000 monthly.",
  },
  {
    icon: "support_agent",
    title: "Dedicated Support",
    description: "Get a dedicated partner success manager to help optimize your partnership performance.",
  },
  {
    icon: "campaign",
    title: "Marketing Support",
    description: "Co-branded marketing campaigns, social media features, and promotional materials provided.",
  },
];

const ORGANIZATION_TYPES = [
  { value: "influencer", label: "Influencer / Content Creator" },
  { value: "agency", label: "Travel Agency" },
  { value: "restaurant", label: "Restaurant / Local Business" },
  { value: "hotel", label: "Hotel / Accommodation" },
  { value: "corporate", label: "Corporate Partner" },
  { value: "other", label: "Other" },
];

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="px-4 md:px-10 py-5">
          <Hero
            title="Partner With Seoul's Top Food Tour Agency"
            subtitle="Join our network of influencers, travel agencies, and local gems to bring the authentic taste of Korea to the world. Let's create unforgettable culinary experiences together."
            backgroundImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
            primaryCta={{ label: "Join Now", href: "#application" }}
            secondaryCta={{ label: "Learn More", href: "#opportunities" }}
            variant="full"
          />
        </section>

        {/* Stats Section */}
        <section className="px-4 md:px-10 py-10 bg-surface dark:bg-surface-dark">
          <div className="max-w-[960px] mx-auto">
            <div className="flex flex-wrap gap-4">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[158px] flex flex-col gap-2 rounded-xl p-6 border border-border dark:border-border-dark bg-background-light dark:bg-background-dark"
                >
                  <p className="text-text-secondary dark:text-text-dark-muted text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-text-primary dark:text-white text-3xl font-black">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities Section */}
        <section id="opportunities" className="px-4 md:px-10 py-16">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Tailored Partnership Programs"
              subtitle="We create meaningful collaborations that benefit our partners and provide unforgettable experiences for travelers. Choose your path:"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {PARTNERSHIP_TYPES.map((type, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-8 rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={type.icon} size="lg" className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-text-primary dark:text-white">
                      {type.title}
                    </h3>
                    <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                      {type.description}
                    </p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm text-text-secondary dark:text-text-dark-muted">
                        <Icon name="check_circle" size="sm" className="text-success mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 md:px-10 py-16 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Benefits of Partnership"
              subtitle="When you partner with Delicious Korea, you gain access to a wealth of resources and opportunities."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {BENEFITS_LIST.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size="lg" className="text-primary" />
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

        {/* Testimonials Section */}
        <section className="px-4 md:px-10 py-16">
          <div className="max-w-[960px] mx-auto">
            <SectionHeader
              title="What Our Partners Say"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark">
                <p className="text-text-secondary dark:text-text-dark-muted italic mb-4">
                  &quot;Partnering with Delicious Korea has been incredible for our restaurant. We now serve tourists from around the world and have seen a 40% increase in international customers.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="person" className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary dark:text-white">Chef Kim Soo-jin</p>
                    <p className="text-sm text-text-secondary dark:text-text-dark-muted">Owner, Traditional Kitchen</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark">
                <p className="text-text-secondary dark:text-text-dark-muted italic mb-4">
                  &quot;As a travel influencer, their professional support and unique experiences have helped me create content that truly resonates with my followers.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="person" className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary dark:text-white">Sarah Chen</p>
                    <p className="text-sm text-text-secondary dark:text-text-dark-muted">Travel Influencer, @sarahseoul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application" className="px-4 md:px-10 py-16 bg-background-light dark:bg-background-dark">
          <div className="max-w-[960px] mx-auto">
            <SectionHeader
              title="Start Your Journey With Us"
              subtitle="Fill out the form below and our partnership team will get back to you within 48 hours."
              align="center"
            />

            <div className="mt-12 bg-surface dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark p-8 md:p-12 shadow-sm">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Organization Type"
                    options={ORGANIZATION_TYPES}
                    placeholder="Select type"
                    required
                  />
                  <Input
                    label="Website / Social Profile"
                    placeholder="https://..."
                  />
                </div>
                <Input
                  label="Company / Brand Name"
                  placeholder="Your company or brand name"
                />
                <Textarea
                  label="How can we work together?"
                  placeholder="Tell us about your proposal and how you envision our partnership..."
                  rows={4}
                  required
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-border text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-text-secondary dark:text-text-dark-muted">
                    I agree to the Terms of Service and Privacy Policy.
                  </label>
                </div>
                <Button variant="primary" size="lg" className="w-full md:w-auto md:min-w-[200px]">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="px-4 md:px-10 py-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="p-10 rounded-3xl bg-primary/10 dark:bg-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-text-primary dark:text-white mb-2">
                  Have Questions?
                </h2>
                <p className="text-text-secondary dark:text-text-dark-muted">
                  Our partnership team is ready to help. Reach out for a quick consultation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" icon="mail">
                  partnerships@deliciouskorea.com
                </Button>
                <Button variant="outline" size="lg" icon="call">
                  +82 2-1234-5678
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
