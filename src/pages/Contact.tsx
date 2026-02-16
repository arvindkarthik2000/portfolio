import { IconSend, IconMail, IconLinkedIn, IconGitHub } from "../components/Icons";

export default function ContactPage() {
  return (
    <main className="container">
      <h1 style={{display:'flex',alignItems:'center',gap:12}}><IconSend /> Let's Build Something Amazing</h1>
      
      <div className="contactHero">
        <div className="contactIntro">
          <p className="contactPitch">
            Whether you're looking to build a cutting-edge AI system, scale a full-stack application, 
            or just want to chat about tech — I'm all ears. I love collaborating on challenging projects 
            that push boundaries and create real impact.
          </p>
        </div>
        
        <div className="contactReasons">
          <div className="reasonCard">
            <span className="reasonEmoji">💡</span>
            <div>
              <h3 className="reasonTitle">Got an Idea?</h3>
              <p className="reasonDesc">Let's turn it into a production-ready product</p>
            </div>
          </div>
          <div className="reasonCard">
            <span className="reasonEmoji">🚀</span>
            <div>
              <h3 className="reasonTitle">Hiring?</h3>
              <p className="reasonDesc">I'm open to full-time opportunities & exciting projects</p>
            </div>
          </div>
          <div className="reasonCard">
            <span className="reasonEmoji">🤝</span>
            <div>
              <h3 className="reasonTitle">Just Networking?</h3>
              <p className="reasonDesc">Always happy to connect with fellow engineers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contactCTA">
        <h2 className="contactSubheading">Pick your preferred channel</h2>
        <p className="contactResponse">⚡ I typically respond within 24 hours</p>
      </div>
      
      <div className="contactGrid">
        <a className="contactLink" href="mailto:arvindkarthik2000@gmail.com">
          <div className="contactIcon email"><IconMail /></div>
          <div>
            <div className="contactLabel">Email</div>
            <div className="contactValue">arvindkarthik2000@gmail.com</div>
          </div>
        </a>
        <a className="contactLink" href="https://linkedin.com/in/arvindkarthik26" target="_blank" rel="noreferrer">
          <div className="contactIcon linkedin"><IconLinkedIn /></div>
          <div>
            <div className="contactLabel">LinkedIn</div>
            <div className="contactValue">arvindkarthik26</div>
          </div>
        </a>
        <a className="contactLink" href="https://github.com/arvindkarthik2000" target="_blank" rel="noreferrer">
          <div className="contactIcon github"><IconGitHub /></div>
          <div>
            <div className="contactLabel">GitHub</div>
            <div className="contactValue">arvindkarthik2000</div>
          </div>
        </a>
      </div>
    </main>
  );
}
