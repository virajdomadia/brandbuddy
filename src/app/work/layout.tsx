import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore our portfolio of selected work. See how BrandsBuddy elevates startups through premium web design, branding, and marketing strategies.",
  openGraph: {
    title: "Selected Work | BrandsBuddy",
    description: "Explore our portfolio of selected work. See how BrandsBuddy elevates startups through premium web design, branding, and marketing strategies.",
    url: "https://thebrandsbuddy.com/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
