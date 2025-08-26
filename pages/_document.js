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
<link rel="apple-touch-startup-image" href="/splash/splash-iphonex.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
<link rel="apple-touch-startup-image" href="/splash/splash-iphone12.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" />
<link rel="apple-touch-startup-image" href="/splash/splash-iphone8plus.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" />
<link rel="apple-touch-startup-image" href="/splash/splash-iphone8.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="/splash/splash-iphoneSE.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="/splash/splash-ipad.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="/splash/splash-ipadpro.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="/splash/splash-iphone15.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}