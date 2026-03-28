import Image from "next/image";

export function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <Image src="/logo.png" alt="BrandsBuddy" width={160} height={52} priority />
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
