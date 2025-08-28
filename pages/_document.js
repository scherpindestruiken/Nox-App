import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0b0c0f" />
          {/* Direct minimale styling zodat iOS uit splashscreen komt */}
          <style>{`html,body,#__next{height:100%}body{background:#0b0c0f;color:#e8e8ea;margin:0}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
