import { values } from "@/lib/data";

export function Mission() {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-grid">
        <div className="mission-left">
          <div className="section-title">
            <span className="line">WE DO</span>
            <span className="line serif">things a bit</span>
            <span className="line">DIFFERENTLY.</span>
          </div>
          <p className="mission-text">
            BrandsBuddy was started with a simple idea: that building a brand should be 
            an exciting journey, not a stressful one. We're here to provide the expertise 
            and support you need to turn your vision into a reality.
          </p>
          <a href="#" className="btn-conversation">
            START A CHAT ↓
          </a>

          <div className="founding-offer">
            <h4>🎁 BECOME A FOUNDING PARTNER</h4>
            <p>
              We are currently looking for five ambitious founders to join us as founding clients. 
              In return for your trust, you'll get discounted lifetime pricing, direct access to 
              us, and our full focus as we help you build a brand that stands out.
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
