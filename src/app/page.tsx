import { Hero } from "@/components/Hero";
import { ServiceStrip } from "@/components/ServiceStrip";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Process } from "@/components/Process";
import { Packages } from "@/components/Packages";
import { Mission } from "@/components/Mission";
import { FAQ } from "@/components/FAQ";
import { FooterCTA } from "@/components/FooterCTA";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BrandsBuddy",
    "image": "https://thebrandsbuddy.com/logo.png",
    "url": "https://thebrandsbuddy.com",
    "description": "BrandsBuddy is a dedicated branding, web, and marketing studio helping founders build brands people love.",
    "email": "thebrandsbuddy@gmail.com",
    "sameAs": [
      "https://www.instagram.com/thebrandsbuddy",
      "https://www.linkedin.com/company/brandsbuddy"
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data for Local SEO / Business Entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      
      <RevealOnScroll y={0}>
        <ServiceStrip />
      </RevealOnScroll>

      {/* Diagonal: dark → cream */}
      <div className="diagonal-transition dark-to-cream" />

      <RevealOnScroll>
        <ServicesCarousel />
      </RevealOnScroll>

      {/* Diagonal: dark → cream */}
      <div className="diagonal-transition dark-to-cream" />

      <RevealOnScroll>
        <Process />
      </RevealOnScroll>

      {/* Lime stripe divider */}
      <div className="lime-stripe" />

      <RevealOnScroll>
        <Packages />
      </RevealOnScroll>

      {/* Diagonal: dark → lime */}
      <div className="diagonal-transition dark-to-lime" />

      <RevealOnScroll>
        <Mission />
      </RevealOnScroll>

      {/* Diagonal: lime → cream */}
      <div className="diagonal-transition lime-to-cream" />

      <FAQ />
      <FooterCTA />
    </>
  );
}
