"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 md:grid-cols-2">
          {/* Brand block */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-600 to-gold-500 text-white shadow-sm">
                <Sparkles size={16} />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-slate-900">
                BookMy<span className="text-brand-600">Venue</span>
              </span>
            </div>
            
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Curating premium spaces for life's unforgettable moments. Search, book, and host with absolute peace of mind.
            </p>

            <div className="flex items-center gap-4">
              {[
                {
                  label: "Instagram",
                  href: "#",
                  svg: (
                    <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  svg: (
                    <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "#",
                  svg: (
                    <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  svg: (
                    <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-100 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Discover */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Discover
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "All Venues", href: "#" },
                { name: "Premium Suites", href: "#" },
                { name: "Outdoor Gardens", href: "#" },
                { name: "Corporate Halls", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-brand-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: For Hosts */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              For Hosts
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "List Your Venue", href: "#" },
                { name: "Hosting Resources", href: "#" },
                { name: "Insurance & Safety", href: "#" },
                { name: "FAQ for Hosts", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-brand-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Get Updates
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Subscribe to unlock seasonal offers and hidden event gem locations.
            </p>
            <form className="relative flex max-w-sm items-center" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/50 py-3 pl-4 pr-12 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/10 transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors duration-200 cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-slate-400 text-center">
            &copy; 2026 BookMyVenue. Made with elegance. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-brand-600 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-brand-600 transition-colors duration-200">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}