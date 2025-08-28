// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          {/* iOS/Android fullscreen en juiste insets */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, height=device-height, viewport-fit=cover"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          {/* PRELOAD de juiste assets (PNG/PNG). Geen .jpeg hier. */}
          <link rel="preload" as="image" href="/splash/splash-iphone15-v3.png" />
          <link rel="preload" as="image" href="/splash/splash-desktop-1920x1080.png" />

          {/* Optioneel: iOS startup images */}
          <link
            rel="apple-touch-startup-image"
            href="/splash/splash-iphone15-v3.png"
            media="(max-width: 768px)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/splash/splash-desktop-1920x1080.png"
            media="(min-width: 769px)"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}