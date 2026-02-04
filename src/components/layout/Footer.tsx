"use client";

import Link from "next/link";
import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants";
import { Icon, Input, Button } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-[#181211] text-white py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="restaurant" className="text-primary" size="lg" />
              <span className="text-xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unveiling the soul of Seoul through its food. Join us for an
              unforgettable culinary journey through Korea&apos;s vibrant food scene.
            </p>
          </div>

          {/* Tours Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">
              Tours
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {FOOTER_LINKS.tours.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the best food tips delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#2d1a18] border-none text-white placeholder:text-gray-500 h-10"
              />
              <Button variant="primary" size="md" className="px-3">
                <Icon name="send" size="sm" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            {FOOTER_LINKS.support.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
