"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { Button, Icon } from "@/components/ui";
import { useState } from "react";

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3",
        "sticky top-0 z-50 transition-colors duration-200",
        transparent
          ? "bg-transparent text-white"
          : "bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="size-6" style={{ color: '#ee3b2b' }}>
          <Icon name="restaurant" size="lg" />
        </div>
        <h1
          className="text-lg font-bold leading-tight tracking-tight"
          style={{ color: transparent ? '#ffffff' : '#181211' }}
        >
          {SITE_NAME}
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-9">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium transition-colors hover:text-primary"
            style={{ color: transparent ? 'rgba(255,255,255,0.9)' : '#181211' }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link href="/booking" className="hidden sm:block">
          <Button variant="primary" size="md">
            Book Now
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon
            name={mobileMenuOpen ? "close" : "menu"}
            style={{ color: transparent ? '#ffffff' : '#181211' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-border dark:border-border-dark md:hidden">
          <nav className="flex flex-col p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-text-primary dark:text-white font-medium border-b border-border-light dark:border-border-dark last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/booking" className="mt-4">
              <Button variant="primary" fullWidth>
                Book Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
