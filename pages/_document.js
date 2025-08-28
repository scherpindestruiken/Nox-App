// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          {/* iOS fullscreen en veilige randen */}
          <meta name="viewport" content="width=device-width, initial-scale=1, height=device-height, viewport-fit=cover" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          {/* Preload splash images zodat ze meteen beschikbaar zijn */}
          <link rel="preload" as="image" href="/splash/splash-iphone15-v3.jpeg" />
          <link rel="preload" as="image" href="/splash/splash-desktop-1920x1080.png" />

          {/* Apple touch icon (mag je eigen icoon zijn) */}
          <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}