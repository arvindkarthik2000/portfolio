import { profile } from "../data";
import { IconCode, IconSend, IconGitHub, IconLinkedIn, IconMail } from "../components/Icons";
import { ThemeProvider } from "../components/ThemeProvider";
import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function HomePage() {
  // Typewriter effect can be added here if needed
  return (
    <ThemeProvider>
      <ParticleBackground />
      <div id="top" className="app">
        <Navbar />
        <main className="container">
          <section className="hero">
            <div className="heroLeft">
              <div className="kicker">
                <span className="kickerDot" />
                Available for full-time opportunities
              </div>
              <h1>
                Hi, I'm <span className="gradientName">{profile.name}</span>
              </h1>
              <div className="typewriter">Full-Stack Engineer</div>
              <p className="summary">{profile.summary}</p>
              <div className="heroCtas">
                <a className="btnPrimary" href="/projects">
                  <IconCode size={16} /> View Projects
                </a>
                <a className="btn" href="/contact">
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
              {/* Gaming HUD Screen, stats, etc. can be added here if needed */}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
