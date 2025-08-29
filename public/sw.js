// Lightweight SW: geen app-cache, alleen snelle activatie en update
const SW_VERSION = 'v2025-08-29-13-22';

self.addEventListener('install', (event) => {
  // direct nieuwe SW activeren
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // direct controle over pagina nemen
  event.waitUntil(clients.claim());
});

// pass-through: laat network gewoon z'n werk doen
self.addEventListener('fetch', () => {});
