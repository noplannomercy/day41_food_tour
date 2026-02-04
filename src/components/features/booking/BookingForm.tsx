"use client";

import { useState } from "react";
import { Input, Select, Textarea, Button, Icon } from "@/components/ui";
import { GuestCount, BookingFormData } from "@/types";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  tourId: string;
  initialDate?: string;
  initialTime?: string;
  initialGuests?: GuestCount;
  onSubmit?: (data: BookingFormData) => void;
  onBack?: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  nationality?: string;
}

const NATIONALITY_OPTIONS = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "kr", label: "South Korea" },
  { value: "sg", label: "Singapore" },
  { value: "other", label: "Other" },
];

export function BookingForm({
  tourId,
  initialDate = "Oct 24, 2024",
  initialTime = "5:30 PM",
  initialGuests = { adults: 2, children: 0, infants: 0 },
  onSubmit,
  onBack,
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    dietaryRestrictions: "",
  });

  const [guests, setGuests] = useState<GuestCount>(initialGuests);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.nationality) {
      newErrors.nationality = "Please select your nationality";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const bookingData: BookingFormData = {
      tourId,
      date: new Date(initialDate),
      guests,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      nationality: formData.nationality,
      dietaryRestrictions: formData.dietaryRestrictions || undefined,
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSubmit?.(bookingData);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const formatGuestDisplay = (): string => {
    const parts: string[] = [];
    if (guests.adults > 0) parts.push(`${guests.adults} Adult${guests.adults > 1 ? "s" : ""}`);
    if (guests.children > 0) parts.push(`${guests.children} Child${guests.children > 1 ? "ren" : ""}`);
    if (guests.infants > 0) parts.push(`${guests.infants} Infant${guests.infants > 1 ? "s" : ""}`);
    return parts.join(", ") || "No guests";
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Customer Information Section */}
      <div className="bg-surface dark:bg-surface-dark-alt p-6 rounded-xl shadow-sm border border-border dark:border-border-dark">
        <h2 className="text-text-primary dark:text-white text-xl font-bold mb-6 flex items-center gap-2">
          <Icon name="person" className="text-primary" />
          Traveler Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={errors.email}
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            error={errors.phone}
            required
          />

          <Select
            label="Nationality"
            options={NATIONALITY_OPTIONS}
            placeholder="Select your nationality"
            value={formData.nationality}
            onChange={(e) => handleInputChange("nationality", e.target.value)}
            error={errors.nationality}
            required
          />

          <div className="md:col-span-2">
            <Textarea
              label="Dietary Restrictions / Allergies"
              placeholder="Please let us know if you have any allergies (e.g., peanuts, shellfish) or dietary preferences (e.g., vegetarian)."
              value={formData.dietaryRestrictions}
              onChange={(e) =>
                handleInputChange("dietaryRestrictions", e.target.value)
              }
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Tour Schedule Section */}
      <div className="bg-surface dark:bg-surface-dark-alt p-6 rounded-xl shadow-sm border border-border dark:border-border-dark">
        <h2 className="text-text-primary dark:text-white text-xl font-bold mb-6 flex items-center gap-2">
          <Icon name="calendar_month" className="text-primary" />
          Tour Schedule
        </h2>

        <div className="flex flex-wrap gap-4">
          {/* Selected Date */}
          <div className="flex-1 min-w-[200px] p-4 rounded-lg border-2 border-primary bg-primary/5">
            <p className="text-xs font-bold text-primary uppercase">
              Selected Date
            </p>
            <p className="text-lg font-bold text-text-primary dark:text-white">
              {initialDate}
            </p>
            <p className="text-sm text-text-secondary">{initialTime}</p>
          </div>

          {/* Participants */}
          <div className="flex-1 min-w-[200px] p-4 rounded-lg border border-border dark:border-border-dark">
            <p className="text-xs font-bold text-text-secondary uppercase">
              Participants
            </p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-lg font-bold text-text-primary dark:text-white">
                {formatGuestDisplay()}
              </p>
              <button
                type="button"
                className="text-primary text-sm font-bold hover:underline"
                onClick={() => {
                  // In a real app, this would open a modal to edit guests
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-text-secondary font-bold hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" />
          Back to Selection
        </button>

        <Button
          type="submit"
          variant="primary"
          size="xl"
          disabled={isSubmitting}
          className={cn(
            "px-10 shadow-lg",
            isSubmitting && "opacity-50 cursor-not-allowed"
          )}
        >
          {isSubmitting ? "Processing..." : "Continue to Payment"}
        </Button>
      </div>
    </form>
  );
}
