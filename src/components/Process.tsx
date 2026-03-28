import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-header">
        <div className="section-title">
          <span className="line">HOW</span>
          <span className="line">
            IT{" "}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                textTransform: "none",
              }}
            >
              works.
            </span>
          </span>
        </div>
        <span className="steps-badge">4 STEPS</span>
      </div>

      <div className="process-grid">
        {processSteps.map((step) => (
          <div className="process-step reveal" key={step.num}>
            <div className="step-left">
              <span className="step-number">{step.num}</span>
              <span className="step-week">{step.week}</span>
            </div>
            <div className="step-right">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="step-tags">
                {step.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
