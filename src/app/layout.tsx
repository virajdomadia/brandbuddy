import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Using Oswald for that condensed, bold look
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/ui/sidebar";

import { MobileNav } from "@/components/ui/mobile-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrandBaby | Digital Marketing Agency",
  description: "We don't just build brands, we raise them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          oswald.variable,
          "antialiased bg-background text-foreground min-h-screen font-sans overflow-x-hidden"
        )}
      >
        <MobileNav />
        <div className="flex min-h-screen bg-black">
          {/* Sidebar - Fixed on Desktop */}
          <div className="w-auto hidden md:block">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <main className="flex-1 w-full bg-black relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
