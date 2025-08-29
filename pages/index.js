import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta name="description" content="NOX — Scherp in de Struiken" />
      </Head>

      <section className="hero" aria-label="Splash">
        <picture>
          {/* mobiel eerst */}
          <source media="(max-width: 767px)" srcSet="/images/home-mobile.png?v=nox-2" />
          {/* desktop fallback */}
          <img
            src="/images/home-desktop.png?v=nox-2"
            alt="Scherp in de Struiken"
            className="hero-bg"
          />
        </picture>
      </section>

      <main className="container">
        <p className="visually-hidden">Welkom in het bos.</p>
      </main>
    </>
  );
}
