import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="hero hero--mag">
        <div className="hero-inner">
          <h1 className="hero-title">Scherp in de Struiken</h1>
          <p className="hero-tagline">Waar bladeren ritselen en sarcasme groeit.</p>

          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">Blog lezen</Link>
            <Link href="/fotopagina" className="btn btn-ghost">Foto’s kijken</Link>
          </div>

          <div className="hero-secondary">
            <Link href="/start" className="text-link">of open het startmenu</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
