"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button, Icon, Badge } from "@/components/ui";
import { Hero, SectionHeader } from "@/components/shared";

const COOKING_CLASSES = [
  {
    id: "bibimbap",
    name: "Bibimbap Workshop",
    description: "Master the art of Korea's iconic rice bowl with colorful vegetables and gochujang sauce.",
    price: 70,
    duration: "2.5 hours",
    image: "https://images.pexels.com/photos/5908229/pexels-photo-5908229.jpeg?auto=compress&cs=tinysrgb&w=800",
    whatYoullLearn: [
      "Rice cooking techniques",
      "Vegetable preparation (namul)",
      "Making authentic gochujang sauce",
      "Plating and presentation",
    ],
    availability: "4 spots left",
    availabilityType: "available",
  },
  {
    id: "kimchi",
    name: "Kimchi Making Intensive",
    description: "Learn the ancient art of fermenting kimchi with recipes passed down through generations.",
    price: 65,
    duration: "3 hours",
    image: "https://images.pexels.com/photos/6249498/pexels-photo-6249498.jpeg?auto=compress&cs=tinysrgb&w=800",
    whatYoullLearn: [
      "Selecting and preparing napa cabbage",
      "Making authentic kimchi paste",
      "Traditional fermentation methods",
      "Take home your own kimchi jar",
    ],
    availability: "Limited",
    availabilityType: "limited",
  },
  {
    id: "korean-bbq",
    name: "Korean BBQ Mastery",
    description: "Discover the secrets of perfect Korean BBQ, from marinades to grilling techniques.",
    price: 85,
    duration: "3 hours",
    image: "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=800",
    whatYoullLearn: [
      "Meat selection and preparation",
      "Authentic marinade recipes",
      "Grilling techniques (bulgogi & galbi)",
      "Perfect side dishes (banchan)",
    ],
    availability: "8 spots left",
    availabilityType: "available",
  },
];

const WHATS_INCLUDED = [
  {
    icon: "shopping_basket",
    title: "Fresh Ingredients",
    description: "Sourced daily from the local Mangwon traditional market.",
  },
  {
    icon: "checkroom",
    title: "Traditional Apron",
    description: "Rent a beautiful Hanbok-style apron for the full experience.",
  },
  {
    icon: "menu_book",
    title: "Recipe Cards",
    description: "Take home printed recipes available in English, Spanish, and French.",
  },
  {
    icon: "restaurant",
    title: "Full Meal",
    description: "Sit down and enjoy the 3-course meal you've prepared yourself.",
  },
];

const UPCOMING_CLASSES = [
  {
    date: "Tomorrow, 10:30 AM",
    classType: "Morning Kimchi Intensive",
    availability: "4 spots left",
    availabilityType: "available",
    price: 65,
  },
  {
    date: "Sat, Feb 8, 11:00 AM",
    classType: "Signature Bibimbap Class",
    availability: "Limited",
    availabilityType: "limited",
    price: 70,
  },
  {
    date: "Sun, Feb 9, 05:00 PM",
    classType: "Evening Korean BBQ",
    availability: "8 spots left",
    availabilityType: "available",
    price: 85,
  },
];

export default function CookingClassesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="px-4 md:px-10 py-5">
          <Hero
            title="Master the Art of Korean Cuisine"
            subtitle="Join our expert chefs in the heart of Seoul for a hands-on journey through traditional flavors. From fermenting your own Kimchi to assembling the perfect Bibimbap."
            backgroundImage="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1600"
            primaryCta={{ label: "Book a Class", href: "/booking" }}
            secondaryCta={{ label: "View Schedule", href: "#schedule" }}
            variant="full"
          />
        </section>

        {/* Class Types Section */}
        <section className="px-4 md:px-10 py-16">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="Our Cooking Classes"
              subtitle="Choose from our signature classes, each designed to immerse you in authentic Korean cooking traditions."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {COOKING_CLASSES.map((cookingClass) => (
                <div
                  key={cookingClass.id}
                  className="bg-surface dark:bg-surface-dark rounded-xl overflow-hidden border border-border dark:border-border-dark shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url("${cookingClass.image}")` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant={cookingClass.availabilityType === "available" ? "primary" as const : "outline" as const}
                      >
                        {cookingClass.availability}
                      </Badge>
                      <span className="text-text-secondary dark:text-text-dark-muted text-sm">
                        {cookingClass.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                      {cookingClass.name}
                    </h3>
                    <p className="text-text-secondary dark:text-text-dark-muted text-sm mb-4">
                      {cookingClass.description}
                    </p>

                    <div className="border-t border-border dark:border-border-dark pt-4 mb-4">
                      <p className="text-sm font-semibold text-text-primary dark:text-white mb-2">
                        What you&apos;ll learn:
                      </p>
                      <ul className="space-y-1">
                        {cookingClass.whatYoullLearn.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-text-secondary dark:text-text-dark-muted">
                            <Icon name="check_circle" size="sm" className="text-success mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-2xl font-bold text-primary">
                        ${cookingClass.price}
                      </span>
                      <Link href="/booking">
                        <Button variant="primary" size="md">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="px-4 md:px-10 py-16 bg-surface dark:bg-surface-dark">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title="What's Included"
              subtitle="Every class comes with everything you need for a complete culinary experience."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {WHATS_INCLUDED.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border dark:border-border-dark"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size="lg" className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-text-primary dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Classes Table */}
        <section id="schedule" className="px-4 md:px-10 py-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <SectionHeader
                title="Upcoming Classes"
                className="mb-0"
              />
              <Link href="/booking" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                Full Calendar
                <Icon name="arrow_forward" size="sm" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light dark:bg-background-dark text-xs uppercase tracking-wider font-bold text-text-secondary dark:text-text-dark-muted">
                    <th className="p-4">Date & Time</th>
                    <th className="p-4">Class Type</th>
                    <th className="p-4">Availability</th>
                    <th className="p-4 text-right">Price</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border dark:divide-border-dark">
                  {UPCOMING_CLASSES.map((classItem, index) => (
                    <tr key={index} className="hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-text-primary dark:text-white">
                        {classItem.date}
                      </td>
                      <td className="p-4 text-text-primary dark:text-white">
                        {classItem.classType}
                      </td>
                      <td className="p-4">
                        <Badge
                          variant={classItem.availabilityType === "available" ? "primary" as const : "outline" as const}
                        >
                          {classItem.availability}
                        </Badge>
                      </td>
                      <td className="p-4 text-right font-bold text-text-primary dark:text-white">
                        ${classItem.price}
                      </td>
                      <td className="p-4 text-right">
                        <Link href="/booking">
                          <Button variant="primary" size="sm">
                            Book
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-10 py-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="p-10 rounded-3xl bg-primary/10 dark:bg-primary/20 flex flex-col items-center text-center gap-6">
              <h2 className="text-2xl md:text-3xl font-black text-text-primary dark:text-white">
                Ready to cook like a local?
              </h2>
              <p className="max-w-lg text-text-secondary dark:text-text-dark-muted">
                Our classes are beginner-friendly and perfect for solo travelers, couples, or families. Reserve your spot today!
              </p>
              <Link href="/booking">
                <Button variant="primary" size="xl" icon="arrow_forward">
                  Reserve Your Apron Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
