"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";
import {
  ProgressBar,
  BookingForm,
  BookingSummary,
} from "@/components/features/booking";
import { BookingFormData, GuestCount } from "@/types";

// Mock tour data - in a real app, this would come from URL params or state
const MOCK_TOUR = {
  id: "gwangjang-market-tour",
  name: "Traditional Market Food Tour",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAy4DGrv2z3PDi6N3nfW_uPhVmwFCB3mQa6bn7XtpCyF9MzySFcOut1Byp91MD7n-TGEvhXTNxDHAmtGzN8Tpee5lHeOTOReveOsGFKJxbPmC79MFdye81NS1MIutjHlS42nG1L927x6v2azAt46zJ8bHRqRCtfzaweliBGh74bxPbuMsLJEqk_CYg_ZHMhZeX7C13JiRu1dtRHbaRPnGFWlkM9XO7J3uUFkgndB8IiiUru67HNiiK-pNX1WN4hyX9cTNK6wU3yQ74",
  pricePerAdult: 75,
  pricePerChild: 52.5,
};

const MOCK_SELECTION = {
  date: "Oct 24, 2024",
  time: "Thursday, 5:30 PM",
  guests: {
    adults: 2,
    children: 0,
    infants: 0,
  } as GuestCount,
};

export default function BookingPage() {
  const router = useRouter();
  const [currentStep] = useState(2); // Step 2: Customer Information

  const handleFormSubmit = (data: BookingFormData) => {
    // In a real app, save to state/context and navigate to payment
    console.log("Booking data:", data);
    // router.push("/booking/payment");
    alert("Booking submitted! In a real app, you would proceed to payment.");
  };

  const handleBack = () => {
    // In a real app, navigate back to tour selection/detail
    router.back();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />

      <main className="flex-1 flex justify-center py-10 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col max-w-[1200px] flex-1">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-text-primary dark:text-white text-4xl font-black leading-tight tracking-tight">
                Secure Booking
              </h1>
              <p className="text-text-secondary dark:text-text-dark-muted text-base font-normal leading-normal">
                Complete your reservation for an authentic Seoul food experience.
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar currentStep={currentStep} totalSteps={3} />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <BookingForm
                tourId={MOCK_TOUR.id}
                initialDate={MOCK_SELECTION.date}
                initialTime={MOCK_SELECTION.time}
                initialGuests={MOCK_SELECTION.guests}
                onSubmit={handleFormSubmit}
                onBack={handleBack}
              />
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              <BookingSummary
                tourName={MOCK_TOUR.name}
                tourImage={MOCK_TOUR.image}
                selectedDate={MOCK_SELECTION.date}
                selectedTime={MOCK_SELECTION.time}
                guests={MOCK_SELECTION.guests}
                pricePerAdult={MOCK_TOUR.pricePerAdult}
                pricePerChild={MOCK_TOUR.pricePerChild}
                serviceFee={5}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer for Booking Page */}
      <footer className="py-10 border-t border-border dark:border-border-dark text-center">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Delicious Korea. Licensed Tour Agency in South
          Korea.
        </p>
        <div className="flex justify-center gap-6 mt-4 opacity-50 text-text-secondary">
          <span className="material-symbols-outlined">payments</span>
          <span className="material-symbols-outlined">credit_card</span>
          <span className="material-symbols-outlined">account_balance_wallet</span>
        </div>
      </footer>
    </div>
  );
}
