#!/usr/bin/env bash
set -e

mkdir -p pages styles

# 1) _app.js (nav label en route aanpassen)
cat > pages/_app.js <<'EOF'
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
EOF

# 2) start.js (tegel label en route aanpassen)
cat > pages/start.js <<'EOF'
import Link from "next/link";

export default function Start() {
  return (
    <main className="page">
      <h1 className="page-title">Kies je pad</h1>
      <p className="page-sub">Maak een keuze. Of staar een minuut naar de tegels, dat mag ook.</p>

      <div className="menu-grid">
        <Link href="/blog" className="menu-card">
          <div className="menu-emoji">📚</div>
          <div className="menu-title">Blog</div>
          <div className="menu-sub">Verhalen, tips, leesvoer</div>
        </Link>

        <Link href="/fotopagina" className="menu-card">
          <div className="menu-emoji">📷</div>
          <div className="menu-title">Fotopagina</div>
          <div className="menu-sub">Galerij, albums, close-ups</div>
        </Link>

        <Link href="/puzzelpagina" className="menu-card">
          <div className="menu-emoji">🧩</div>
          <div className="menu-title">Puzzelpagina</div>
          <div className="menu-sub">Raadsels, spel en breinbrekers</div>
        </Link>

        <Link href="/wedstrijd" className="menu-card">
          <div className="menu-emoji">🏆</div>
          <div className="menu-title">Wedstrijd</div>
          <div className="menu-sub">Inzenden, stemmen, winnen</div>
        </Link>
      </div>
    </main>
  );
}
EOF

# 3) nieuwe pagina: puzelpagina (volledig)
cat > pages/puzzelpagina.js <<'EOF'
export default function Puzzelpagina() {
  return (
    <main className="page">
      <h1>Puzzelpagina</h1>
      <p>Hier komt je verzameling puzzels of speelse content. Minder morsen, meer 🧩.</p>
    </main>
  );
}
EOF

# 4) blog/foto/wedstrijd placeholders opnieuw wegschrijven voor de zekerheid (optioneel)
cat > pages/blog.js <<'EOF'
export default function Blog() {
  return (
    <main className="page">
      <h1>Blog</h1>
      <p>Hier komt je blog. Inspiratie komt meestal net te laat, dus begin gewoon.</p>
    </main>
  );
}
EOF

cat > pages/fotopagina.js <<'EOF'
export default function Fotopagina() {
  return (
    <main className="page">
      <h1>Fotopagina</h1>
      <p>Galerij met je natuurheldendaden. Donker thema-proof.</p>
    </main>
  );
}
EOF

cat > pages/wedstrijd.js <<'EOF'
export default function Wedstrijd() {
  return (
    <main className="page">
      <h1>Wedstrijd</h1>
      <p>Inzenden, stemmen en zonder drama winnen. Dág WhatsApp-jury.</p>
    </main>
  );
}
EOF

# 5) homepage laten we staan, maar reschrijven kan geen kwaad
cat > pages/index.js <<'EOF'
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">Welkom in het struikgewas</h1>
        <p className="hero-sub">Eén knop. Minder gedoe. Daarna kies je je pad.</p>
        <Link href="/start" className="cta">Start het avontuur</Link>
        <p className="hint">Tip: je kunt ook altijd via de bovenbalk naar een pagina.</p>
      </section>
    </main>
  );
}
EOF

# 6) Redirect van /pisselpagina -> /puzzelpagina zodat oude links werken
# Optie A: eenvoudige client redirect pagina (makkelijkst, geen build aanpassingen)
cat > pages/pisselpagina.js <<'EOF'
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectPisselToPuzzel() {
  const router = useRouter();
  useEffect(() => { router.replace("/puzzelpagina"); }, [router]);
  return null;
}
EOF

echo "✅ Alles is omgezet naar 'Puzzelpagina' en redirect staat klaar."
