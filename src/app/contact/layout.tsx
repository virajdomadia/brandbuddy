import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to scale? Get in touch with BrandsBuddy. Fill out the form or email us to start your next branding or web project.",
  openGraph: {
    title: "Contact Us | BrandsBuddy",
    description: "Ready to scale? Get in touch with BrandsBuddy. Fill out the form or email us to start your next branding or web project.",
    url: "https://thebrandsbuddy.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
