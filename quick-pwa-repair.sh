#!/usr/bin/env bash
set -e

mkdir -p public

# 1) Manifest: veilige start_url en scope
cat > public/manifest.json <<'EOF'
{
  "name": "Scherp in de Struiken",
  "short_name": "Struiken",
  "start_url": "/?source=pwa",
  "scope": "/",
  "display": "standalone",
  "background_color": "#0b0c0f",
  "theme_color": "#0b0c0f",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
EOF

# 2) next.config.js met next-pwa en network-first voor HTML routes
cat > next.config.js <<'EOF'
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/offline.html'
  },
  runtimeCaching: [
    // HTML en navigaties: altijd eerst netwerk, zodat je nooit vastzit aan een lege cache
    {
      urlPattern: ({ request }) => request.mode === 'navigate',
      handler: 'NetworkFirst',
      options: {
        cacheName: 'html-pages',
        networkTimeoutSeconds: 5,
        expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 }
      }
    },
    // Statische assets: cache first
    {
      urlPattern: ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'static-resources' }
    },
    {
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'images', expiration: { maxEntries: 200 } }
    }
  ]
});
const nextConfig = {
  reactStrictMode: true,
  // kleine cache-buster zodat iOS sneller ververst
  env: { APP_BUILD_ID: Date.now().toString() }
};
module.exports = withPWA(nextConfig);
EOF

# 3) Offline fallback
cat > public/offline.html <<'EOF'
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Offline</title>
    <style>
      html,body{height:100%;margin:0;background:#0b0c0f;color:#e8e8ea;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial}
      .wrap{min-height:100%;display:grid;place-items:center;padding:24px}
      .card{border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:18px 16px;max-width:520px;background:rgba(255,255,255,0.03)}
      a{color:#b7ff64}
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="card">
        <h1>Offline</h1>
        <p>Geen verbinding. Probeer opnieuw als je weer bereik hebt.</p>
        <p><a href="/">Terug naar start</a></p>
      </div>
    </div>
  </body>
</html>
EOF

# 4) _document.js: supersnelle eerste paint, zodat iOS van het splashscreen afkomt
mkdir -p pages
cat > pages/_document.js <<'EOF'
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0b0c0f" />
          <!-- Zorg dat er direct een achtergrond en min-hoogte is vóór hydration -->
          <style>{`html,body,#__next{height:100%}body{background:#0b0c0f;color:#e8e8ea;margin:0}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
EOF

# 5) _app.js: luister naar SW updates en forceer refresh bij nieuwe versie
#   (Laat jouw bestaande _app.js met Header staan; voeg SW-listener toe)
# Probeersgewijs patchen: als _app.js bestaat, we injecteren een eenvoudige effect-hook.
if [ -f "pages/_app.js" ]; then
  if ! grep -q "navigator.serviceWorker" pages/_app.js; then
    # Voeg import toe indien nodig
    if ! grep -q "useEffect" pages/_app.js; then
      sed -i.bak '1s/^/import { useEffect } from "react";\n/' pages/_app.js || true
    fi
    cat >> pages/_app.js <<'EOF'

// -- SW update listener: refresh bij nieuwe worker --
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // nieuwe SW heeft controle, herlaad om oude cache los te laten
    window.location.reload();
  });
}
EOF
  fi
fi

echo "✅ PWA-bestanden geschreven."
