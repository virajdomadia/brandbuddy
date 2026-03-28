"use client";

import { useRef, useState } from "react";
import { services } from "@/lib/data";

export function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div className="section-title">
          <span className="line">WHAT WE</span>
          <span className="line serif">actually do</span>
        </div>
        <p className="section-desc">
          Every service we offer is wired together around one goal — growing
          your business. No bloat, no upsells you don&apos;t need.
        </p>
      </div>

      <div
        className="services-carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {services.map((s) => (
          <div className="service-card" key={s.num}>
            <div>
              <div className="card-number">{s.num}</div>
              <div className="card-icon">{s.icon}</div>
              <h3 className={`card-title ${s.highlight ? "highlight" : ""}`}>
                {s.title}
              </h3>
              <p className="card-desc">{s.desc}</p>
            </div>
            <div>
              <div className="card-tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div
                className="card-bar"
                style={{ background: s.barColor }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="drag-hint">← DRAG TO EXPLORE →</div>
    </section>
  );
}
