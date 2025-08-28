import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, height=device-height, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0b2d26" />
      </Head>

      <header className="nox-nav">
        <div className="nox-nav-inner">
          <Link href="/" className="nox-brand" aria-label="Home">
            {/* Wasbeer-icoon als navigatie-logo */}
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

          <nav className="nox-links" aria-label="Hoofdmenu">
            <Link href="/start">Start</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/fotopagina">Foto</Link>
            <Link href="/puzzelpagina">Puzzel</Link>
            <Link href="/wedstrijd">Wedstrijd</Link>
          </nav>
        </div>
      </header>

      <main className="nox-page">
        <Component {...pageProps} />
      </main>

      <footer className="nox-build">
        Build: {process.env.NEXT_PUBLIC_BUILD_TIME || "dev"}
      </footer>
    </>
  );
}
