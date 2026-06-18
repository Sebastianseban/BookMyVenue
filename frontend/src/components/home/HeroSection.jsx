"use client";

import { Sparkles } from "lucide-react";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-[850px]
        items-center
        justify-center
        bg-cover
        bg-center
        px-6
        pt-32
        pb-24
        text-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070')",
      }}
    >
      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/60 to-dark-950/90" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Floating Brand Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md animate-fade-in shadow-inner">
          <Sparkles size={14} className="text-gold-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-100 sm:text-xs">
            Exquisite Spaces, Seamless Booking
          </span>
        </div>

        {/* Serif Luxury Heading */}
        <h1 className="font-serif text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl animate-fade-in-up">
          Discover Venues That <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-brand-100 via-gold-100 to-amber-200 bg-clip-text text-transparent italic font-normal">
            Tell Your Story
          </span>
        </h1>

        {/* Subtitle with high legibility */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-200/90 md:text-lg animate-fade-in-up [animation-delay:200ms]">
          Curated collection of unique spaces for weddings, corporate retreats, and intimate celebrations. Browse verified venues, check live availability, and book instantly.
        </p>

        {/* Search Panel Section */}
        <div className="w-full mt-10 animate-fade-in-up [animation-delay:400ms]">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}