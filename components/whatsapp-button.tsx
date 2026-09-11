"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "8801778298484";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Nahian, I visited your portfolio and would like to discuss a project."
  )}`;

  return (
    <aside
      aria-label="Quick WhatsApp Business Contact"
      className="fixed bottom-4 sm:bottom-6 right-2 sm:right-3 md:right-4 z-40 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp Business (+880 1778-298484)"
        className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-emerald-400/35 bg-gradient-to-br from-[#122b20]/95 via-[#0b1b14]/95 to-[#06110c]/95 text-[#25D366] backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.65),0_0_18px_rgba(37,211,102,0.25)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_26px_rgba(37,211,102,0.45)] hover:border-emerald-400/70 hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        {/* Ambient emerald backlight */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-sm pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />

        <div className="relative flex items-center justify-center">
          {/* Official WhatsApp Business Logo (Bubble + B) */}
          <svg
            className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.96.57 3.81 1.63 5.4L2 22l4.83-1.71c1.53.96 3.32 1.48 5.21 1.48 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.86-9.91-9.86zm0 17.96h-.002c-1.69 0-3.34-.45-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.35c-.95-1.52-1.46-3.29-1.46-5.1 0-4.67 3.8-8.46 8.47-8.46 4.67 0 8.47 3.8 8.47 8.47 0 4.67-3.8 8.46-8.47 8.46z"
            />
            <path d="M10 7h2.7c1.35 0 2.3.82 2.3 1.95 0 .82-.55 1.45-1.3 1.72.95.28 1.6.98 1.6 2.08 0 1.42-1.18 2.35-2.7 2.35H10V7zm1.65 3.1h1.05c.55 0 .95-.28.95-.78 0-.5-.4-.77-.95-.77h-1.05v1.55zm0 3.5h1.15c.65 0 1.05-.3 1.05-.85 0-.55-.4-.85-1.05-.85h-1.15v1.7z" />
          </svg>

          {/* Micro active status indicator */}
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
        </div>
      </a>
    </aside>
  );
}
