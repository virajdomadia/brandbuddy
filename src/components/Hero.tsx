
"use client";

import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero-section bg-grid" id="hero">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hero-watermark"
      >
        B
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-layout"
      >
        <div className="hero-left">
          <motion.div variants={itemVariants} className="hero-tagline">
            MARKETING & WEB STUDIO · EST. 2025
          </motion.div>
          
          <div className="hero-headline">
            <span className="line mask-reveal">
              <motion.span variants={lineVariants} className="mask-reveal-inner">WE BUILD</motion.span>
            </span>
            <span className="line mask-reveal">
              <motion.span variants={lineVariants} className="mask-reveal-inner">BRANDS THAT</motion.span>
            </span>
            <span className="line serif dark mask-reveal">
              <motion.span 
                variants={lineVariants} 
                className="mask-reveal-inner serif-glow"
              >
                people
              </motion.span>
            </span>
            <span className="line stroke mask-reveal">
              <motion.span variants={lineVariants} className="mask-reveal-inner">LOVE.</motion.span>
            </span>
          </div>
        </div>

        <div className="hero-right-col">
          <div className="hero-info-stack">
            <motion.div variants={itemVariants} className="hero-manifesto">
              "We're here to help you reach your goals by building a brand that actually connects with your customers. No jargon. Just growth."
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-description">
              <div className="founding-tracker">
                <span className="dot dot-breathe"></span>
                ONBOARDING FOUNDING PARTNER 3 OF 5
              </div>
              <p>
                BrandsBuddy is a dedicated marketing and web studio 
                built to help ambitious founders turn their vision into a brand that stands out and succeeds.
              </p>
              <div className="hero-buttons">
                <motion.a 
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#packages" 
                  className="btn-primary brutalist-shadow"
                >
                  SEE HOW WE HELP ↓
                </motion.a>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#process" 
                  className="btn-link"
                >
                  OUR APPROACH →
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
