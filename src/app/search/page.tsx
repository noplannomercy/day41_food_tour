"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";
import { Button, Input, Icon } from "@/components/ui";
import { TourCard } from "@/components/shared";
import { getTours } from "@/lib/data";
import { TOUR_CATEGORIES } from "@/lib/constants";
import { Tour } from "@/types";

type SortOption = "relevant" | "newest" | "price-asc" | "price-desc";
type CategoryFilter = "all" | "tours" | "cooking";

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageLoading />}>
      <SearchPageContent />
    </Suspense>
  );
}

function SearchPageLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="flex-1 py-5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="animate-pulse">
            <div className="h-6 bg-border dark:bg-border-dark rounded w-32 mb-6" />
            <div className="h-12 bg-border dark:bg-border-dark rounded w-96 mb-4" />
            <div className="h-8 bg-border dark:bg-border-dark rounded w-48" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("relevant");

  const allTours = getTours();

  // Filter and search tours
  const filteredTours = useMemo(() => {
    let results = allTours;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (tour) =>
          tour.title.toLowerCase().includes(query) ||
          tour.description.toLowerCase().includes(query) ||
          tour.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (activeCategory === "tours") {
      results = results.filter((tour) => tour.category !== "cooking");
    } else if (activeCategory === "cooking") {
      results = results.filter((tour) => tour.category === "cooking");
    }

    // Sort
    switch (sortBy) {
      case "newest":
        // Since we don't have dates, use id as proxy
        results = [...results].sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case "price-asc":
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        results = [...results].sort((a, b) => b.price - a.price);
        break;
      case "relevant":
      default:
        results = [...results].sort((a, b) => b.rating - a.rating);
        break;
    }

    return results;
  }, [allTours, searchQuery, activeCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const categories: { value: CategoryFilter; label: string; icon: string }[] = [
    { value: "all", label: "All Results", icon: "grid_view" },
    { value: "tours", label: "Food Tours", icon: "tour" },
    { value: "cooking", label: "Cooking Classes", icon: "soup_kitchen" },
  ];

  const priceRanges = [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $75", min: 50, max: 75 },
    { label: "$75 - $100", min: 75, max: 100 },
    { label: "$100+", min: 100, max: Infinity },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />

      <main className="flex-1 py-5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap gap-2 py-2">
            <Link
              href="/"
              className="text-text-secondary text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-text-secondary text-sm font-medium">/</span>
            <span className="text-text-primary dark:text-white text-sm font-medium">
              Search Results
            </span>
          </nav>

          {/* Search Header */}
          <div className="py-6">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex gap-3 max-w-xl">
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                    <Icon name="search" size="md" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for tours, classes..."
                    className="w-full h-12 pl-11 pr-4 rounded-lg border border-border dark:border-border-dark bg-white dark:bg-surface-dark text-text-primary dark:text-white placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit">
                  Search
                </Button>
              </div>
            </form>

            <div className="flex flex-col gap-1">
              <h1 className="text-text-primary dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                {searchQuery
                  ? `Search Results for '${searchQuery}'`
                  : "All Experiences"}
              </h1>
              <p className="text-text-secondary text-base">
                {filteredTours.length} experience
                {filteredTours.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="flex flex-col gap-6 bg-white dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                {/* Category Filter */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <h2 className="text-text-primary dark:text-white text-base font-bold">
                      Categories
                    </h2>
                    <p className="text-text-secondary text-sm">Filter by type</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setActiveCategory(cat.value)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          activeCategory === cat.value
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-surface-hover dark:hover:bg-border-dark text-text-primary dark:text-white"
                        }`}
                      >
                        <Icon
                          name={cat.icon}
                          size="md"
                          className={
                            activeCategory === cat.value
                              ? "text-primary"
                              : "text-text-secondary"
                          }
                        />
                        <p
                          className={`text-sm ${
                            activeCategory === cat.value
                              ? "font-semibold"
                              : "font-medium"
                          }`}
                        >
                          {cat.label}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border-light dark:bg-border-dark" />

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                    setSortBy("relevant");
                  }}
                  className="w-full bg-primary/10 text-primary py-2 rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </aside>

            {/* Results Content */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Sort Tabs */}
              <div className="flex gap-4 border-b border-border-light dark:border-border-dark pb-px overflow-x-auto">
                <button
                  onClick={() => setSortBy("relevant")}
                  className={`pb-3 px-1 border-b-2 whitespace-nowrap ${
                    sortBy === "relevant"
                      ? "border-primary text-primary font-bold"
                      : "border-transparent text-text-secondary font-medium hover:text-text-primary dark:hover:text-white"
                  } text-sm transition-colors`}
                >
                  Most Relevant
                </button>
                <button
                  onClick={() => setSortBy("newest")}
                  className={`pb-3 px-1 border-b-2 whitespace-nowrap ${
                    sortBy === "newest"
                      ? "border-primary text-primary font-bold"
                      : "border-transparent text-text-secondary font-medium hover:text-text-primary dark:hover:text-white"
                  } text-sm transition-colors`}
                >
                  Newest First
                </button>
                <button
                  onClick={() => setSortBy("price-asc")}
                  className={`pb-3 px-1 border-b-2 whitespace-nowrap ${
                    sortBy === "price-asc"
                      ? "border-primary text-primary font-bold"
                      : "border-transparent text-text-secondary font-medium hover:text-text-primary dark:hover:text-white"
                  } text-sm transition-colors`}
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => setSortBy("price-desc")}
                  className={`pb-3 px-1 border-b-2 whitespace-nowrap ${
                    sortBy === "price-desc"
                      ? "border-primary text-primary font-bold"
                      : "border-transparent text-text-secondary font-medium hover:text-text-primary dark:hover:text-white"
                  } text-sm transition-colors`}
                >
                  Price: High to Low
                </button>
              </div>

              {/* Results */}
              {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              ) : (
                <NoResults
                  query={searchQuery}
                  onClear={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function NoResults({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  const suggestedTours = getTours().slice(0, 3);

  return (
    <div className="flex flex-col items-center py-16 px-4 text-center">
      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon name="search_off" size="xl" className="text-primary" />
      </div>
      <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
        No results found
      </h3>
      <p className="text-text-secondary max-w-md mb-6">
        {query
          ? `We couldn't find any experiences matching "${query}". Try adjusting your search or browse our popular tours below.`
          : "No experiences match your current filters. Try adjusting your criteria."}
      </p>
      <Button variant="primary" onClick={onClear}>
        Clear Filters
      </Button>

      {/* Suggested Tours */}
      <div className="w-full mt-12">
        <h4 className="text-lg font-bold text-text-primary dark:text-white mb-6">
          Popular Experiences
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestedTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
