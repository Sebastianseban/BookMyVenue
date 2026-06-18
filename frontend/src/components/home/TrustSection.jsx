"use client";

import { ShieldCheck, CreditCard, Headphones, Sparkles } from "lucide-react";

export default function TrustSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Verified Venues",
      description:
        "Every host profile, safety standard, and venue image is manually reviewed and verified by our auditing team.",
    },
    {
      icon: CreditCard,
      title: "Secure Deposits",
      description:
        "Payments are held securely in escrow and released only after your successful event check-in.",
    },
    {
      icon: Headphones,
      title: "Concierge Support",
      description:
        "Our dedicated booking concierge is available 24/7 to resolve venue changes, safety issues, or booking adjustments.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Bookings Handled" },
    { value: "120+", label: "Cities Covered" },
    { value: "4.9/5", label: "Average Space Rating" },
    { value: "100%", label: "Verified Hosts" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Unrivaled Experience
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Book with BookMyVenue?
          </h2>
          <p className="mt-3 mx-auto text-sm text-slate-500 max-w-lg">
            We bridge the gap between event visionaries and beautiful venues by offering high safety standards and elite support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-100
                  bg-slate-50/30
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:shadow-lg
                  hover:shadow-slate-100
                "
              >
                {/* Icon Container */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-50 to-gold-50 text-brand-600 group-hover:scale-105 transition-transform duration-200">
                  <Icon size={22} className="text-brand-600" />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-serif text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-dark-900 to-dark-950 p-8 md:p-12 text-white shadow-xl shadow-slate-900/10">
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800/60">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`pt-6 lg:pt-0 lg:px-6 ${index === 0 ? "pt-0" : ""}`}>
                <span className="block font-serif text-3xl md:text-4xl font-extrabold text-gold-500">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}