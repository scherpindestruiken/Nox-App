// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content="#0f0f0f" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon */}
        <link rel="icon" href="/icons/NOX_achterboom.png" type="image/png" />

        {/* Apple-specific tags */}
        <link rel="apple-touch-icon" href="/icons/NOX_camera.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nox" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}