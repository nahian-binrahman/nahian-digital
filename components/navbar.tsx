"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Solutions", href: "#solutions" },
  { name: "Work", href: "#work" },
  { name: "Nahian Digital", href: "#nahian-digital" },
  { name: "About", href: "#about" },
  { name: "Journal", href: "#journal" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5 pb-2">
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 rounded-2xl sm:rounded-full border ${
          isScrolled
            ? "bg-[#0b0e14]/80 backdrop-blur-xl border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.6),0_1px_3px_rgba(255,255,255,0.03)]"
            : "bg-[#0f131d]/60 backdrop-blur-md border-white/8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        } px-4 sm:px-6 py-2 sm:py-2.5`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
            aria-label="Nahian Digital - Home"
          >
            <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-b from-stone-800 to-stone-950 text-white font-semibold text-xs sm:text-sm tracking-tight shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-white/10">
              <span>N</span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white flex items-center gap-1.5">
                Nahian Digital
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium hidden sm:inline-block">
                Software · AI · Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 rounded-full bg-white/5 p-1 border border-white/8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-white transition-all rounded-full hover:bg-white/10 hover:shadow-2xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Status + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Real-time Availability Pill */}
            <div className="hidden xl:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-stone-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Available for Q2/Q3</span>
            </div>

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="rounded-full px-4 h-9 gap-1.5"
            >
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
            </Button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="rounded-full px-3 h-8 text-xs gap-1 shadow-xs"
            >
              Let&apos;s Talk
            </Button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/10 bg-white/5 text-stone-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 mt-3 pt-3 pb-2 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col space-y-1 pb-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-stone-300 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-[0.98]"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-stone-600 font-mono">→</span>
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/8 flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-2 py-1 text-xs font-medium text-stone-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Available for advisory & new builds
              </div>
              <Button
                href="#contact"
                onClick={closeMenu}
                variant="primary"
                size="md"
                className="w-full justify-center rounded-full gap-1.5 py-3 shadow-md"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <a
                href="https://wa.me/8801778298484?text=Hi%20Nahian,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-emerald-300 py-2.5 text-xs font-semibold transition-all"
              >
                <span>Chat on WhatsApp (+880 1778-298484)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
