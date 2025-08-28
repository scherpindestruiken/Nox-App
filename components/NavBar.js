// components/NavBar.js
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/fotopagina", label: "Fotopagina" },
  { href: "/puzzelpagina", label: "Puzzelpagina" },
  { href: "/wedstrijd", label: "Wedstrijd" },
];

export default function NavBar() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      const panel = panelRef.current;
      const btn = btnRef.current;
      if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) {
        setOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();
  }, [open]);

  return (
    <header className="nav-root" role="banner">
      <div className="nav-bg" aria-hidden="true" />
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/" className="brand" aria-label="Terug naar start">
            <span className="brand-logo-wrap">
              <img src="/NOX_favicon.jpeg" alt="" className="brand-icon" />
            </span>
            <span className="brand-name">Scherp in de Struiken</span>
          </Link>
        </div>

        <nav className="nav-links" aria-label="Hoofdmenu">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              <span className="nav-link-label">{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="nav-mobile">
          <button
            ref={btnRef}
            className="hamburger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Sluit menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
            </svg>
          </button>

          <div
            ref={panelRef}
            id="mobile-menu"
            className={`mobile-panel ${open ? "open" : ""}`}
            role="menu"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`mobile-link ${pathname === l.href ? "active" : ""}`}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
