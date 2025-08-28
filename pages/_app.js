import Head from "next/head";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  // iOS PWA pakt vaak alleen body background. Zet class op body voor home.
  useEffect(() => {
    if (isHome) {
      document.body.classList.add("home-body");
    } else {
      document.body.classList.remove("home-body");
    }
    // opruimen bij unmount of routewissel
    return () => document.body.classList.remove("home-body");
  }, [isHome]);

  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, height=device-height, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0b2d26" />
        <link rel="manifest" href="/manifest.json?v=3" />
        <link rel="icon" href="/favicon.png?v=3" />
        <link rel="apple-touch-icon" href="/icon-192.png?v=3" />
      </Head>

      <NavBar />

      {/* Laat main zelf transparant blijven; body verzorgt de achtergrond op home */}
      <main className={`nox-page ${isHome ? "page-home" : "page-default"}`}>
        <Component {...pageProps} />
      </main>

      <footer className="nox-build">
        Build: {process.env.NEXT_PUBLIC_BUILD_TIME || "dev"}
      </footer>
    </>
  );
}
