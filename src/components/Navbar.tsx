"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`site-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <Image 
            src="/logo.png" 
            alt="BrandsBuddy" 
            width={isScrolled ? 120 : 160} 
            height={isScrolled ? 40 : 52} 
            className="logo-img"
            priority 
          />
        </a>
        <div className="nav-links">
          <a href="#services">SERVICES</a>
          <a href="#process">PROCESS</a>
          <a href="#packages">PACKAGES</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </nav>
  );
}
