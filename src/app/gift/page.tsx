"use client";

import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Button, Icon, Input, Textarea } from "@/components/ui";
import { Hero, SectionHeader } from "@/components/shared";

const GIFT_AMOUNTS = [
  { value: 50, label: "$50" },
  { value: 100, label: "$100" },
  { value: 150, label: "$150" },
  { value: 0, label: "Custom", isCustom: true },
];

const CARD_THEMES = [
  {
    id: "traditional",
    name: "Traditional",
    icon: "palette",
    gradient: "from-red-100 to-primary/20",
    iconColor: "text-primary",
  },
  {
    id: "food",
    name: "Food",
    icon: "ramen_dining",
    gradient: "from-green-100 to-green-600/20",
    iconColor: "text-green-700",
  },
  {
    id: "city",
    name: "Seoul",
    icon: "location_city",
    gradient: "from-blue-100 to-blue-600/20",
    iconColor: "text-blue-700",
  },
];

const FAQ_ITEMS = [
  {
    question: "How is the gift card delivered?",
    answer: "Instantly via email. You can send it directly to the recipient or to yourself to print out.",
  },
  {
    question: "Can it be used for any tour?",
    answer: "Yes! The amount vouchers can be applied to any food tour or cooking class on our website.",
  },
  {
    question: "How long is the gift card valid?",
    answer: "Gift cards are valid for 2 years from the date of purchase.",
  },
  {
    question: "Can I get a refund?",
    answer: "Gift cards are non-refundable but can be transferred to another recipient.",
  },
];

