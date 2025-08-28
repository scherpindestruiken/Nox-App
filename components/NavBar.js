import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function NavBar(){
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Sluit menu bij routewissel
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="nox-nav" role="banner">
      <div className="nox-nav-inner">
        <Link href="/" className="nox-brand" aria-label="Home">
          <img
            src="/icon-192.png"
            alt="NOX logo"
            width="36"
            height="36"
            className="nox-logo"
            loading="eager"
            decoding="async"
          />
          <span className="nox-title">Scherp in de Struiken</span>
        </Link>

        {/* Desktop links */}
        <nav className="nox-links" aria-label="Hoofdmenu">
          <Link href="/start" className={router.pathname==="/start" ? "active" : ""}>Start</Link>
          <Link href="/blog" className={router.pathname==="/blog" ? "active" : ""}>Blog</Link>
          <Link href="/fotopagina" className={router.pathname==="/fotopagina" ? "active" : ""}>Foto</Link>
          <Link href="/puzzelpagina" className={router.pathname==="/puzzelpagina" ? "active" : ""}>Puzzel</Link>
          <Link href="/wedstrijd" className={router.pathname==="/wedstrijd" ? "active" : ""}>Wedstrijd</Link>
        </nav>

        {/* Hamburger knop (alleen mobiel zichtbaar via CSS) */}
        <button
          className="nox-burger"
          aria-label="Open navigatie"
          aria-controls="mobile-menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(v => !v)}
        >
          <span className="nox-burger-bar" />
          <span className="nox-burger-bar" />
          <span className="nox-burger-bar" />
        </button>
      </div>

      {/* Mobiele overlay */}
      <nav
        id="mobile-menu"
        className={`nox-mobile ${open ? "open" : ""}`}
        aria-label="Mobiele navigatie"
      >
        <Link href="/start" className={router.pathname==="/start" ? "active" : ""}>Start</Link>
        <Link href="/blog" className={router.pathname==="/blog" ? "active" : ""}>Blog</Link>
        <Link href="/fotopagina" className={router.pathname==="/fotopagina" ? "active" : ""}>Foto</Link>
        <Link href="/puzzelpagina" className={router.pathname==="/puzzelpagina" ? "active" : ""}>Puzzel</Link>
        <Link href="/wedstrijd" className={router.pathname==="/wedstrijd" ? "active" : ""}>Wedstrijd</Link>
      </nav>
    </header>
  );
}
