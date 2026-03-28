import { serviceStrip } from "@/lib/data";

export function ServiceStrip() {
  return (
    <div className="service-strip">
      {serviceStrip.map((item) => (
        <div className="service-strip-item" key={item.title}>
          <span className="strip-icon">{item.icon}</span>
          <div className="strip-text">
            <h4>{item.title}</h4>
            <span>{item.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
