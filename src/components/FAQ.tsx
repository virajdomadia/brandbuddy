"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-grid">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="faq-left"
        >
          <div className="faq-label">FAQ</div>
          <div className="section-title">
            <span className="line">COMMON</span>
            <span className="line serif">questions.</span>
          </div>
          <p className="faq-support">
            We want to make sure you have all the information you need. 
            If your question isn't here, just send us a message — we're happy to help.
          </p>
          <motion.a 
            whileHover={{ x: 10 }}
            href="#" 
            className="btn-talk"
          >
            GET IN TOUCH →
          </motion.a>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className={`faq-question ${openFaq === i ? "active" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                {faq.q}
                <motion.span 
                  animate={{ rotate: openFaq === i ? 45 : 0 }}
                  className="faq-toggle"
                >
                  +
                </motion.span>
              </button>
              
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="faq-answer overflow-hidden"
                  >
                    <p className="pb-7">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
