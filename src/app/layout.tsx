import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Delicious Korea | Authentic Seoul Food Tours",
  description:
    "Experience the authentic flavors of Seoul with our expert-led food tours through vibrant markets and hidden culinary gems.",
  keywords: [
    "Seoul food tour",
    "Korean food experience",
    "Gwangjang Market",
    "Korean BBQ tour",
    "Korean cooking class",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-primary dark:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
