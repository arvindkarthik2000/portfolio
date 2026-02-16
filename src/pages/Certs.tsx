import { certifications } from "../data";
import { IconAward } from "../components/Icons";

export default function CertsPage() {
  return (
    <main className="container">
      <h1 style={{display:'flex',alignItems:'center',gap:12}}><IconAward /> Certifications</h1>
      <p>Industry credentials</p>
      <div className="certsGrid">
        {certifications.map((c) => (
          <div className="certCard" key={c.name}>
            <div className="certBadge">
              <img src={c.logo} alt={c.provider} loading="lazy" />
            </div>
            <div className="certInfo">
              <div className="certProvider">{c.provider}</div>
              <div className="certName">{c.name}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
