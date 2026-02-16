import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { ThemeProvider } from "./components/ThemeProvider";
import {
  IconCode, IconBriefcase, IconCpu, IconGrad,
  IconAward, IconSend, IconGitHub, IconLinkedIn,
  IconMail
} from "./components/Icons";
import {
  certifications, education, experience, profile,
  projects, skills, skillLogos
} from "./data";
import type { Project } from "./data";

/* ── Typewriter Hook ─────────────────────── */
function useTypewriter(strings: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx(charIdx + 1);
          }
        } else {
          setText(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setIdx((idx + 1) % strings.length);
            setCharIdx(0);
          } else {
            setCharIdx(charIdx - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return text;
}

/* ── Filter Categories ───────────────────── */
const categories = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / RAG" },
  { key: "ml", label: "Machine Learning" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "nlp", label: "NLP" }
] as const;

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [filter, setFilter] = useState("all");

  // Scroll progress bar
  const handleScroll = useCallback(() => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    setScrollPct(pct);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const typed = useTypewriter([
    "Full-Stack Engineer",
    "ML Engineer",
    "AI Engineer",
    "Data Engineer",
    "Software Development Engineer",
    "Building scalable systems"
  ]);

  const filtered: Project[] =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <ThemeProvider>
      {/* Animated particle network background */}
      <ParticleBackground />

      {/* Scroll progress indicator */}
      <div className="scrollProgress" style={{ width: `${scrollPct}%` }} />

      <div id="top" className="app">
        <Navbar />

        <main className="container">
          {/* ── HERO ─────────────────────────── */}
          <section className="hero">
            <div className="heroLeft">
              <div className="kicker">
                <span className="kickerDot" />
                Open to Full-Stack | ML | AI | Data Engineering roles
              </div>
              <h1>
                Hi, I'm{" "}
                <span className="gradientName">{profile.name}</span>
              </h1>
              <div className="typewriter">
                {typed}
                <span className="cursor" />
              </div>
              <p className="summary">
                I build production-ready AI systems, scalable APIs, and full-stack applications. From ML models achieving 94% accuracy to cloud-native microservices handling 10K+ data points. Experienced in end-to-end delivery with Python, Java, React, and AWS.
              </p>

              <div className="heroCtas">
                <a className="btnPrimary" href="#projects">
                  <IconCode size={16} /> View Projects
                </a>
                <a className="btn" href="#contact">
                  <IconSend size={16} /> Contact Me
                </a>
              </div>

              <div className="heroSocials">
                <a className="socialBtn" href="https://github.com/arvindkarthik2000" target="_blank" rel="noreferrer" title="GitHub">
                  <IconGitHub />
                </a>
                <a className="socialBtn" href="https://linkedin.com/in/arvindkarthik26" target="_blank" rel="noreferrer" title="LinkedIn">
                  <IconLinkedIn />
                </a>
                <a className="socialBtn" href="mailto:arvindkarthik2000@gmail.com" title="Email">
                  <IconMail />
                </a>
              </div>
            </div>

            <div className="heroRight">
              {/* Gaming HUD Screen */}
              <div className="gameScreen">
                <div className="screenBezel">
                  <div className="screenTopBar">
                    <div className="screenLed" />
                    <span className="screenBrand">SYS::OVERVIEW</span>
                    <span className="screenFps">● LIVE</span>
                  </div>

                  <div className="screenDisplay">
                    <div className="scanLines" />
                    <div className="screenContent">

                      {/* Quick bio — no name/title repeat */}
                      <div className="hudBio">
                        <p><span className="hudHighlight">3+ years</span> of hands-on experience across <span className="hudHighlight">full-stack development, AI systems, machine learning engineering, and data engineering</span>. Expertise in Python, Java, TypeScript with production-grade ML models, scalable APIs, and end-to-end cloud deployments.</p>
                      </div>

                      {/* Stats grid — real metrics only */}
                      <div className="hudStats">
                        <div className="hudStat">
                          <span className="hudStatVal">11+</span>
                          <span className="hudStatLabel">Projects Shipped</span>
                        </div>
                        <div className="hudStat">
                          <span className="hudStatVal">6</span>
                          <span className="hudStatLabel">Roles Held</span>
                        </div>
                        <div className="hudStat">
                          <span className="hudStatVal">3.91</span>
                          <span className="hudStatLabel">GPA (M.S.)</span>
                        </div>
                        <div className="hudStat">
                          <span className="hudStatVal">4</span>
                          <span className="hudStatLabel">Certifications</span>
                        </div>
                      </div>

                      {/* Loadout — current tech */}
                      <div className="hudInventory">
                        <div className="hudInvTitle">◆ LOADOUT</div>
                        <div className="hudLoadout">
                          {['Python','Java','TypeScript','FastAPI','Flask','Spring Boot','React','Angular','AWS','Docker','Kubernetes','Neo4j','PostgreSQL','MongoDB','Kafka','Redis'].map(t => (
                            <span className="hudChip" key={t}>{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Status log */}
                      <div className="hudQuests">
                        <div className="hudInvTitle">◆ STATUS</div>
                        <div className="hudQuest"><span className="hudQuestCheck">✔</span> Currently AI Intern @ Worldlink</div>
                        <div className="hudQuest"><span className="hudQuestCheck">✔</span> 4x Certified: Snowflake, Google Cloud, Microsoft Fabric, Databricks</div>
                        <div className="hudQuest active"><span className="hudQuestDot" /> Seeking Full-Stack | ML | AI | Data Engineering roles</div>
                      </div>
                    </div>
                  </div>

                  <div className="screenBottomBar">
                    <span>◁ Plano, Texas</span>
                    <span className="screenPower">⏻ ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE ──────────────────── */}
          <Section
            id="experience"
            title="Experience"
            subtitle="Building AI systems, ML pipelines, full-stack applications, and data platforms."
            icon={<IconBriefcase />}
          >
            <Timeline items={experience} />
          </Section>

          {/* ── PROJECTS ────────────────────── */}
          <Section
            id="projects"
            title="Projects"
            subtitle="End-to-end AI systems, ML models, full-stack apps, and data engineering solutions."
            icon={<IconCode />}
          >
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
          </Section>

          {/* ── SKILLS ──────────────────────── */}
          <Section
            id="skills"
            title="Skills"
            subtitle="Full-stack development, ML/AI frameworks, cloud infrastructure, and data engineering tools."
            icon={<IconCpu />}
          >
            <div className="skillsLogoGrid">
              {Object.values(skills)
                .flatMap((group) => group.items)
                .map((s) => {
                  const slug = skillLogos[s];
                  if (!slug) return null;
                  
                  // Use skill-icons for better coverage
                  return (
                    <div className="skillLogoWrap" key={s} title={s}>
                      <img
                        src={`https://skillicons.dev/icons?i=${slug}`}
                        alt={s}
                        loading="lazy"
                        className="skillLogoImg"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          // Fallback to devicon
                          if (img.src.includes('skillicons')) {
                            img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
                          } else {
                            img.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </Section>

          {/* ── EDUCATION ───────────────────── */}
          <Section
            id="education"
            title="Education"
            subtitle="Academic background"
            icon={<IconGrad />}
          >
            <div className="eduRoadmap">
              <div className="eduRoadLine" />
              {education.map((e, i) => (
                <div 
                  className="eduCheckpoint" 
                  key={e.school}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {/* Checkpoint marker */}
                  <div className="eduMarker">
                    <span className="eduMarkerDot" />
                    <span className="eduMarkerRing" />
                    <span className="eduMarkerPulse" />
                  </div>
                  
                  {/* Content card */}
                  <div className="eduCard">
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
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── CERTIFICATIONS ──────────────── */}
          <Section
            id="certs"
            title="Certifications"
            subtitle="Industry credentials"
            icon={<IconAward />}
          >
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
          </Section>

          {/* ── CONTACT ─────────────────────── */}
          <Section
            id="contact"
            title="Let's Build Something Amazing"
            subtitle="Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you within 24 hours."
            icon={<IconSend />}
          >
            <div className="contactFormWrapper">
              <form 
                className="contactForm"
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
              >
                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="name" className="formLabel">
                      <span>Name</span>
                      <span className="formLabelRequired">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="formInput"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="email" className="formLabel">
                      <span>Email</span>
                      <span className="formLabelRequired">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="formInput"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="formGroup">
                  <label htmlFor="subject" className="formLabel">
                    <span>Subject</span>
                    <span className="formLabelRequired">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="formInput"
                    placeholder="Project Discussion / Job Opportunity / General Inquiry"
                    required
                  />
                </div>
                
                <div className="formGroup">
                  <label htmlFor="message" className="formLabel">
                    <span>Message</span>
                    <span className="formLabelRequired">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="formTextarea"
                    placeholder="Tell me about your project, opportunity, or question..."
                    rows={6}
                    required
                  ></textarea>
                </div>
                
                <div className="formFooter">
                  <button type="submit" className="formSubmit">
                    <IconSend size={18} />
                    <span>Send Message</span>
                  </button>
                  <div className="formAltContact">
                    Or email me directly at{' '}
                    <a href="mailto:arvindkarthik2000@gmail.com">arvindkarthik2000@gmail.com</a>
                  </div>
                </div>
              </form>
            </div>
          </Section>

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
