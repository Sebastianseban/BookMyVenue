import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative hidden overflow-hidden lg:flex lg:w-1/2">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070')",
        }}
      />

      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/20 via-dark-950/50 to-dark-950/90" />

      <div className="relative flex items-end p-16 pb-24 w-full h-full animate-fade-in">
        <div className="max-w-xl">
          {/* Floating Luxury Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md shadow-inner">
            <Sparkles size={14} className="text-gold-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Curated Spaces
            </span>
          </div>

          <h1 className="mb-6 font-serif text-5xl font-extrabold leading-tight text-white">
            Find and Book the <br />
            <span className="bg-gradient-to-r from-brand-100 via-gold-100 to-amber-200 bg-clip-text text-transparent italic font-normal">
              Perfect Venue
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-light">
            Discover wedding halls, resorts, conference spaces, and event
            venues across the country. Handpicked and verified for you.
          </p>
        </div>
      </div>
    </section>
  );
}