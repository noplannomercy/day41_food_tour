import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SectionHeader, GuideCard } from "@/components/shared";
import { Button } from "@/components/ui";
import { getGuides } from "@/lib/data";

export const metadata = {
  title: "Meet Our Guides - Delicious Korea",
  description: "Meet our team of friendly, local food experts who will guide you through Seoul's culinary adventures.",
};

export default function GuidesPage() {
  const guides = getGuides();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Heading */}
        <section className="py-10 md:py-16 px-4 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 max-w-[800px]">
              <h1 className="text-text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Meet Our Guides
              </h1>
              <p className="text-text-secondary dark:text-text-dark-muted text-lg font-normal leading-relaxed">
                Discover the soul of Seoul with our team of friendly, local experts. More than just guides, they are culinary storytellers who love sharing the vibrant tastes and traditions of Korea with friends from around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="pb-20 px-4 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white dark:bg-surface-dark py-20 px-4 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-text-primary dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  Ready to explore Seoul&apos;s flavors?
                </h2>
                <p className="text-text-secondary dark:text-text-dark-muted text-lg max-w-[720px] mx-auto">
                  Join one of our expert guides for an unforgettable culinary journey through the heart of South Korea.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/tours">
                  <Button variant="primary" size="lg">
                    View All Tours
                  </Button>
                </Link>
                <Link href="/about#contact">
                  <Button variant="outline" size="lg">
                    Contact a Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
