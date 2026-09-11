import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { WhatsAppButton } from "@/components/whatsapp-button";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nahiandigital.com"),
  title: "Nahian Bin Rahman | AI, Software & Digital Growth",
  description:
    "Nahian Bin Rahman helps businesses build digital products, automate operations and grow using software, AI, creative technology and digital growth systems through Nahian Digital.",
  keywords: [
    "Nahian Bin Rahman",
    "Nahian Digital",
    "Software Engineer",
    "Digital Builder",
    "AI Automation",
    "SaaS Development",
    "Conversion Systems",
    "Digital Growth",
    "Remote Engineering Studio",
  ],
  authors: [{ name: "Nahian Bin Rahman", url: "https://nahiandigital.com" }],
  creator: "Nahian Bin Rahman",
  publisher: "Nahian Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nahian Bin Rahman | AI, Software & Digital Growth",
    description:
      "Nahian Bin Rahman helps businesses build digital products, automate operations and grow using software, AI, creative technology and digital growth systems through Nahian Digital.",
    url: "https://nahiandigital.com",
    siteName: "Nahian Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahian Bin Rahman | AI, Software & Digital Growth",
    description:
      "Nahian Bin Rahman helps businesses build digital products, automate operations and grow using software, AI, creative technology and digital growth systems through Nahian Digital.",
    creator: "@nahiandigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans scroll-smooth overflow-x-hidden`}>
      <body className="min-h-screen flex flex-col bg-[#08090d] text-stone-100 antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden pt-16 sm:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
