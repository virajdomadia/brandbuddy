import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thebrandsbuddy.com"),
  title: {
    default: "BrandsBuddy | Branding, Web & Marketing Studio",
    template: "%s | BrandsBuddy"
  },
  description: "BrandsBuddy is a dedicated branding, web, and marketing studio helping founders build brands people love. Honest advice, no-jargon strategy, and results that actually scale.",
  keywords: ["branding agency", "web design studio", "growth marketing", "digital marketing for startups", "nextjs development", "marketing agency"],
  authors: [{ name: "BrandsBuddy" }],
  creator: "BrandsBuddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thebrandsbuddy.com",
    siteName: "BrandsBuddy",
    title: "BrandsBuddy | Branding, Web & Marketing Studio",
    description: "BrandsBuddy is a dedicated branding, web, and marketing studio helping founders build brands people love. Honest advice, no-jargon strategy, and results that actually scale.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BrandsBuddy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandsBuddy | Branding, Web & Marketing Studio",
    description: "BrandsBuddy is a dedicated branding, web, and marketing studio helping founders build brands people love. Honest advice, no-jargon strategy, and results that actually scale.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
