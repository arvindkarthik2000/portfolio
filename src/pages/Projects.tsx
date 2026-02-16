import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import { IconCode } from "../components/Icons";
import { useState } from "react";

const categories = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / RAG" },
  { key: "ml", label: "Machine Learning" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "nlp", label: "NLP" }
] as const;

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  return (
    <main className="container">
      <h1 style={{display:'flex',alignItems:'center',gap:12}}><IconCode /> Projects</h1>
      <p>AI systems, full-stack applications, and ML pipelines I've built.</p>
      <div className="filterBar">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`filterBtn${filter === c.key ? " active" : ""}`}
            onClick={() => setFilter(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="projectsGrid">
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </main>
  );
}
