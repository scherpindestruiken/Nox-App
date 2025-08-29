import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        {/* PWA / iOS fullscreen */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Scherp in de Struiken" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />

        {/* iPhone 15 Pro/Max (1290×2796) portrait */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone15-splash.png?v=6"
          media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />

        {/* iPhone 15 Pro/Max (2796×1290) landscape */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone15-splash-landscape.png?v=6"
          media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />

        {/* Fallback mobiel (andere iPhones / Android) */}
        <link rel="apple-touch-startup-image" href="/splash/home-mobile.png?v=6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
