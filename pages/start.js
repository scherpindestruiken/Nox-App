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
