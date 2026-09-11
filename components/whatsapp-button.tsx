"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "8801778298484";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Nahian, I visited your portfolio and would like to discuss a project."
  )}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nahian on WhatsApp (+880 1778-298484)"
        className="flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-3 sm:px-4 sm:py-3 shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-95"
      >
        <div className="relative flex items-center justify-center">
          {/* WhatsApp SVG */}
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.968.541 1.902.827 2.791.827h.002c3.18 0 5.767-2.587 5.768-5.767.001-3.181-2.586-5.768-5.77-5.768zm0 10.377h-.002c-.846 0-1.677-.228-2.404-.66l-.172-.102-1.787.469.477-1.743-.112-.178c-.474-.755-.724-1.632-.723-2.531.001-2.628 2.139-4.766 4.77-4.766 2.63 0 4.769 2.138 4.77 4.766 0 2.63-2.14 4.767-4.809 4.745z" />
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.96.57 3.81 1.63 5.4L2 22l4.83-1.71c1.53.96 3.32 1.48 5.21 1.48 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.86-9.91-9.86zm0 17.96h-.002c-1.69 0-3.34-.45-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.35c-.95-1.52-1.46-3.29-1.46-5.1 0-4.67 3.8-8.46 8.47-8.46 4.67 0 8.47 3.8 8.47 8.47 0 4.67-3.8 8.46-8.47 8.46z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
        </div>
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          WhatsApp
        </span>
        <span className="hidden md:inline-block text-[11px] opacity-90 font-mono pl-1 border-l border-white/20">
          +880 1778-298484
        </span>
      </a>
    </aside>
  );
}
