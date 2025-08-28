import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, height=device-height, viewport-fit=cover" />
        <meta name="theme-color" content="#0f2f24" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/NOX_favicon.jpeg" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
