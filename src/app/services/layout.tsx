import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Full-service digital growth for brands that want to dominate. We provide cutting-edge Marketing, Web Development, and Branding services.",
  openGraph: {
    title: "Our Services | BrandsBuddy",
    description: "Full-service digital growth for brands that want to dominate. We provide cutting-edge Marketing, Web Development, and Branding services.",
    url: "https://thebrandsbuddy.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
