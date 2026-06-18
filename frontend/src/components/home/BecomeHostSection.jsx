"use client";

import { useState } from "react";
import { CheckCircle2, Calculator, ArrowRight } from "lucide-react";

export default function BecomeHostSection() {
  const [venueType, setVenueType] = useState("resort");

  const estimates = {
    cafe: { rate: "₹3,500/day", monthly: "₹35,000" },
    auditorium: { rate: "₹35,000/event", monthly: "₹1,40,000" },
    resort: { rate: "₹18,000/day", monthly: "₹1,80,000" },
    studio: { rate: "₹4,000/session", monthly: "₹45,000" },
    garden: { rate: "₹15,000/event", monthly: "₹90,000" },
    hall: { rate: "₹12,000/event", monthly: "₹75,000" },
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        py-24
        text-white
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070')",
      }}
    >
      {/* Dark overlay backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/95 to-dark-900/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Column: Benefits Content */}
          <div className="text-left space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500">
                Partnership Program
              </span>
              <h2 className="mt-2 font-serif text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Turn Your Event Space Into a <br />
                <span className="bg-gradient-to-r from-brand-100 via-gold-100 to-amber-200 bg-clip-text text-transparent italic font-normal">
                  Thriving Business
                </span>
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-lg">
                Join our premium network of hosts. List your luxury villa, local cafe, art studio, or backyard garden, and generate consistent booking revenue.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="space-y-3.5">
              {[
                "Complimentary professional interior photography session",
                "₹10,000,000 Host Protection Insurance Coverage",
                "Advanced guest vetting and customized security deposits",
                "Flexible booking rules: choose your calendar and prices",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-slate-200 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                className="
                  rounded-full
                  bg-white
                  px-8
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-md
                  hover:bg-slate-100
                  hover:scale-[1.02]
                  active:scale-98
                  transition-all
                  duration-200
                  cursor-pointer
                  flex
                  items-center
                  gap-2
                "
              >
                <span>List Your Space</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Host Estimator Widget */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass-panel-dark w-full max-w-md rounded-3xl p-8 text-left shadow-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/20 text-gold-500 border border-gold-500/30">
                  <Calculator size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Host Estimator
                  </h3>
                  <p className="text-xs text-slate-400">
                    Find out your property's potential
                  </p>
                </div>
              </div>

              {/* Calculator input */}
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-2">
                    Select Space Category
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "resort", label: "Resort" },
                      { id: "hall", label: "Hall" },
                      { id: "garden", label: "Garden" },
                      { id: "cafe", label: "Cafe" },
                      { id: "auditorium", label: "Auditorium" },
                      { id: "studio", label: "Studio" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setVenueType(type.id)}
                        className={`rounded-xl py-2 px-1 text-center text-xs font-bold tracking-wide transition-all border duration-200 cursor-pointer ${
                          venueType === type.id
                            ? "bg-gold-500 text-slate-950 border-gold-400 shadow-sm"
                            : "bg-white/5 text-slate-300 border-white/5 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="border-white/10 my-4" />

                {/* Estimate Outputs */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-300 font-medium">Estimated average rate</span>
                    <span className="text-sm font-semibold text-slate-200">{estimates[venueType].rate}</span>
                  </div>

                  <div className="flex justify-between items-baseline bg-white/5 rounded-2xl p-4 border border-white/5">
                    <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">Estimated Monthly Earnings</span>
                    <span className="text-2xl font-serif font-extrabold text-gold-500">
                      {estimates[venueType].monthly}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-300 text-center italic leading-relaxed pt-2">
                  *Based on typical 55% booking occupancy rate. Actual earnings depend on location, size, and amenities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}