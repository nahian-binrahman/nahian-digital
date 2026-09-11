import React from "react";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, Mail } from "lucide-react";

const FOOTER_NAV = [
  { name: "Home", href: "#home" },
  { name: "Solutions", href: "#solutions" },
  { name: "Work", href: "#work" },
  { name: "Nahian Digital", href: "#nahian-digital" },
  { name: "About", href: "#about" },
  { name: "Journal", href: "#journal" },
  { name: "Contact", href: "#contact" },
];

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.96.57 3.81 1.63 5.4L2 22l4.83-1.71c1.53.96 3.32 1.48 5.21 1.48 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.86-9.91-9.86zm0 17.96h-.002c-1.69 0-3.34-.45-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.35c-.95-1.52-1.46-3.29-1.46-5.1 0-4.67 3.8-8.46 8.47-8.46 4.67 0 8.47 3.8 8.47 8.47 0 4.67-3.8 8.46-8.47 8.46z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "WhatsApp (+880 1778-298484)",
    href: "https://wa.me/8801778298484",
    icon: WhatsAppIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedInIcon,
  },
  {
    name: "Twitter / X",
    href: "https://x.com",
    icon: TwitterIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: GitHubIcon,
  },
  {
    name: "Email",
    href: "mailto:contact@nahiandigital.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#06080c] py-12 sm:py-16 lg:py-20 text-stone-300">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Credential Column */}
          <div className="col-span-2 md:col-span-6 lg:col-span-6 flex flex-col space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Nahian Bin Rahman
              </h3>
              <p className="mt-1 text-sm sm:text-base font-medium text-stone-400">
                Software Engineer · Digital Builder · Founder of Nahian Digital
              </p>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-md">
              Helping modern businesses scale with high-impact software, AI automation,
              robust architectures, and digital growth experiences.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-stone-400">
                Available for select consulting & engineering partnerships
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              Connect & Inquiries
            </h4>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-stone-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <Icon className="h-4 w-4 text-stone-500 group-hover:text-blue-400 transition-colors" />
                      <span>{item.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Nahian Digital. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span className="hover:text-stone-300 cursor-pointer">Privacy & Terms</span>
            <span>·</span>
            <span>Engineered with precision & clean code</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
