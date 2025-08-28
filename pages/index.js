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
