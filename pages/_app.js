import Head from "next/head";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, height=device-height, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0b2d26" />
        <link rel="manifest" href="/manifest.json?v=2" />
        <link rel="icon" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/icon-192.png?v=2" />
      </Head>

      <NavBar />

      {/* Home krijgt wasbeer-splash, andere pagina's donkergroen */}
      <main className={`nox-page ${isHome ? "page-home" : "page-default"}`}>
        <Component {...pageProps} />
      </main>

      <footer className="nox-build">
        Build: {process.env.NEXT_PUBLIC_BUILD_TIME || "dev"}
      </footer>
    </>
  );
}
