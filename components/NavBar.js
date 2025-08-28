import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Sluit het mobiele menu bij routewissel of resize
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nox-nav" role="banner">
      <div className="nox-nav-inner">
        {/* Brand: één enkele Link, geen Link-in-Link */}
        <Link href="/" className="nox-brand" aria-label="Home">
          {/* Next 13+/15 ondersteunt className direct op Link */}
          <img
            src="/icon-192.png"
            alt="NOX"
            width={32}
            height={32}
            className="nox-logo"
            loading="eager"
            decoding="async"
          />
          <span className="nox-title text-2xl font-bold hover:underline">
            Scherp in de Struiken
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className="nox-burger"
          aria-label="Menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open menu</span>
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Desktop links */}
        <nav className="nox-links">
          <Link href="/blog" className="nox-link">Blog</Link>
          <Link href="/fotopagina" className="nox-link">Fotopagina</Link>
          <Link href="/puzzelpagina" className="nox-link">Puzzelpagina</Link>
          <Link href="/wedstrijd" className="nox-link">Wedstrijd</Link>
        </nav>
      </div>

      {/* Mobiel dropdown */}
      <div className={`nox-mobile ${open ? "open" : ""}`}>
        <Link href="/blog" className="nox-link" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="/fotopagina" className="nox-link" onClick={() => setOpen(false)}>Fotopagina</Link>
        <Link href="/puzzelpagina" className="nox-link" onClick={() => setOpen(false)}>Puzzelpagina</Link>
        <Link href="/wedstrijd" className="nox-link" onClick={() => setOpen(false)}>Wedstrijd</Link>
      </div>
    </header>
  );
}
