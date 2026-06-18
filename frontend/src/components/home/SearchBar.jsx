"use client";

import { useState } from "react";
import { Search, MapPin, Building2, Calendar, Users } from "lucide-react";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("daily");

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Category Selection Tabs */}
      <div className="flex gap-2 mb-3 px-4 justify-center md:justify-start">
        {[
          { id: "daily", label: "Full Day" },
          { id: "hourly", label: "Hourly Space" },
          { id: "corporate", label: "Corporate Event" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? "bg-white text-brand-700 shadow-sm border border-slate-100"
                : "bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Search Bar Panel */}
      <div className="glass-panel w-full rounded-2xl md:rounded-full bg-white p-3 shadow-2xl border border-slate-200/50 flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
        
        {/* Location Section */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl md:rounded-full transition-colors duration-200 group">
          <MapPin className="text-slate-400 group-hover:text-brand-600 transition-colors duration-200" size={20} />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Location
            </label>
            <input
              type="text"
              placeholder="Where is your event?"
              className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none border-none p-0 mt-0.5"
            />
          </div>
        </div>

        <div className="hidden md:block w-px bg-slate-200/80 my-2" />

        {/* Venue Type Section */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl md:rounded-full transition-colors duration-200 group">
          <Building2 className="text-slate-400 group-hover:text-brand-600 transition-colors duration-200" size={20} />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Venue Type
            </label>
            <select className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none border-none p-0 mt-0.5 appearance-none cursor-pointer">
              <option value="">Select space type</option>
              <option value="cafe">Cafe</option>
              <option value="auditorium">Auditorium</option>
              <option value="resort">Resort</option>
              <option value="studio">Studio</option>
              <option value="garden">Garden</option>
              <option value="hall">Party Hall</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block w-px bg-slate-200/80 my-2" />

        {/* Date Section */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl md:rounded-full transition-colors duration-200 group">
          <Calendar className="text-slate-400 group-hover:text-brand-600 transition-colors duration-200" size={20} />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Date
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none border-none p-0 mt-0.5 cursor-pointer"
            />
          </div>
        </div>

        <div className="hidden md:block w-px bg-slate-200/80 my-2" />

        {/* Guests Section */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl md:rounded-full transition-colors duration-200 group">
          <Users className="text-slate-400 group-hover:text-brand-600 transition-colors duration-200" size={20} />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Guests
            </label>
            <input
              type="number"
              placeholder="How many guests?"
              className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none border-none p-0 mt-0.5"
            />
          </div>
        </div>

        {/* CTA Search Button */}
        <div className="flex items-center justify-center p-1 md:pl-2">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 rounded-xl md:rounded-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 px-6 py-4 text-sm font-bold text-white shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 hover:scale-[1.02] active:scale-98 transition-all duration-200 cursor-pointer">
            <Search size={18} />
            <span>Search Spaces</span>
          </button>
        </div>

      </div>
    </div>
  );
}