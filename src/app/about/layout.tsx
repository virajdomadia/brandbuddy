import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BrandsBuddy, the branding and web studio helping founders build digital-first brands that resonate. Meet our founders Saloni Borade and Viraj Domadia.",
  openGraph: {
    title: "About Us | BrandsBuddy",
    description: "Learn about BrandsBuddy, the branding and web studio helping founders build digital-first brands that resonate. Meet our founders Saloni Borade and Viraj Domadia.",
    url: "https://thebrandsbuddy.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
