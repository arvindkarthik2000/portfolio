
import { useState } from "react";
import { IconMenu, IconSun, IconMoon } from "./Icons";
import { useTheme } from "./ThemeProvider";

const items = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certs" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="navWrap">
      <nav className="nav">
        <a className="brand" href="#top">
          <span className="brandName">ARVIND KARTHIK</span>
        </a>

        <div className="navRight">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="navLink">
              {i.label}
            </a>
          ))}
          
          <button
            className="themeToggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>

          <button
            className="menuToggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <IconMenu size={20} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobileMenu">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="navLink"
              onClick={() => setOpen(false)}
              style={{ padding: "10px 0" }}
            >
              {i.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
