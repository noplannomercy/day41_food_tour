import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TourCard } from "@/components/shared/Card";
import { Icon } from "@/components/ui/Icon";
import { getTours } from "@/lib/data";
import { TOUR_CATEGORIES } from "@/lib/constants";

export default function ToursPage() {
  const tours = getTours();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1200px] px-4 md:px-10 py-8">
          {/* Hero Banner */}
          <div className="mb-8">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[300px] shadow-lg border border-black/5"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
              }}
            >
              <div className="flex flex-col p-8">
                <h1 className="text-white text-[40px] font-bold leading-tight">
                  Our Food Tours
                </h1>
                <p className="text-white/80 text-lg max-w-xl">
                  Discover the authentic flavors of Seoul with our expert local
                  guides. From bustling markets to hidden alleyway gems.
                </p>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex gap-3 flex-wrap items-center">
              {TOUR_CATEGORIES.map((category, index) => (
                <button
                  key={category.value}
                  className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-5 transition-all ${
                    index === 0
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white dark:bg-surface-dark text-text-primary dark:text-white border border-border dark:border-border-dark hover:border-primary/50"
                  }`}
                >
                  {"icon" in category && category.icon && (
                    <Icon name={category.icon} size="sm" />
                  )}
                  <span className={`text-sm ${index === 0 ? "font-bold" : "font-medium"}`}>
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-dark-muted">
              <span>Sort by:</span>
              <select className="bg-transparent border-none focus:ring-0 text-text-primary dark:text-white font-bold cursor-pointer pr-8">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center p-4 border-t border-border dark:border-border-dark mt-8">
            <button className="flex size-10 items-center justify-center hover:bg-surface-hover dark:hover:bg-surface-dark rounded-full">
              <Icon name="chevron_left" />
            </button>
            <div className="flex items-center gap-1">
              <button className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white rounded-full bg-primary">
                1
              </button>
              <button className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-primary dark:text-white hover:bg-surface-hover dark:hover:bg-surface-dark rounded-full">
                2
              </button>
            </div>
            <button className="flex size-10 items-center justify-center hover:bg-surface-hover dark:hover:bg-surface-dark rounded-full">
              <Icon name="chevron_right" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
