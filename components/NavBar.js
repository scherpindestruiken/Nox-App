import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nox-nav" role="banner" aria-label="Hoofdnavigatie">
      <div className="nox-nav-inner">
        <Link href="/" className="nox-brand" aria-label="Home">
          <Image
            src="/splash/logo.png"
            alt="NOX"
            width={40}
            height={40}
            priority
            className="nox-logo"
          />
          <span className="nox-title">Scherp in de Struiken</span>
        </Link>

        <nav className="nox-menu" aria-label="Hoofdmenu">
          <Link href="/"             className="nox-link">Home</Link>
          <Link href="/blog"         className="nox-link">Blog</Link>
          <Link href="/fotopagina"   className="nox-link">Foto&apos;s</Link>
          <Link href="/puzzelpagina" className="nox-link">Puzzel</Link>
          <Link href="/wedstrijd"    className="nox-link">Wedstrijd</Link>
        </nav>

        <button type="button" className="nox-burger" onClick={() => setOpen(v => !v)} aria-label="Menu" aria-expanded={open}>
          <span className="nox-burger-bar" />
          <span className="nox-burger-bar" />
          <span className="nox-burger-bar" />
        </button>
      </div>

      <div className={`nox-mobile ${open ? "open" : ""}`}>
        <Link href="/"             className="nox-mobile-link" onClick={()=>setOpen(false)}>Home</Link>
        <Link href="/blog"         className="nox-mobile-link" onClick={()=>setOpen(false)}>Blog</Link>
        <Link href="/fotopagina"   className="nox-mobile-link" onClick={()=>setOpen(false)}>Foto&apos;s</Link>
        <Link href="/puzzelpagina" className="nox-mobile-link" onClick={()=>setOpen(false)}>Puzzel</Link>
        <Link href="/wedstrijd"    className="nox-mobile-link" onClick={()=>setOpen(false)}>Wedstrijd</Link>
      </div>
    </header>
  );
}
