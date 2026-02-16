import { education } from "../data";
import { IconGrad } from "../components/Icons";

export default function EducationPage() {
  return (
    <main className="container">
      <h1 style={{display:'flex',alignItems:'center',gap:12}}><IconGrad /> Education</h1>
      <p>Academic background</p>
      <div className="eduGrid">
        {education.map((e) => (
          <article className="eduCard" key={e.school}>
            <div className="eduHeader">
              <div className="eduLogo">🎓</div>
              <div>
                <div className="eduSchool">{e.school}</div>
                <div className="eduDegree">{e.degree}</div>
              </div>
            </div>
            <div className="eduMeta">
              <span className="eduMetaItem">📅 {e.dates}</span>
              <span className="eduMetaItem">📍 {e.location}</span>
              {e.details && <span className="eduGpa">{e.details}</span>}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
