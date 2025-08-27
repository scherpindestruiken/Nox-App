import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl">
     <Head>
     <meta name="theme-color" content="#000000" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="manifest" href="/manifest.json" />
     <link rel="apple-touch-icon" href="/icon-192.png" />

  {/* iPhone 15 splash only */}
  <link
    rel="apple-touch-startup-image"
    href="/splash/splash-iphone15-optimized.png"
    media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)"
  />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}