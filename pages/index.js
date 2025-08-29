import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [mobileOk, setMobileOk] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    if (!mq.matches) return; // alleen mobiel checken
    // Probeer mobiel bestand met no-store; bij fail -> fallback
    fetch("/splash/home-mobile.png?v=nox-4", { cache: "no-store" })
      .then(r => { if (!r.ok) setMobileOk(false); })
      .catch(() => setMobileOk(false));
  }, []);

  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta name="description" content="NOX — Scherp in de Struiken" />
      </Head>

      <section className="hero" aria-label="Splash">
        {mobileOk ? (
          <picture>
            <source media="(max-width: 767px)" srcSet="/splash/home-mobile.png?v=nox-4" />
            <img
              src="/splash/home-desktop.png?v=nox-4"
              alt="Scherp in de Struiken"
              className="hero-bg"
            />
          </picture>
        ) : (
          <img
            src="/splash/home-desktop.png?v=nox-4"
            alt="Scherp in de Struiken"
            className="hero-bg"
          />
        )}
      </section>

      <main className="container">
        <p className="visually-hidden">Welkom.</p>
      </main>
    </>
  );
}
