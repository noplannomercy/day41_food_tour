import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Hero, SectionHeader, StarRating } from "@/components/shared";
import { ReviewCard } from "@/components/features/review/ReviewCard";
import { Button, Icon } from "@/components/ui";
import { getReviews } from "@/lib/data";

export const metadata = {
  title: "Guest Reviews & Gallery - Delicious Korea",
  description: "Read reviews from our guests and see their food tour experiences in Seoul.",
};

export default function ReviewsPage() {
  const reviews = getReviews();
  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews;
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const fiveStarPercentage = Math.round((fiveStarCount / totalReviews) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1280px]">
            <div className="p-0 sm:p-4">
              <Hero
                title="Guest Experiences & Gallery"
                subtitle="Capturing the flavors of Seoul and the smiles of our global food explorers. Follow our journey through the markets."
                backgroundImage="https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&w=1920"
                primaryCta={{ label: "Join a Tour", href: "/tours" }}
                secondaryCta={{ label: "Write a Review", href: "/reviews/write" }}
                variant="compact"
                overlay="dark"
                align="center"
              />
            </div>
          </div>
        </div>

        {/* Review Statistics */}
        <section className="py-12 px-4 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-sm border border-border dark:border-border-dark">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Overall Rating */}
                <div className="flex flex-col items-center text-center">
                  <p className="text-5xl font-black text-primary mb-2">
                    {averageRating.toFixed(1)}
                  </p>
                  <StarRating rating={Math.round(averageRating)} size="md" />
                  <p className="text-text-muted text-sm mt-2">
                    Based on {totalReviews} reviews
                  </p>
                </div>

                {/* Stats */}
                <div className="flex gap-8 md:gap-16">
                  <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold text-text-primary dark:text-white">
                      {fiveStarPercentage}%
                    </p>
                    <p className="text-text-muted text-sm">5-Star Reviews</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold text-text-primary dark:text-white">
                      500+
                    </p>
                    <p className="text-text-muted text-sm">Happy Guests</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold text-text-primary dark:text-white">
                      50+
                    </p>
                    <p className="text-text-muted text-sm">Countries</p>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/reviews/write">
                  <Button variant="primary" size="lg" icon="edit">
                    Write a Review
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pb-20 px-4 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="What Our Guests Say"
              subtitle="Read authentic reviews from travelers who have experienced our food tours."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="pb-20 px-4 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-primary-10 dark:bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-2 text-text-primary dark:text-white">
                    <Icon name="photo_camera" className="text-primary" />
                    Join the Community
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-muted">
                    Share your food tour memories with{" "}
                    <span className="font-bold text-primary">#DeliciousKoreaTours</span>
                  </p>
                </div>
                <Button variant="outline" icon="open_in_new">
                  Follow @DeliciousKorea
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {[
                  "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/3296398/pexels-photo-3296398.jpeg?auto=compress&cs=tinysrgb&w=400",
                ].map((url, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `url("${url}")` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-10 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center py-16 px-4 bg-primary rounded-2xl text-white">
              <h2 className="text-3xl font-black mb-4">
                Ready for your own Korean food adventure?
              </h2>
              <p className="max-w-xl mb-8 opacity-90">
                Book your tour now and let us show you the real heart of Seoul&apos;s culinary scene. Limited spots available for the night market tours!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/booking">
                  <Button variant="secondary" size="lg">
                    Book Now
                  </Button>
                </Link>
                <Link href="/gift">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-2 border-white hover:bg-white/10"
                  >
                    Gift a Tour
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
