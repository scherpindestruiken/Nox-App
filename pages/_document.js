import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Splashscreens */}
        <link rel="apple-touch-startup-image" href="/splash/splash-mobile.png" media="(max-device-width: 768px)" />
        <link rel="apple-touch-startup-image" href="/splash/splash-desktop.png" media="(min-device-width: 769px)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}