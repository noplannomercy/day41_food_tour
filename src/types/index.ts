export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  maxGuests: number;
  rating: number;
  reviewCount: number;
  category: string;
  image: string;
  badge?: string;
  highlights?: string[];
  includes?: string[];
  meetingPoint?: string;
  itinerary?: ItineraryItem[];
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Guide {
  id: string;
  name: string;
  title: string;
  bio: string;
  languages: string[];
  experience: number;
  image: string;
}

export interface Review {
  id: string;
  tourId: string;
  author: string;
  country: string;
  rating: number;
  content: string;
  date: string;
  avatar?: string;
  tourName?: string;
}

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
}

export interface BookingFormData {
  tourId: string;
  date: Date;
  guests: GuestCount;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  dietaryRestrictions?: string;
}

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg" | "xl";
