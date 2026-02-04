export const SITE_NAME = "Delicious Korea";
export const SITE_DESCRIPTION = "Experience the authentic flavors of Seoul with our expert-led food tours";

export const NAV_LINKS = [
  { label: "Tours", href: "/tours" },
  { label: "Cooking Classes", href: "/cooking-classes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about#contact" },
] as const;

export const FOOTER_LINKS = {
  tours: [
    { label: "Market Tours", href: "/tours?category=market" },
    { label: "BBQ Experiences", href: "/tours?category=bbq" },
    { label: "Cooking Classes", href: "/cooking-classes" },
    { label: "Private Groups", href: "/corporate" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Guides", href: "/guides" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/about#contact" },
    { label: "Privacy Policy", href: "/legal" },
    { label: "Terms of Service", href: "/legal#terms" },
  ],
} as const;

export const TOUR_CATEGORIES = [
  { value: "all", label: "All Tours" },
  { value: "market", label: "Market Tours", icon: "storefront" },
  { value: "street-food", label: "Street Food", icon: "restaurant" },
  { value: "bbq", label: "BBQ", icon: "dinner_dining" },
  { value: "nightlife", label: "Night Life", icon: "nightlife" },
  { value: "cooking", label: "Cooking Class", icon: "soup_kitchen" },
] as const;
