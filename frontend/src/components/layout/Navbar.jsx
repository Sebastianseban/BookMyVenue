"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to style the navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo lockup */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-gold-500 text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles size={20} className="animate-pulse" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">
            BookMy<span className="text-brand-600">Venue</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Venues", href: "#" },
            { name: "Categories", href: "#" },
            { name: "Become a Host", href: "#" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-brand-600"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-98 transition-all duration-200 cursor-pointer"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-500/10 hover:shadow-lg hover:shadow-brand-500/25 active:scale-98 transition-all duration-200 cursor-pointer text-center"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="absolute top-20 left-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-lg md:hidden animate-fade-in-down">
          <div className="flex flex-col p-6 gap-5 shadow-inner">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-brand-600 transition-colors duration-200"
            >
              Venues
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-brand-600 transition-colors duration-200"
            >
              Categories
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-brand-600 transition-colors duration-200"
            >
              Become a Host
            </a>

            <hr className="border-slate-100 my-2" />

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors duration-200 cursor-pointer block"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 py-3 text-center text-sm font-semibold text-white shadow-sm hover:from-brand-700 hover:to-brand-800 transition-all duration-200 cursor-pointer block"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}