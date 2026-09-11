"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowDown,
  Mail,
} from "lucide-react";

// Easily replaceable booking URL (e.g. Calendly, Cal.com)
const BOOK_CALL_URL = "https://calendly.com";

const SERVICE_OPTIONS = [
  "Website",
  "Web App",
  "SaaS",
  "AI Automation",
  "AI Video / Ads",
  "Email Marketing",
  "Custom Software",
  "Not Sure Yet",
];

const BUDGET_OPTIONS = [
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000+",
  "Flexible / Undecided",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web App",
    budget: "$500 – $2,000",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSelectService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
  };

  const handleSelectBudget = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please provide a brief description of your project (at least 10 characters).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email directly."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "Web App",
      budget: "$3,000 – $7,000",
      description: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-transparent scroll-mt-20">
      <Container>
        {/* ================= PART 1: CLOSING CONVERSION CTA ================= */}
        <div className="rounded-3xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-6 sm:p-10 lg:p-16 shadow-2xl mb-12 sm:mb-16 lg:mb-20 text-center relative overflow-hidden">
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-300 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>Direct Collaboration & Strategy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Have a business idea or problem worth solving?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-stone-300 max-w-2xl mx-auto">
              Tell me what you&apos;re trying to build, improve, automate or grow.
              I&apos;ll help you find the simplest way forward.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all w-full sm:w-auto"
              >
                <span>Let&apos;s Build Something</span>
                <ArrowDown className="h-4 w-4 opacity-75" />
              </a>

              <a
                href="https://wa.me/8801778298484?text=Hi%20Nahian,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 px-5 py-3 text-sm font-semibold text-emerald-300 transition-all w-full sm:w-auto shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp: +880 1778-298484</span>
              </a>

              <Button
                href={BOOK_CALL_URL}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 w-full sm:w-auto justify-center"
              >
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>Book a Call</span>
              </Button>
            </div>
          </div>
        </div>

        {/* ================= PART 2: PROJECT INQUIRY FORM ================= */}
        <div id="inquiry-form" className="max-w-3xl mx-auto scroll-mt-24">
          <div className="rounded-3xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-5 sm:p-8 lg:p-12 shadow-2xl">
            <div className="mb-8 pb-6 border-b border-white/8">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Project Inquiry
              </h3>
              <p className="mt-1 text-sm text-stone-400">
                Share a few project details and receive a direct response from Nahian within 24 hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-6 sm:p-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Nahian will review your project scope and follow up directly at{" "}
                  <strong className="text-white">{formData.email}</strong>.
                </p>
                <div className="pt-3">
                  <Button onClick={handleReset} variant="outline" size="sm" className="rounded-full">
                    Submit Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                {/* Error Banner */}
                {status === "error" && (
                  <div
                    className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-950/40 p-4 text-xs sm:text-sm text-rose-200 animate-in fade-in"
                    role="alert"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
                    <span>{errorMessage || "Please check your inputs and try again."}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-300"
                    >
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Michael Chen"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-base sm:text-sm text-white placeholder:text-stone-500 transition-colors focus:border-blue-500 focus:bg-white/10 focus:outline-none disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-300"
                    >
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="e.g. michael@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-base sm:text-sm text-white placeholder:text-stone-500 transition-colors focus:border-blue-500 focus:bg-white/10 focus:outline-none disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-300"
                  >
                    Company or Organization (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="e.g. OmniFlow Inc."
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-base sm:text-sm text-white placeholder:text-stone-500 transition-colors focus:border-blue-500 focus:bg-white/10 focus:outline-none disabled:opacity-60"
                  />
                </div>

                {/* What do you need help with? */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300">
                    What do you need help with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((service) => {
                      const isSelected = formData.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleSelectService(service)}
                          disabled={status === "loading"}
                          className={`rounded-xl px-3.5 py-2 text-xs font-medium transition-all cursor-pointer border min-h-[38px] flex items-center justify-center ${
                            isSelected
                              ? "border-blue-500/60 bg-blue-600/20 text-blue-300 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                              : "border-white/10 bg-white/5 text-stone-300 hover:bg-white/10 active:scale-95"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300">
                    Estimated Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_OPTIONS.map((budget) => {
                      const isSelected = formData.budget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => handleSelectBudget(budget)}
                          disabled={status === "loading"}
                          className={`rounded-xl px-3.5 py-2 text-xs font-medium transition-all cursor-pointer border min-h-[38px] flex items-center justify-center ${
                            isSelected
                              ? "border-blue-500/60 bg-blue-600/20 text-blue-300 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                              : "border-white/10 bg-white/5 text-stone-300 hover:bg-white/10 active:scale-95"
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-300"
                  >
                    Project Description <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    placeholder="Tell me about your business goals, target timeline, or operational bottleneck..."
                    value={formData.description}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-3.5 text-base sm:text-sm text-white placeholder:text-stone-500 transition-colors focus:border-blue-500 focus:bg-white/10 focus:outline-none disabled:opacity-60 resize-y"
                  />
                </div>

                {/* Submit Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-stone-400 order-2 sm:order-1">
                    <Mail className="h-3.5 w-3.5 text-blue-400" />
                    <span>Direct founder response guaranteed</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="gap-2 shadow-xs order-1 sm:order-2 w-full sm:w-auto justify-center"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
