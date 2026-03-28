import { packages } from "@/lib/data";

export function Packages() {
  return (
    <section className="packages-section" id="packages">
      <div className="packages-header">
        <div className="section-title">
          <span className="line">SIMPLE</span>
          <span className="line highlight">PACKAGES.</span>
        </div>
        <p className="section-desc">
          Clear scope, honest pricing. No surprise invoices, no scope creep
          hidden in small print.
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div
            className={`package-card ${pkg.primary ? "popular" : ""}`}
            key={pkg.name}
          >
            <div className="package-icon">{pkg.icon}</div>
            <h3 className="package-name">{pkg.name}</h3>
            <p className="package-desc">{pkg.desc}</p>
            <div className="package-divider" />
            <ul className="package-features">
              {pkg.features.map((f) => (
                <li key={f}>
                  <span className="arrow">→</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`btn-package ${pkg.primary ? "primary" : ""}`}
            >
              {pkg.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
