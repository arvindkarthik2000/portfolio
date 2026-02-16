import type { Experience } from "../data";

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="roadmap">
      {/* The vertical road */}
      <div className="roadLine" />

      {items.map((e, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div
            className={`rmStop ${isLeft ? "left" : "right"}`}
            key={`${e.org}-${e.role}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Checkpoint marker on the road */}
            <div className="rmMarker">
              <span className="rmMarkerDot" />
              <span className="rmMarkerRing" />
              <span className="rmMarkerPulse" />
            </div>

            {/* Date flag */}
            <div className="rmFlag">
              <span className="rmFlagText">{e.dates}</span>
            </div>

            {/* Content card */}
            <div className="rmCard">
              <div className="rmCardHead">
                <h4 className="rmRole">{e.role}</h4>
                <div className="rmOrgRow">
                  <span className="rmOrg">{e.org}</span>
                  <span className="rmLoc">📍 {e.location}</span>
                </div>
              </div>
              <ul className="rmBullets">
                {e.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}

      {/* End-of-road marker */}
      <div className="rmEnd">
        <span className="rmEndDot" />
        <span className="rmEndLabel">Start of Journey</span>
      </div>
    </div>
  );
}
