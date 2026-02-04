import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/shared/Hero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TourCard } from "@/components/shared/Card";
import { Icon } from "@/components/ui/Icon";
import { getFeaturedTours, getFeaturedReviews } from "@/lib/data";

const HOW_IT_WORKS_STEPS = [
  {
    icon: "calendar_month",
    title: "1. Book Your Tour",
    description:
      "Select your preferred date and tour type through our easy and secure booking platform.",
  },
  {
    icon: "person_pin_circle",
    title: "2. Meet Your Guide",
    description:
      "Join our local English-speaking food experts at a central, easy-to-find meeting point.",
  },
  {
    icon: "restaurant",
    title: "3. Eat Like a Local",
    description:
      "Discover hidden spots only locals know and learn the rich stories behind every delicious dish.",
  },
];

export default function HomePage() {
  const featuredTours = getFeaturedTours(3);
  const testimonials = getFeaturedReviews(6);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1280px]">
            <div className="p-0 sm:p-4">
              <Hero
                title="Experience the Authentic Flavors of Seoul"
                subtitle="Join our expert-led food tours through vibrant night markets and hidden culinary gems where locals eat."
                backgroundImage="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1920"
                primaryCta={{ label: "View All Tours", href: "/tours" }}
                secondaryCta={{ label: "Learn More", href: "/about" }}
                variant="full"
                overlay="dark"
                align="center"
              />
            </div>
          </div>
        </div>

        {/* Featured Tours Section */}
        <section className="py-12 px-4 md:px-10 lg:px-40">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Featured Food Tours"
              linkText="See all"
              linkHref="/tours"
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-surface-hover dark:bg-surface-dark-alt py-20 px-4 md:px-10 lg:px-40">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-12">
              <SectionHeader
                title="How It Works"
                subtitle="Three easy steps to start your culinary adventure through the streets of Seoul."
                align="center"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {HOW_IT_WORKS_STEPS.map((step) => (
                  <div
                    key={step.title}
                    className="flex flex-col gap-6 rounded-2xl border bg-white p-8 items-center text-center shadow-sm"
                    style={{ borderColor: '#e6dcdb' }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(238, 59, 43, 0.1)', color: '#ee3b2b' }}>
                      <Icon name={step.icon} size="xl" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-bold" style={{ color: '#181211' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#896561' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-10 lg:px-40">
          <div className="max-w-[1200px] mx-auto overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#181211' }}>
                Loved by Travelers
              </h2>
              <div className="flex justify-center gap-1" style={{ color: '#f59e0b' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="star" size="md" filled />
                ))}
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
              {testimonials.map((review) => (
                <div
                  key={review.id}
                  className="min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center bg-white p-8 rounded-2xl shadow-sm border"
                  style={{ borderColor: '#e6dcdb' }}
                >
                  <p className="italic text-lg mb-6" style={{ color: '#181211' }}>
                    &ldquo;{review.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    {review.avatar && (
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-bold" style={{ color: '#181211' }}>
                        {review.author}
                      </p>
                      <p className="text-xs" style={{ color: '#b59b98' }}>{review.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
