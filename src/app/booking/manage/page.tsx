"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { Input, Button, Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

// Mock booking data
const MOCK_BOOKING = {
  id: "DK-88291",
  email: "alex.jones@example.com",
  tourName: "Seoul Night Market Extravaganza",
  status: "Confirmed",
  date: "Oct 26, 2024",
  time: "6:30 PM (KST)",
  guests: "2 Adults",
  total: "158,000",
  currency: "KRW",
  meetingPoint: "Gwangjang Market Gate 1",
  guide: {
    name: "Min-Hee",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCap5ZS9ShFDJxe1uLvxv9AMG-e5Z2dS6Ygk8XElS2kSx18s7PGKLZ2WWQ_TD5DgJ3gy6ZbckNhw3EGiz2ikrsmOD1uQGFpEuOQI-Ks4snhE3lHQdFXw-hRcBemRgQQaNMUJP-uzzCBSmZhOelXE2OsjQybD8q8Nwt7PO1-JtWDXEpXh7M0C4xOmt89oINbjJESYiCkmjacU8eRW9EZuZ3mOGhAyWf_9BQ9uFpK2BbWPMXgb26dn2QrjzKZnN1949CLNpQeRUtpWU",
    quote: "I can't wait to show you my favorite food stalls!",
  },
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuChVS2d6YPI0hNBxr38KyiNN-qzQyb64y2F70Pw-o-QATu5hcVmoC4gIrT6OcrrN8o4SNy5-NQKJ7TIKtwN4_Jse-Azy8ir3FZQzGkxFdoY9gxkTRlvqaFuxU_fhQlNlL6_kSb4auiBwcINWMOy4gqdIf0x3ywLu4Zrxjim5Ap6gg6RfU-sVtUIawSUljRv8jFpiwjeiIb6im-qdOU07bDyS5H8pPWOWTK4Y7WT8jZImWVrvsWhcT_jngnJwW6GSUx6ra4vP830iRI",
};

interface FormErrors {
  email?: string;
  bookingId?: string;
}

