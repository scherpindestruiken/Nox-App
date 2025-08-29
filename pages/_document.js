import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        {/* iOS PWA instellingen */}
        <link rel="apple-touch-icon" href="/splash/logo.png" />
        <link rel="icon" href="/splash/NOX_favicon.jpeg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Scherp in de Struiken" />

        {/* iPhone 15 Pro Max (1290x2796px) portrait */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone15-splash.png"
          media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />

        {/* iPhone 15 Pro Max (2796x1290px) landscape */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone15-splash-landscape.png"
          media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />

        {/* Fallback voor andere devices */}
        <link rel="apple-touch-startup-image" href="/splash/home-mobile.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
