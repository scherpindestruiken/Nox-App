import "../styles/globals.css";
import Link from "next/link";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link">
          <span className="brand-title">Scherp in de Struiken</span>
        </Link>
        <nav className="top-nav">
          <Link href="/start" className="top-link">Start</Link>
          <Link href="/blog" className="top-link">Blog</Link>
          <Link href="/fotopagina" className="top-link">Foto</Link>
          <Link href="/puzzelpagina" className="top-link">Puzzel</Link>
          <Link href="/wedstrijd" className="top-link">Wedstrijd</Link>
        </nav>
      </div>
    </header>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
