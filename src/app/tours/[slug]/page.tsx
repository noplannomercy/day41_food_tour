import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getTourBySlug, getTours } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

interface TourDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tours = getTours();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[1200px] flex-1 px-4 md:px-10">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap gap-2 py-4">
            <Link
              href="/"
              className="text-text-secondary text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
            <span className="text-text-secondary text-sm font-medium">/</span>
            <Link
              href="/tours"
              className="text-text-secondary text-sm font-medium hover:text-primary"
            >
              Tours
            </Link>
            <span className="text-text-secondary text-sm font-medium">/</span>
            <span className="text-text-primary dark:text-white text-sm font-medium">
              {tour.title}
            </span>
          </nav>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px] shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("${tour.image}")`,
                }}
              >
                <div className="flex p-8 flex-col gap-2">
                  <div className="flex gap-2">
                    {tour.badge && (
                      <Badge variant="primary">{tour.badge}</Badge>
                    )}
                    <Badge variant="outline">{tour.category.toUpperCase()}</Badge>
                  </div>
                  <h1 className="text-white text-[32px] md:text-[40px] font-extrabold leading-tight">
                    {tour.title}
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <h2 className="text-text-primary dark:text-white text-4xl font-black leading-tight tracking-tight">
                  Experience Authentic Seoul
                </h2>
                <p className="text-text-secondary dark:text-text-dark-muted text-lg font-normal leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              {tour.highlights && tour.highlights.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {tour.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-10 rounded-lg"
                    >
                      <Icon name="check_circle" size="sm" className="text-primary" />
                      <span className="text-sm font-medium text-text-primary dark:text-white">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Itinerary */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <section className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border dark:border-border-dark">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-text-primary dark:text-white">
                    <Icon name="schedule" className="text-primary" />
                    Tour Itinerary
                  </h3>
                  <div className="grid grid-cols-[40px_1fr] gap-x-4">
                    {tour.itinerary.map((item, index) => (
                      <div key={item.time} className="contents">
                        {/* Timeline Icon */}
                        <div className="flex flex-col items-center gap-1">
                          {index > 0 && (
                            <div className="w-[2px] bg-border dark:bg-border-dark h-4" />
                          )}
                          <div className="text-primary border-2 border-primary rounded-full p-1">
                            <Icon name={item.icon || "location_on"} size="md" />
                          </div>
                          {index < tour.itinerary!.length - 1 && (
                            <div className="w-[2px] bg-border dark:bg-border-dark h-10 grow" />
                          )}
                        </div>

                        {/* Timeline Content */}
                        <div
                          className={`flex flex-1 flex-col ${
                            index < tour.itinerary!.length - 1 ? "pb-8" : ""
                          }`}
                        >
                          <p className="text-text-primary dark:text-white text-lg font-bold leading-normal">
                            {item.title}
                          </p>
                          <p className="text-primary font-semibold text-sm">
                            {item.time}
                          </p>
                          <p className="text-text-secondary dark:text-text-dark-muted mt-1 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* What's Included */}
              {tour.includes && tour.includes.length > 0 && (
                <section className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border dark:border-border-dark">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-text-primary dark:text-white">
                    <Icon name="inventory_2" className="text-primary" />
                    What&apos;s Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tour.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Icon
                          name="check"
                          size="sm"
                          className="text-success"
                        />
                        <span className="text-sm text-text-primary dark:text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Booking Card */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-xl border border-primary/20">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-text-secondary dark:text-text-dark-muted text-sm font-medium">
                        Starting from
                      </p>
                      <p className="text-3xl font-black text-primary">
                        {formatPrice(tour.price)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-text-primary dark:text-white text-sm font-bold flex items-center justify-end gap-1">
                        <Icon
                          name="star"
                          size="sm"
                          filled
                          className="text-warning"
                        />
                        {tour.rating}
                      </p>
                      <p className="text-text-secondary dark:text-text-dark-muted text-xs">
                        {tour.reviewCount}+ Reviews
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-text-primary dark:text-white">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-lg border-border dark:border-border-dark bg-surface-hover dark:bg-surface-dark-alt p-3 text-sm focus:ring-primary focus:border-primary text-text-primary dark:text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-text-primary dark:text-white">
                        Guests
                      </label>
                      <select className="w-full rounded-lg border-border dark:border-border-dark bg-surface-hover dark:bg-surface-dark-alt p-3 text-sm focus:ring-primary focus:border-primary text-text-primary dark:text-white">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4+ People</option>
                      </select>
                    </div>

                    <Button
                      variant="primary"
                      size="xl"
                      fullWidth
                      icon="bolt"
                      iconPosition="left"
                    >
                      Book Now
                    </Button>

                    <p className="text-center text-text-secondary dark:text-text-dark-muted text-xs">
                      Free cancellation up to 24h before
                    </p>
                  </div>

                  {/* Tour Info */}
                  <div className="mt-8 pt-6 border-t border-border dark:border-border-dark space-y-3">
                    <div className="flex items-center gap-3 text-sm text-text-primary dark:text-white">
                      <Icon name="timer" className="text-primary" size="md" />
                      <span>Duration: {tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-primary dark:text-white">
                      <Icon name="language" className="text-primary" size="md" />
                      <span>English &amp; Korean speaking guide</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-primary dark:text-white">
                      <Icon name="group" className="text-primary" size="md" />
                      <span>Small group (max {tour.maxGuests})</span>
                    </div>
                    {tour.meetingPoint && (
                      <div className="flex items-center gap-3 text-sm text-text-primary dark:text-white">
                        <Icon name="location_on" className="text-primary" size="md" />
                        <span>{tour.meetingPoint}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expert Tip */}
                <div className="bg-primary-10 p-4 rounded-xl border border-primary/20">
                  <div className="flex gap-3">
                    <Icon name="info" className="text-primary" />
                    <div>
                      <p className="text-sm font-bold text-text-primary dark:text-white">
                        Expert Tip
                      </p>
                      <p className="text-xs text-text-secondary dark:text-text-dark-muted mt-1 leading-relaxed">
                        Arrive hungry! We will be tasting many different types
                        of street foods including snacks and full dishes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
