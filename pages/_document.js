// /pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        {/* PWA instellingen */}
        <meta name="theme-color" content="#0e1f18" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />

        {/* App iconen */}
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192-v2.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512-v2.png" />

        {/* Splashscreen iPhone 15 */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/splash-iphone15-v2.jpeg"
          media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)"
        />

        {/* Andere iPhones */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/splash-iphone12.png"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/splash-iphone11.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/splash-iphoneSE.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        />

        {/* iPad 9.7" */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/splash-ipad.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}