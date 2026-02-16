import { IconGitHub, IconLinkedIn, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <a href="https://github.com/arvindkarthik2000" target="_blank" rel="noreferrer">
          <IconGitHub size={16} /> GitHub
        </a>
        <a href="https://linkedin.com/in/arvindkarthik26" target="_blank" rel="noreferrer">
          <IconLinkedIn size={16} /> LinkedIn
        </a>
        <a href="mailto:arvindkarthik2000@gmail.com">
          <IconMail size={16} /> Email
        </a>
      </div>
      <div className="footerCopy">
        © {new Date().getFullYear()} Arvind Karthik. All rights reserved. | Designed & Developed with React, TypeScript & Vite
      </div>
    </footer>
  );
}
