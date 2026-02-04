import { Tour, Guide, Review } from "@/types";
import toursData from "../../data/tours.json";
import guidesData from "../../data/guides.json";
import reviewsData from "../../data/reviews.json";

export function getTours(): Tour[] {
  return toursData as Tour[];
}

export function getTourBySlug(slug: string): Tour | undefined {
  return toursData.find((tour) => tour.slug === slug) as Tour | undefined;
}

export function getToursByCategory(category: string): Tour[] {
  if (category === "all") return toursData as Tour[];
  return toursData.filter((tour) => tour.category === category) as Tour[];
}

export function getFeaturedTours(limit: number = 3): Tour[] {
  return (toursData as Tour[])
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function getGuides(): Guide[] {
  return guidesData as Guide[];
}

export function getGuideById(id: string): Guide | undefined {
  return guidesData.find((guide) => guide.id === id) as Guide | undefined;
}

export function getReviews(): Review[] {
  return reviewsData as Review[];
}

export function getReviewsByTourId(tourId: string): Review[] {
  return reviewsData.filter((review) => review.tourId === tourId) as Review[];
}

export function getFeaturedReviews(limit: number = 3): Review[] {
  return (reviewsData as Review[])
    .filter((review) => review.rating === 5)
    .slice(0, limit);
}
