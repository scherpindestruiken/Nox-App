import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Toggle body class: home krijgt splash
  useEffect(() => {
    const isHome = router.pathname === "/";
    document.body.classList.toggle("home-splash", isHome);
    return () => document.body.classList.remove("home-splash");
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, height=device-height, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0f2f24" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/NOX_favicon.jpeg" />
        {/* Preload splash alleen omdat home hem gebruikt */}
        <link rel="preload" as="image" href="/splash/splash-iphone15-v3.png" />
        <link rel="preload" as="image" href="/splash/splash-desktop-1920x1080.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
