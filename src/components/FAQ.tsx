"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-grid">
        <div className="faq-left">
          <div className="faq-label">FAQ</div>
          <div className="section-title">
            <span className="line">GOT</span>
            <span className="line serif">questions?</span>
          </div>
          <p className="faq-support">
            We get asked these a lot. If yours isn&apos;t here, just reach out — we
            respond fast.
          </p>
          <a href="#" className="btn-talk">
            TALK TO US →
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className={`faq-question ${openFaq === i ? "active" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                {faq.q}
                <span className="faq-toggle">+</span>
              </button>
              <div className={`faq-answer ${openFaq === i ? "open" : ""}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
