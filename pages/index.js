import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta name="description" content="NOX — Scherp in de Struiken" />
      </Head>

      {/* Spacer zodat content niet onder de overlay-nav verdwijnt */}
      <div style={{ height: "82vh" }} aria-hidden="true" />

      <main className="container">
        <p>
          Welkom in het bos. Content komt hier. De splash staat als
          body-achtergrond, de NavBar ligt er transparant overheen. Geen dubbele
          titels, geen rare randen.
        </p>
      </main>
    </>
  );
}