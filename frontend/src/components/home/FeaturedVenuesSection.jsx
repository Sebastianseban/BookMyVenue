"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Heart, Users, MapPin, Sparkles } from "lucide-react";

const initialVenues = [
  {
    id: 1,
    name: "The Glass Pavilion",
    location: "Kochi",
    price: "₹5,000",
    unit: "hour",
    rating: 4.9,
    reviews: 124,
    category: "Cafes & Lounges",
    tag: "Trending",
    capacity: 80,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200",
  },
  {
    id: 2,
    name: "Skyline Grand Ballroom",
    location: "Trivandrum",
    price: "₹45,000",
    unit: "event",
    rating: 4.8,
    reviews: 86,
    category: "Auditoriums",
    tag: "Popular",
    capacity: 800,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
  },
  {
    id: 3,
    name: "Lakefront Palace Resort",
    location: "Alleppey",
    price: "₹12,000",
    unit: "day",
    rating: 5.0,
    reviews: 210,
    category: "Resorts & Villas",
    tag: "Luxe Selection",
    capacity: 250,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
  },
  {
    id: 4,
    name: "The Heritage Mansion Gardens",
    location: "Kozhikode",
    price: "₹35,000",
    unit: "day",
    rating: 4.9,
    reviews: 42,
    category: "Gardens & Lawns",
    tag: "New",
    capacity: 500,
    image: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?q=80&w=1200",
  },
  {
    id: 5,
    name: "Aura Creative Photo Studio",
    location: "Kochi",
    price: "₹3,500",
    unit: "hour",
    rating: 4.7,
    reviews: 38,
    category: "Studios",
    tag: "Best Value",
    capacity: 35,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
  },
  {
    id: 6,
    name: "Royal Palms Beach Banquet",
    location: "Kovalam",
    price: "₹75,000",
    unit: "event",
    rating: 4.9,
    reviews: 73,
    category: "Party Halls",
    tag: "Highly Rated",
    capacity: 600,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200",
  },
];

export default function FeaturedVenuesSection() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Handpicked Properties
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Venues
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-xl">
              Explore our highly requested spaces, verified for high-quality service, stellar aesthetics, and seamless hosting.
            </p>
          </div>

          <button className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 hover:gap-3 transition-all duration-200 cursor-pointer">
            <span>View All Venues</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {initialVenues.map((venue) => {
            const isLiked = favorites.includes(venue.id);

            return (
              <div
                key={venue.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Image Box */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Glassmorphic Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Premium Badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm border border-slate-100/50">
                    <Sparkles size={10} className="text-gold-600" />
                    <span>{venue.tag}</span>
                  </div>

                  {/* Stateful Heart Toggle Button */}
                  <button
                    onClick={() => toggleFavorite(venue.id)}
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-slate-400
                      backdrop-blur-md
                      shadow-sm
                      border
                      border-slate-100/50
                      hover:text-brand-600
                      active:scale-90
                      transition-all
                      duration-200
                      cursor-pointer
                    "
                    aria-label="Add to favorites"
                  >
                    <Heart
                      size={18}
                      className={`transition-colors duration-200 ${
                        isLiked ? "fill-brand-600 text-brand-600" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Listing Details */}
                <div className="p-6">
                  {/* Category / Location row */}
                  <div className="mb-2 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                    <span>{venue.category}</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin size={11} className="text-slate-300" />
                      {venue.location}
                    </span>
                  </div>

                  {/* Venue Name */}
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors duration-200">
                    {venue.name}
                  </h3>

                  {/* Specifications (Capacity & Rating) */}
                  <div className="mt-4 flex items-center justify-between border-b border-slate-50 pb-4">
                    {/* Capacity */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Users size={15} className="text-slate-400" />
                      <span>Up to {venue.capacity} Guests</span>
                    </div>

                    {/* Rating details */}
                    <div className="flex items-center gap-1 text-xs">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-slate-800">{venue.rating.toFixed(1)}</span>
                      <span className="text-slate-400">({venue.reviews})</span>
                    </div>
                  </div>

                  {/* Footer Row (Price & CTA) */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Starting from</span>
                      <span className="font-serif text-xl font-bold text-slate-900">
                        {venue.price}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold"> / {venue.unit}</span>
                    </div>

                    <button
                      className="
                        rounded-xl
                        bg-slate-900
                        hover:bg-brand-600
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        text-white
                        shadow-sm
                        transition-all
                        duration-200
                        cursor-pointer
                        active:scale-95
                      "
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}