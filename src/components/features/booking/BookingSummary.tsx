"use client";

import { Icon } from "@/components/ui";
import { GuestCount } from "@/types";
import { formatPrice } from "@/lib/utils";

interface BookingSummaryProps {
  tourName: string;
  tourImage: string;
  location?: string;
  selectedDate: string;
  selectedTime: string;
  guests: GuestCount;
  pricePerAdult: number;
  pricePerChild?: number;
  serviceFee?: number;
  currency?: string;
}

export function BookingSummary({
  tourName,
  tourImage,
  location = "Seoul, South Korea",
  selectedDate,
  selectedTime,
  guests,
  pricePerAdult,
  pricePerChild = pricePerAdult * 0.7,
  serviceFee = 5,
  currency = "USD"
}: BookingSummaryProps) {
  const adultTotal = guests.adults * pricePerAdult;
  const childTotal = guests.children * pricePerChild;
  const subtotal = adultTotal + childTotal;
  const total = subtotal + serviceFee;

  return (
    <div className="sticky top-6 flex flex-col gap-6">
      {/* Section Header */}
      <h2 className="text-text-primary dark:text-white text-[22px] font-bold leading-tight tracking-tight px-1">
        Tour Summary
      </h2>

      {/* Card */}
      <div className="rounded-xl bg-surface dark:bg-surface-dark-alt overflow-hidden shadow-lg border border-border dark:border-border-dark">
        {/* Tour Image */}
        <div
          className="w-full h-48 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("${tourImage}")` }}
        />

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          {/* Tour Title */}
          <div className="flex flex-col gap-1">
            <p className="text-text-primary dark:text-white text-lg font-bold leading-tight">
              {tourName}
            </p>
            <p className="text-text-secondary dark:text-text-dark-muted text-sm font-normal flex items-center gap-1">
              <Icon name="location_on" size="sm" />
              {location}
            </p>
          </div>

          {/* Schedule Info */}
          <div className="flex flex-col gap-2 bg-primary/5 dark:bg-primary/10 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="calendar_month" size="sm" className="text-primary" />
              <span className="font-medium">{selectedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="schedule" size="sm" className="text-primary" />
              <span className="font-medium">{selectedTime}</span>
            </div>
          </div>

          <hr className="border-border dark:border-border-dark" />

          {/* Price Breakdown */}
          <div className="flex flex-col gap-3">
            {guests.adults > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">
                  Adult x {guests.adults}
                </span>
                <span className="font-bold text-text-primary dark:text-white">
                  {formatPrice(adultTotal, currency)}
                </span>
              </div>
            )}
            {guests.children > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">
                  Child x {guests.children}
                </span>
                <span className="font-bold text-text-primary dark:text-white">
                  {formatPrice(childTotal, currency)}
                </span>
              </div>
            )}
            {guests.infants > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">
                  Infant x {guests.infants}
                </span>
                <span className="font-bold text-text-primary dark:text-white">
                  Free
                </span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Service Fee</span>
              <span className="font-bold text-text-primary dark:text-white">
                {formatPrice(serviceFee, currency)}
              </span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-base border-t border-dashed border-border pt-3 mt-2">
              <span className="font-bold">Total ({currency})</span>
              <span className="font-black text-3xl text-primary">
                {formatPrice(total, currency)}
              </span>
            </div>
          </div>

          {/* Secure Booking Notice */}
          <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg mt-2">
            <p className="text-xs text-text-secondary dark:text-text-dark-muted mb-2 flex items-center gap-1 font-bold">
              <Icon name="verified_user" size="sm" />
              SECURE BOOKING
            </p>
            <p className="text-[10px] text-text-secondary leading-tight">
              Your payment details are encrypted and your reservation is
              instantly confirmed.
            </p>
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="bg-surface-hover dark:bg-border-dark p-4 rounded-lg">
        <p className="text-sm font-bold flex items-center gap-2 mb-1">
          <Icon name="info" size="sm" />
          Cancellation Policy
        </p>
        <p className="text-xs text-text-secondary dark:text-text-dark-muted">
          Free cancellation up to 24 hours before the tour start time (local
          time).
        </p>
      </div>
    </div>
  );
}
