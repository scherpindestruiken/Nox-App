// pages/_app.js
import '@/styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Scherp in de Struiken</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/NOX_favicon.jpeg" />

        {/* Splash screens */}
        <link rel="apple-touch-startup-image" href="/splash/splash-desktop-1920x1080.png" media="(min-width: 1024px)" />
        <link rel="apple-touch-startup-image" href="/splash/splash-iphone15-v3.png" media="(max-width: 768px)" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}