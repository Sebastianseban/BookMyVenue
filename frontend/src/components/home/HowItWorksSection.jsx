"use client";

import { Search, CalendarCheck, PartyPopper } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discover",
      description: "Browse high-fidelity venue profiles filterable by location, space type, guests capacity, and rate.",
    },
    {
      step: "02",
      icon: CalendarCheck,
      title: "Secure Booking",
      description: "Select available dates, chat with hosts, and complete your reservation instantly via our secure gateway.",
    },
    {
      step: "03",
      icon: PartyPopper,
      title: "Celebrate",
      description: "Check in seamlessly, access dedicated support, and host an event that leaves a lasting impression.",
    },
  ];

  return (
    <section className="bg-slate-100/40 py-20 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Three Simple Steps
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 mx-auto text-sm text-slate-500 max-w-lg">
            Finding and reserving the perfect venue for your occasion has never been more straightforward or premium.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  p-8
                  text-left
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {/* Huge Watermark Step Number */}
                <span className="absolute -right-2 -top-4 font-serif text-8xl font-black text-slate-100/60 select-none group-hover:text-slate-100 transition-colors duration-300">
                  {item.step}
                </span>

                {/* Icon Circle */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm shadow-brand-500/5">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mb-2 font-serif text-xl font-bold text-slate-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}