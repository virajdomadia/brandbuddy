import { values } from "@/lib/data";

export function Mission() {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-grid">
        <div className="mission-left">
          <div className="section-title">
            <span className="line">NEW STUDIO.</span>
            <span className="line serif">Real people.</span>
            <span className="line">ZERO FLUFF.</span>
          </div>
          <p className="mission-text">
            We built BrandsBuddy because we were tired of agencies that
            overpromise, hide metrics, and treat clients like ticket numbers.
            We do this differently — with honesty, craft, and real
            accountability.
          </p>
          <a href="#" className="btn-conversation">
            START A CONVERSATION →
          </a>

          <div className="founding-offer">
            <h4>🎁 FOUNDING CLIENT OFFER</h4>
            <p>
              Our first clients get locked-in founding pricing, direct team
              access, and our full focus as we build our portfolio together.
              This won&apos;t last long.
            </p>
          </div>
        </div>

        <div className="mission-values">
          {values.map((v) => (
            <div className="value-item" key={v.num}>
              <div className="value-header">
                <span className="value-number">{v.num}</span>
                <h4 className="value-title">{v.title}</h4>
              </div>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