export default function GiftPage() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("traditional");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");
  const [activeTab, setActiveTab] = useState("vouchers");

  const displayAmount = selectedAmount === 0 ? (customAmount ? parseInt(customAmount) : 0) : selectedAmount;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="px-4 md:px-10 py-5">
          <Hero
            title="Gift the Flavors of Seoul"
            subtitle="The perfect gift for food lovers. Choose a digital gift card or a curated food tour voucher."
            backgroundImage="https://images.pexels.com/photos/6479599/pexels-photo-6479599.jpeg?auto=compress&cs=tinysrgb&w=1600"
            variant="compact"
          />
        </section>

        {/* Gift Selection Section */}
        <section className="px-4 md:px-10 py-10">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-3xl font-black text-text-primary dark:text-white mb-6">
              Select Your Gift
            </h2>

            {/* Tabs */}
            <div className="border-b border-border dark:border-border-dark mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("vouchers")}
                  className={`pb-3 pt-4 text-sm font-bold border-b-[3px] transition-all ${
                    activeTab === "vouchers"
                      ? "border-primary text-primary"
                      : "border-transparent text-text-secondary dark:text-text-dark-muted hover:text-primary"
                  }`}
                >
                  Amount Vouchers
                </button>
                <button
                  onClick={() => setActiveTab("experiences")}
                  className={`pb-3 pt-4 text-sm font-bold border-b-[3px] transition-all ${
                    activeTab === "experiences"
                      ? "border-primary text-primary"
                      : "border-transparent text-text-secondary dark:text-text-dark-muted hover:text-primary"
                  }`}
                >
                  Tour Experiences
                </button>
              </div>
            </div>

            {activeTab === "vouchers" ? (
              <>
                {/* Step 1: Choose Amount */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      1
                    </span>
                    Choose Amount
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {GIFT_AMOUNTS.map((amount) => (
                      <button
                        key={amount.value}
                        onClick={() => {
                          setSelectedAmount(amount.value);
                          if (!amount.isCustom) setCustomAmount("");
                        }}
                        className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                          selectedAmount === amount.value
                            ? "border-primary bg-primary/5"
                            : "border-border dark:border-border-dark hover:border-primary"
                        }`}
                      >
                        <span
                          className={`text-2xl font-bold ${
                            selectedAmount === amount.value ? "text-primary" : "text-text-primary dark:text-white"
                          }`}
                        >
                          {amount.label}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            selectedAmount === amount.value ? "text-primary/80" : "text-text-muted"
                          }`}
                        >
                          {amount.isCustom ? "Enter amount" : "USD"}
                        </span>
                      </button>
                    ))}
                  </div>
                  {selectedAmount === 0 && (
                    <div className="mt-4 max-w-[200px]">
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="text-center"
                      />
                    </div>
                  )}
                </div>

                {/* Step 2: Personalize Design */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      2
                    </span>
                    Personalize Design
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Design Selector and Form */}
                    <div className="flex flex-col gap-4">
                      <p className="text-sm font-bold text-text-secondary dark:text-text-dark-muted">
                        Select a card theme:
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {CARD_THEMES.map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => setSelectedTheme(theme.id)}
                            className={`cursor-pointer rounded-lg overflow-hidden h-20 border-2 transition-all ${
                              selectedTheme === theme.id
                                ? "border-primary ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark"
                                : "border-transparent hover:border-border"
                            }`}
                          >
                            <div
                              className={`w-full h-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}
                            >
                              <Icon name={theme.icon} size="lg" className={theme.iconColor} />
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3 mt-4">
                        <Input
                          placeholder="Recipient Name"
                          value={recipientName}
                          onChange={(e) => setRecipientName(e.target.value)}
                        />
                        <Input
                          type="email"
                          placeholder="Recipient Email"
                          value={recipientEmail}
                          onChange={(e) => setRecipientEmail(e.target.value)}
                        />
                        <Textarea
                          placeholder="Add a personal message..."
                          rows={3}
                          value={personalMessage}
                          onChange={(e) => setPersonalMessage(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Preview Card */}
                    <div className="flex flex-col items-center justify-center bg-background-light dark:bg-surface-dark rounded-2xl p-6 border border-dashed border-border dark:border-border-dark">
                      <p className="text-xs font-bold text-text-muted mb-4 uppercase tracking-widest">
                        Digital Preview
                      </p>
                      <div className="w-full aspect-[1.6/1] bg-surface dark:bg-background-dark rounded-xl shadow-xl overflow-hidden relative border border-border-light dark:border-border-dark">
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: "radial-gradient(#ee3b2b 1px, transparent 1px)",
                            backgroundSize: "10px 10px",
                          }}
                        />
                        <div className="p-6 flex flex-col h-full justify-between relative z-10">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-black text-primary text-xl leading-tight">
                                DELICIOUS
                                <br />
                                KOREA
                              </h3>
                              <p className="text-[10px] uppercase font-bold tracking-tighter text-text-muted">
                                Food Tour Gift Card
                              </p>
                            </div>
                            <div className="text-3xl font-black text-text-primary dark:text-white">
                              ${displayAmount || "0"}
                            </div>
                          </div>
                          <div className="mt-4 italic text-sm text-text-secondary dark:text-text-dark-muted">
                            &quot;{personalMessage || "Happy Birthday! Enjoy the amazing food in Seoul!"}&quot;
                          </div>
                          <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex justify-between items-end">
                            <div className="text-[10px] text-text-muted">
                              Valid for 2 years from purchase
                            </div>
                            <div className="text-xs font-mono font-bold text-text-muted">
                              DK-XXXX-XXXX
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checkout Summary */}
                <div className="bg-surface dark:bg-background-dark border border-border dark:border-border-dark rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary dark:text-white mb-1">
                      Order Summary
                    </h3>
                    <p className="text-text-secondary dark:text-text-dark-muted text-sm">
                      Amount: ${displayAmount}.00 | Digital Delivery
                    </p>
                  </div>
                  <div className="flex gap-4 w-full md:w-auto">
                    <Button variant="primary" size="lg" icon="arrow_forward" className="flex-1 md:flex-none">
                      Proceed to Payment
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Tour Experiences Tab */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark">
                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                    Gwangjang Market Tour
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-muted text-sm mb-4">
                    A complete food tour experience through Seoul&apos;s oldest market.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$89</span>
                    <Button variant="primary" size="md">
                      Gift This Tour
                    </Button>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark">
                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                    Korean BBQ Experience
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-muted text-sm mb-4">
                    Premium BBQ dinner with all the traditional sides and drinks.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$120</span>
                    <Button variant="primary" size="md">
                      Gift This Tour
                    </Button>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark">
                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                    Cooking Class Gift
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-muted text-sm mb-4">
                    Hands-on cooking class with professional chef guidance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$75</span>
                    <Button variant="primary" size="md">
                      Gift This Tour
                    </Button>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark">
                  <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                    Ultimate Seoul Food Package
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-muted text-sm mb-4">
                    2-day culinary adventure covering all Seoul highlights.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$250</span>
                    <Button variant="primary" size="md">
                      Gift This Tour
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 md:px-10 py-16 bg-surface dark:bg-surface-dark">
          <div className="max-w-[960px] mx-auto">
            <SectionHeader
              title="Frequently Asked Questions"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-background-light dark:bg-background-dark rounded-lg border border-border dark:border-border-dark"
                >
                  <p className="font-bold text-sm text-text-primary dark:text-white mb-2">
                    {item.question}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-dark-muted">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
