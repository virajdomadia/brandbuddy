import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="/#services">SERVICES</a>
        <a href="/#process">PROCESS</a>
        <a href="/#packages">PACKAGES</a>
        <Link href="/about">ABOUT</Link>
        <a href="/#faq">FAQ</a>
        <a href="#contact">START PROJECT</a>
      </div>
      <div className="footer-info">
        <a href="mailto:thebrandsbuddy@gmail.com">thebrandsbuddy@gmail.com</a> ·
        Bengaluru, India
      </div>
    </footer>
  );
}
