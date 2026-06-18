"use client";

import { useState } from "react";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Spaces for Every Vibe
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-xl">
            From professional environments to romantic sanctuaries, filter through our meticulously curated venue styles.
          </p>
        </div>

        {/* Categories Carousel */}
        <div className="overflow-x-auto pb-4 scrollbar-none">
          <div className="flex gap-6 min-w-max px-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedId === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedId(category.id)}
                  className={`
                    group
                    flex
                    min-w-[120px]
                    flex-col
                    items-center
                    gap-3
                    rounded-2xl
                    p-4
                    border
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      isSelected
                        ? "border-brand-600 bg-brand-50/40 text-brand-700 shadow-sm shadow-brand-500/5"
                        : "border-slate-100 bg-slate-50/50 text-slate-500 hover:border-slate-200 hover:bg-white hover:text-slate-800 hover:shadow-md hover:shadow-slate-100"
                    }
                  `}
                >
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      ${
                        isSelected
                          ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                          : "bg-white text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 border border-slate-100"
                      }
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-bold tracking-wide">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}