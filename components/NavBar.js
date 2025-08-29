/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  return (
    <header className="nox-nav" role="banner">
      <Link href="/" className="nox-brand" aria-label="Home">
        <img src="/splash/logo.png" alt="NOX" />
        <span className="nox-title">Scherp in de Struiken</span>
      </Link>

      <nav className="nox-menu" aria-label="Hoofdmenu">
        <Link href="/" aria-current={isActive("/") ? "page" : undefined}>Home</Link>
        <Link href="/blog" aria-current={isActive("/blog") ? "page" : undefined}>Blog</Link>
        <Link href="/fotopagina" aria-current={isActive("/fotopagina") ? "page" : undefined}>Foto's</Link>
        <Link href="/puzzelpagina" aria-current={isActive("/puzzelpagina") ? "page" : undefined}>Puzzel</Link>
        <Link href="/wedstrijd" aria-current={isActive("/wedstrijd") ? "page" : undefined}>Wedstrijd</Link>
      </nav>
    </header>
  );
}
