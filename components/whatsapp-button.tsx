"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "8801778298484";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Nahian, I visited your portfolio and would like to discuss a project."
  )}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+880 1778-298484)"
        className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-all hover:scale-105 active:scale-95"
      >
        <div className="relative flex items-center justify-center">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.96.57 3.81 1.63 5.4L2 22l4.83-1.71c1.53.96 3.32 1.48 5.21 1.48 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.86-9.91-9.86zm0 17.96h-.002c-1.69 0-3.34-.45-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.35c-.95-1.52-1.46-3.29-1.46-5.1 0-4.67 3.8-8.46 8.47-8.46 4.67 0 8.47 3.8 8.47 8.47 0 4.67-3.8 8.46-8.47 8.46z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        </div>
      </a>
    </aside>
  );
}
