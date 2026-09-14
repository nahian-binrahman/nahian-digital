import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
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
    <html lang="en" className={`${plusJakartaSans.variable} font-sans scroll-smooth overflow-x-hidden dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme') || 'dark';
                if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-white overflow-x-hidden w-full max-w-full relative transition-colors duration-300">
        <ThemeProvider>
          {/* Ambient Aurora Mesh Lights */}
          <div className="ambient-mesh" aria-hidden="true">
            <div className="aurora-blob w-[500px] h-[500px] -top-32 -left-32 bg-indigo-500/20" />
            <div className="aurora-blob w-[600px] h-[600px] top-[15%] -right-40 bg-sky-500/18" />
            <div className="aurora-blob w-[550px] h-[550px] top-[45%] left-[20%] bg-blue-600/15" />
            <div className="aurora-blob w-[500px] h-[500px] top-[75%] -right-20 bg-purple-600/18" />
          </div>

          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll />
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden pt-16 sm:pt-20 relative z-10">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
