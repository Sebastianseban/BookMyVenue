"use client";

import { useState } from "react";
import { Building2, User, Eye, EyeOff, Sparkles } from "lucide-react";
import Link from "next/link";

export default function RegisterForm() {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState("USER");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic
    };

    return (
        <div className="w-full max-w-md animate-fade-in-up">
            {/* Logo */}
            <div className="mb-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-gold-500 text-white shadow-lg shadow-brand-500/30">
                    <Sparkles size={20} />
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">
                    BookMy<span className="text-brand-600">Venue</span>
                </span>
            </div>

            {/* Heading */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 leading-tight">
                    {step === 1 ? "Create account" : "Complete profile"}
                </h1>
                <p className="mt-2 text-slate-500">
                    {step === 1
                        ? "Choose how you'd like to use BookMyVenue."
                        : "Tell us more about yourself."}
                </p>
            </div>

            {/* Form Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                {/* Step indicator */}
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                        Step {step} of 2
                    </span>
                    <div className="flex gap-1.5">
                        <div
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                step >= 1 ? "bg-brand-600 w-8" : "bg-slate-200 w-4"
                            }`}
                        />
                        <div
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                step === 2 ? "bg-brand-600 w-8" : "bg-slate-200 w-4"
                            }`}
                        />
                    </div>
                </div>

                {step === 1 ? (
                    <div className="space-y-4">
                        <button
                            type="button"
                            onClick={() => setRole("USER")}
                            className={`w-full rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:scale-[1.01] hover:shadow-md ${
                                role === "USER"
                                    ? "border-brand-500 bg-brand-50/30"
                                    : "border-slate-100 bg-white hover:border-slate-200"
                            }`}
                        >
                            <div className="flex gap-4">
                                <div
                                    className={`rounded-xl p-3 transition-colors duration-300 ${
                                        role === "USER"
                                            ? "bg-brand-500 text-white"
                                            : "bg-slate-100 text-slate-600"
                                    }`}
                                >
                                    <User size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Customer
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Browse and book venues for events.
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setRole("OWNER")}
                            className={`w-full rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:scale-[1.01] hover:shadow-md ${
                                role === "OWNER"
                                    ? "border-brand-500 bg-brand-50/30"
                                    : "border-slate-100 bg-white hover:border-slate-200"
                            }`}
                        >
                            <div className="flex gap-4">
                                <div
                                    className={`rounded-xl p-3 transition-colors duration-300 ${
                                        role === "OWNER"
                                            ? "bg-brand-500 text-white"
                                            : "bg-slate-100 text-slate-600"
                                    }`}
                                >
                                    <Building2 size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Venue Owner
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        List venues and manage bookings.
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setStep(2)}
                            className="mt-6 w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition-all duration-200 hover:from-brand-700 hover:to-brand-800 hover:shadow-lg hover:shadow-brand-500/40 active:scale-[0.98]"
                        >
                            Continue
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                Full Name
                            </label>
                            <input
                                placeholder="John Doe"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white focus:ring-3 focus:ring-brand-100"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white focus:ring-3 focus:ring-brand-100"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                Phone Number
                                <span className="ml-1 text-slate-400 font-normal">
                                    (Optional)
                                </span>
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white focus:ring-3 focus:ring-brand-100"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white focus:ring-3 focus:ring-brand-100"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((p) => !p)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white focus:ring-3 focus:ring-brand-100"
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((p) => !p)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="pt-2 space-y-3">
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition-all duration-200 hover:from-brand-700 hover:to-brand-800 hover:shadow-lg hover:shadow-brand-500/40 active:scale-[0.98]"
                            >
                                Create Account
                            </button>

                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-full text-center text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors py-2"
                            >
                                Go Back
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                    Already have an account?
                    <Link
                        href="/login"
                        className="ml-1 font-semibold text-brand-600 hover:text-brand-700 hover:underline transition-colors"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}