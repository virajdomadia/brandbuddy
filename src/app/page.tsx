import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceStrip } from "@/components/ServiceStrip";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Process } from "@/components/Process";
import { Packages } from "@/components/Packages";
import { Mission } from "@/components/Mission";
import { FAQ } from "@/components/FAQ";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <Hero />
      <ServiceStrip />

      {/* Diagonal: dark → cream */}
      <div className="diagonal-transition dark-to-cream" />

      <ServicesCarousel />

      {/* Diagonal: dark → cream */}
      <div className="diagonal-transition dark-to-cream" />

      <Process />

      {/* Lime stripe divider */}
      <div className="lime-stripe" />

      <Packages />

      {/* Diagonal: dark → lime */}
      <div className="diagonal-transition dark-to-lime" />

      <Mission />

      {/* Diagonal: lime → cream */}
      <div className="diagonal-transition lime-to-cream" />

      <FAQ />
      <FooterCTA />
      <Footer />
    </>
  );
}
