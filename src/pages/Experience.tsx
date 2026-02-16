import Timeline from "../components/Timeline";
import { experience } from "../data";
import { IconBriefcase } from "../components/Icons";

export default function ExperiencePage() {
  return (
    <main className="container">
      <h1 style={{display:'flex',alignItems:'center',gap:12}}><IconBriefcase /> Experience</h1>
      <p>Impact-focused work across AI, ML, and full-stack delivery.</p>
      <Timeline items={experience} />
    </main>
  );
}
