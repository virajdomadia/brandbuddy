import { processSteps } from "@/lib/data";
import Image from "next/image";

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
        {processSteps.map((step, idx) => (
          <div className="process-step staggered reveal" key={step.num}>
            <div className="step-visual">
              <span className="bg-number">{step.num}</span>
              <span className="visual-label">{step.week}</span>
              <Image 
                src={`/process/phase${idx + 1}.png`}
                alt={step.title}
                fill
                className="step-image"
              />
            </div>
            
            <div className="step-right">
              <div className="step-meta">
                <span className="step-week-badge">{step.week}</span>
                <div style={{ height: '1px', flex: 1, background: 'rgba(0,0,0,0.1)' }}></div>
              </div>
              
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              
              <div className="step-deliverables">
                <div className="deliverables-title">PHASE DELIVERABLES</div>
                <div className="deliverables-list">
                  {step.deliverables?.map((item) => (
                    <div className="deliverable-item" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="step-tags" style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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
