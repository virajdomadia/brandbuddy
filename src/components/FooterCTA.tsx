"use client";

import { motion } from "framer-motion";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function FooterCTA() {
  return (
    <section className="footer-cta overflow-hidden">
      <RevealOnScroll className="f-cta-content" y={40}>
        <h2 className="f-cta-title">
          <span className="line">LET'S GROW</span>
          <span className="line serif">together.</span>
        </h2>
        <p className="f-cta-desc">
          Ready to take your brand to the next level? We're a friendly, 
          dedicated team that actually cares about your success. Let's talk 
          about what you're building and how we can help.
        </p>
        <div className="f-cta-btns">
          <motion.a 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="btn-cta-primary brutalist-shadow-lime"
          >
            CLAIM YOUR SPOT ↓
          </motion.a>
          <motion.a 
            whileHover={{ x: 10 }}
            href="#" 
            className="btn-cta-outline"
          >
            HOW WE WORK →
          </motion.a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
