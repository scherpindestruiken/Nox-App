/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  fallbacks: { document: '/offline.html' },
  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.mode === 'navigate',
      handler: 'NetworkFirst',
      options: {
        cacheName: 'html-pages',
        networkTimeoutSeconds: 5,
        expiration: { maxEntries: 50, maxAgeSeconds: 86400 }
      }
    },
    {
      urlPattern: ({ request }) => ['style','script','worker'].includes(request.destination),
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
  eslint: { ignoreDuringBuilds: true },

  // ✅ Redirect: oude link blijft werken
  async redirects() {
    return [
      { source: '/pisselpagina', destination: '/puzzelpagina', permanent: true }
    ];
  }
};

module.exports = withPWA(nextConfig);
