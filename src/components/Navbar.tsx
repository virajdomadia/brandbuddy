"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <nav className={`site-nav ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={closeMobileMenu}>
          <Image 
            src="/logo.png" 
            alt="BrandsBuddy" 
            width={isScrolled ? 120 : 160} 
            height={isScrolled ? 40 : 52} 
            className="logo-img"
            priority 
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <a href="/#services" className="nav-link-paint">SERVICES</a>
          <a href="/#process" className="nav-link-paint">PROCESS</a>
          <a href="/#packages" className="nav-link-paint">PACKAGES</a>
          <Link href="/about" className="nav-link-paint">ABOUT</Link>
          <a href="/#faq" className="nav-link-paint">FAQ</a>
        </div>

        {/* CTA Button */}
        <div className="desktop-only" style={{ padding: '0 24px', display: 'flex', alignItems: 'center', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: '1rem' }}>
            START PROJECT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-links">
          <a href="/#services" onClick={closeMobileMenu}>SERVICES</a>
          <a href="/#process" onClick={closeMobileMenu}>PROCESS</a>
          <a href="/#packages" onClick={closeMobileMenu}>PACKAGES</a>
          <Link href="/about" onClick={closeMobileMenu}>ABOUT</Link>
          <a href="/#faq" onClick={closeMobileMenu}>FAQ</a>
          <a href="#contact" onClick={closeMobileMenu} style={{ color: "var(--lime)", WebkitTextStroke: "1px var(--ink)" }}>START PROJECT</a>
        </div>
        <div className="mobile-menu-footer">
          <p>© 2026 BRANDSBUDDY</p>
        </div>
      </div>
    </nav>
  );
}
