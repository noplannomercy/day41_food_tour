import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button, Icon } from "@/components/ui";
import { getFeaturedTours } from "@/lib/data";
import { TourCard } from "@/components/shared";

export default function NotFound() {
  const suggestedTours = getFeaturedTours(3);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-[960px] w-full text-center">
          {/* 404 Visual */}
          <div className="flex flex-col items-center gap-8 px-4 py-8">
            {/* Animated 404 Number */}
            <div className="relative">
              <h1 className="text-[150px] md:text-[200px] font-black text-primary/10 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                  <Icon name="search_off" className="text-primary text-6xl md:text-8xl" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col items-center gap-3 max-w-[520px]">
              <p className="text-primary text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                Oops! This dish is missing.
              </p>
              <p className="text-text-secondary dark:text-text-dark-muted text-base md:text-lg leading-relaxed text-center">
                It looks like the page you are looking for has been devoured or
                moved to another table. Don&apos;t worry, there&apos;s plenty more of
                Seoul to taste!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
              <Link href="/" className="flex-1 min-w-[160px]">
                <Button variant="primary" size="lg" fullWidth icon="home" iconPosition="left">
                  Return to Home
                </Button>
              </Link>
              <Link href="/tours" className="flex-1 min-w-[160px]">
                <Button variant="outline" size="lg" fullWidth icon="explore" iconPosition="left">
                  Browse Tours
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
            <Icon name="restaurant" className="text-primary" size="lg" />
            <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
          </div>

          {/* Suggested Tours */}
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary dark:text-white mb-2 text-center">
              Meanwhile, explore our top tours
            </h2>
            <p className="text-text-secondary mb-8 text-center">
              Don&apos;t let a missing page stop your culinary adventure
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 p-8 bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark">
            <h3 className="text-lg font-bold text-text-primary dark:text-white mb-6">
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <QuickLink href="/tours" icon="tour" label="All Tours" />
              <QuickLink href="/cooking-classes" icon="soup_kitchen" label="Cooking Classes" />
              <QuickLink href="/about" icon="info" label="About Us" />
              <QuickLink href="/faq" icon="help" label="FAQ" />
              <QuickLink href="/about#contact" icon="mail" label="Contact" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function QuickLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-hover dark:bg-border-dark text-text-primary dark:text-white hover:bg-primary hover:text-white transition-colors"
    >
      <Icon name={icon} size="sm" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
