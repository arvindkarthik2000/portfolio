import type { Project } from "../data";
import { IconGitHub, IconExternalLink } from "./Icons";

const categoryLabels: Record<string, string> = {
  ai: "AI / RAG",
  fullstack: "Full-Stack",
  ml: "Machine Learning",
  nlp: "NLP"
};

const categoryEmoji: Record<string, string> = {
  ai: "🤖",
  fullstack: "🌐",
  ml: "🧠",
  nlp: "💬"
};

export default function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  return (
    <article
      className={`card cat-${p.category}`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Project image */}
      {p.image && (
        <div className="cardImageWrap">
          <img className="cardImage" src={p.image} alt={p.title} loading="lazy" />
          <div className="cardImageOverlay" />
        </div>
      )}

      {/* Accent stripe — colour set via CSS per category */}
      <div className="cardStripe" />

      <div className="cardInner">
        <div className="cardTopRow">
          <span className={`cardCategory ${p.category}`}>
            {categoryEmoji[p.category]} {categoryLabels[p.category] || p.category}
          </span>
          {p.date && <span className="cardDate">{p.date}</span>}
        </div>

        <h3 className="cardTitle">{p.title}</h3>

        <ul className="cardBullets">
          {p.description.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <div className="cardFooter">
          <div className="chips">
            {p.stack.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>

          {p.links && p.links.length > 0 && (
            <div className="cardLinks">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  className="cardLinkBtn"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  title={l.label}
                >
                  {l.label === "GitHub" ? <IconGitHub size={15} /> : <IconExternalLink size={15} />}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
