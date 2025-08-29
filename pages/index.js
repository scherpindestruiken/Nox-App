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
          {/* Mobiel: eigen afbeelding */}
          <source media="(max-width: 767px)" srcSet="/images/NOX_home.png" />
          {/* Desktop fallback */}
          <img
            src="/images/NOX_home_desktop.png"
            alt="Scherp in de Struiken"
            className="hero-bg"
          />
        </picture>
        {/* Als je per se een HTML titel wilt op desktop, zet deze aan: */}
        {/* <h1 className="hero-title desktop-only">Scherp in de Struiken</h1> */}
      </section>

      {/* Content onder splash; spacer voorkomt overlap met fixed nav op kleine schermen */}
      <main className="container">
        <p>Welkom. Als je dit leest is het tenminste niet meer zwart.</p>
      </main>
    </>
  );
}