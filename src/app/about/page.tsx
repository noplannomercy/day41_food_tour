import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/shared/Hero";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "50k+", label: "Happy Guests" },
  { value: "150+", label: "Local Partners" },
];

const FAQ_ITEMS = [
  {
    icon: "restaurant_menu",
    title: "Dietary Restrictions?",
    description:
      "We cater to vegetarians, vegans, and those with allergies. Please mention your needs when booking so we can tailor the menu for you.",
  },
  {
    icon: "groups",
    title: "Meeting Points?",
    description:
      "Most tours meet at major subway exits in Insadong or Myeongdong. Specific instructions and maps are sent 24 hours before the tour.",
  },
  {
    icon: "schedule",
    title: "What if I'm late?",
    description:
      "Our tours start promptly. We recommend arriving 10 minutes early. If you're running late, please call our hotline immediately.",
  },
  {
    icon: "beach_access",
    title: "Rain or Shine?",
    description:
      "Yes! Our tours operate in all weather conditions. In case of rain, we focus more on indoor market areas and cozy restaurants.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-1 flex-col items-center">
        {/* Hero Section */}
        <div className="w-full px-4 md:px-40 py-5">
          <div className="flex flex-col max-w-[960px] mx-auto flex-1">
            <Hero
              title="The Heart of Seoul's Kitchen"
              subtitle="We don't just show you where to eat; we share the stories, traditions, and passion behind every bite of Korean cuisine."
              backgroundImage="https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1920"
              primaryCta={{ label: "Explore Our Story", href: "#story" }}
              variant="compact"
              overlay="dark"
              align="center"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <section
          id="story"
          className="w-full px-4 md:px-40 py-8 bg-white dark:bg-surface-dark-alt"
        >
          <div className="flex flex-col max-w-[960px] mx-auto flex-1">
            <div className="flex flex-col md:flex-row gap-12 items-center px-4">
              <div className="flex-1">
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">
                  Our Mission
                </p>
                <h2 className="text-text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight pb-5">
                  Founded by Foodies, for Travelers
                </h2>
                <p className="text-text-primary dark:text-white/80 text-base font-normal leading-relaxed pb-4">
                  Founded by passionate local foodies, Delicious Korea started
                  with a simple mission: to help foreign travelers discover the
                  hidden gems of Seoul&apos;s culinary scene. Our founders believe
                  that the best way to understand a culture is through its
                  kitchen.
                </p>
                <p className="text-text-primary dark:text-white/80 text-base font-normal leading-relaxed pb-4">
                  What began as a small weekend hobby of showing friends around
                  Gwangjang Market has grown into a premier food tour agency. We
                  pride ourselves on building relationships with local vendors
                  who have been perfecting their craft for generations.
                </p>
                <div className="flex gap-4 pt-4">
                  {STATS.map((stat, index) => (
                    <div key={stat.label} className="flex items-center">
                      <div className="text-center px-4">
                        <span className="block text-2xl font-bold text-primary">
                          {stat.value}
                        </span>
                        <span className="text-xs text-text-muted uppercase">
                          {stat.label}
                        </span>
                      </div>
                      {index < STATS.length - 1 && (
                        <div className="border-l border-border dark:border-border-dark h-10 self-center" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Group of people enjoying traditional Korean street food at a market stall"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full px-4 md:px-40 py-12">
          <div className="flex flex-col max-w-[960px] mx-auto flex-1">
            <h2 className="text-text-primary dark:text-white text-[28px] font-bold leading-tight tracking-tight px-4 pb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
              {/* Contact Form */}
              <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-border dark:border-border-dark">
                <form className="flex flex-col gap-4">
                  <Input label="Name" placeholder="Your Name" required />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="hello@example.com"
                    required
                  />
                  <Textarea
                    label="Message"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                  <Button variant="primary" size="lg" fullWidth className="mt-2">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map and Contact Info */}
              <div className="flex flex-col gap-6">
                <div className="rounded-xl overflow-hidden h-[300px] border border-border dark:border-border-dark relative">
                  <Image
                    src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Map showing downtown Seoul area"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white dark:bg-surface-dark p-2 rounded shadow-lg border border-primary">
                      <span className="text-xs font-bold text-primary">
                        Delicious Korea HQ
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="location_on" className="text-primary" />
                    <div>
                      <h4 className="font-bold text-text-primary dark:text-white">
                        Our Headquarters
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                        123 Jong-ro, Jongno-gu, Seoul, South Korea
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="mail" className="text-primary" />
                    <div>
                      <h4 className="font-bold text-text-primary dark:text-white">
                        Email Us
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                        contact@deliciouskorea.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="call" className="text-primary" />
                    <div>
                      <h4 className="font-bold text-text-primary dark:text-white">
                        Call Us
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                        +82 2-1234-5678
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 md:px-40 py-12 bg-white dark:bg-surface-dark-alt">
          <div className="flex flex-col max-w-[960px] mx-auto flex-1">
            <h2 className="text-text-primary dark:text-white text-[28px] font-bold leading-tight tracking-tight px-4 pb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
              {FAQ_ITEMS.map((faq) => (
                <div
                  key={faq.title}
                  className="p-6 rounded-xl border border-border dark:border-border-dark bg-background-light/50 dark:bg-background-dark/50"
                >
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-text-primary dark:text-white">
                    <Icon name={faq.icon} className="text-primary" />
                    {faq.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                    {faq.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