export default function ManageBookingPage() {
  const [email, setEmail] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [booking, setBooking] = useState<typeof MOCK_BOOKING | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!bookingId.trim()) {
      newErrors.bookingId = "Booking ID is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo, show booking if credentials match mock data
    if (
      email.toLowerCase() === MOCK_BOOKING.email.toLowerCase() &&
      bookingId.toUpperCase() === MOCK_BOOKING.id.toUpperCase()
    ) {
      setBooking(MOCK_BOOKING);
    } else {
      // Show not found error
      setErrors({
        bookingId:
          "No booking found with these details. Please check and try again.",
      });
    }

    setIsLoading(false);
  };

  const handleDownloadVoucher = () => {
    alert("Downloading PDF voucher...");
  };

  const handleReschedule = () => {
    alert("Opening reschedule options...");
  };

  const handleCancel = () => {
    if (
      confirm(
        "Are you sure you want to cancel this booking? This action cannot be undone."
      )
    ) {
      alert("Booking cancellation requested.");
    }
  };

  const handleInputChange = (field: "email" | "bookingId", value: string) => {
    if (field === "email") {
      setEmail(value);
    } else {
      setBookingId(value);
    }
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />

      <main className="flex-1 flex flex-col items-center">
        <div className="flex flex-col max-w-[960px] w-full flex-1 px-4 md:px-10 py-10">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4 mb-6">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-text-primary dark:text-white text-4xl font-black leading-tight tracking-tight">
                Manage Your Booking
              </h1>
              <p className="text-text-secondary dark:text-text-dark-muted text-base font-normal leading-normal">
                Enter your details to view or modify your food tour experience.
              </p>
            </div>
          </div>

          {/* Booking Lookup Section */}
          <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-sm border border-border dark:border-border-dark p-6 mb-10">
            <form onSubmit={handleLookup}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="e.g. traveler@example.com"
                  value={email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  error={errors.email}
                />
                <Input
                  label="Booking ID"
                  placeholder="e.g. DK-12345"
                  value={bookingId}
                  onChange={(e) =>
                    handleInputChange("bookingId", e.target.value)
                  }
                  error={errors.bookingId}
                />
              </div>
              <div className="flex justify-start pt-6">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Looking up..." : "Lookup Booking"}
                </Button>
              </div>
            </form>

            {/* Demo Hint */}
            <p className="text-xs text-text-muted mt-4">
              Demo: Use email &quot;alex.jones@example.com&quot; and booking ID &quot;DK-88291&quot; to
              see a sample booking.
            </p>
          </div>

          {/* Booking Details (shown after successful lookup) */}
          {booking && (
            <>
              {/* Section Header */}
              <div className="mb-2">
                <h2 className="text-text-primary dark:text-white text-[22px] font-bold leading-tight tracking-tight px-4 pb-3">
                  Upcoming Tour: {booking.tourName}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Meeting Point Map */}
                  <div className="bg-surface dark:bg-surface-dark rounded-xl overflow-hidden border border-border dark:border-border-dark">
                    <div className="p-4 border-b border-border dark:border-border-dark flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon name="location_on" className="text-primary" />
                        <span className="font-bold">
                          Meeting Point: {booking.meetingPoint}
                        </span>
                      </div>
                      <span className="text-xs text-text-secondary font-medium">
                        {booking.time}
                      </span>
                    </div>

                    {/* Map Image */}
                    <div className="h-64 bg-slate-200 relative">
                      <Image
                        src={booking.mapImage}
                        alt="Map showing meeting point"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-primary text-white p-2 rounded-full shadow-lg animate-bounce">
                          <Icon name="person_pin_circle" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/5 dark:bg-primary/10">
                      <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                        Look for the guide holding a red &quot;Delicious Korea&quot; flag
                        near the main entrance stairs.
                      </p>
                    </div>
                  </div>

                  {/* Host Contact */}
                  <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl border border-border dark:border-border-dark flex items-center gap-4">
                    <div className="size-16 rounded-full overflow-hidden bg-slate-200 relative flex-shrink-0">
                      <Image
                        src={booking.guide.image}
                        alt={booking.guide.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-text-primary dark:text-white">
                        Your Host: {booking.guide.name}
                      </h3>
                      <p className="text-text-secondary dark:text-text-dark-muted text-sm italic truncate">
                        &quot;{booking.guide.quote}&quot;
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="p-2 rounded-full border border-border dark:border-border-dark text-primary hover:bg-primary/10 transition-colors">
                        <Icon name="chat_bubble" />
                      </button>
                      <button className="p-2 rounded-full border border-border dark:border-border-dark text-primary hover:bg-primary/10 transition-colors">
                        <Icon name="call" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sidebar Actions */}
                <div className="space-y-4">
                  {/* Actions Card */}
                  <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl border border-border dark:border-border-dark shadow-sm">
                    <h4 className="font-bold mb-4 text-text-primary dark:text-white">
                      Actions
                    </h4>
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="primary"
                        fullWidth
                        icon="download"
                        iconPosition="left"
                        onClick={handleDownloadVoucher}
                      >
                        Download PDF Voucher
                      </Button>

                      <button
                        onClick={handleReschedule}
                        className={cn(
                          "flex items-center gap-3 w-full px-4 py-3 rounded-lg",
                          "bg-primary/10 text-primary font-bold",
                          "border border-primary/20 hover:bg-primary/20 transition-colors"
                        )}
                      >
                        <Icon name="calendar_month" />
                        <span>Reschedule Tour</span>
                      </button>

                      <button
                        onClick={handleCancel}
                        className={cn(
                          "flex items-center gap-3 w-full px-4 py-3 rounded-lg",
                          "border border-border dark:border-border-dark",
                          "text-text-secondary dark:text-text-dark-muted font-medium",
                          "hover:bg-surface-hover dark:hover:bg-white/5 transition-colors"
                        )}
                      >
                        <Icon name="cancel" />
                        <span>Cancel Booking</span>
                      </button>
                    </div>
                  </div>

                  {/* Booking Info Card */}
                  <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl border border-border dark:border-border-dark shadow-sm">
                    <h4 className="font-bold mb-2 text-text-primary dark:text-white">
                      Booking Info
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary dark:text-text-dark-muted">
                          Status
                        </span>
                        <span className="font-bold text-success">
                          {booking.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary dark:text-text-dark-muted">
                          Date
                        </span>
                        <span className="font-bold text-text-primary dark:text-white">
                          {booking.date}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary dark:text-text-dark-muted">
                          Guests
                        </span>
                        <span className="font-bold text-text-primary dark:text-white">
                          {booking.guests}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary dark:text-text-dark-muted">
                          Total
                        </span>
                        <span className="font-bold text-text-primary dark:text-white">
                          {booking.currency === "KRW" ? "\u20A9" : "$"}
                          {booking.total}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary dark:text-text-dark-muted">
                          Booking ID
                        </span>
                        <span className="font-bold text-text-primary dark:text-white">
                          {booking.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border dark:border-border-dark py-8 px-10 text-center text-text-secondary dark:text-text-dark-muted text-sm">
        <p>
          &copy; {new Date().getFullYear()} Delicious Korea Food Tours. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
