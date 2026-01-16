const CACHE_NAME = 'c5x-dca-v19-cache';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=Roboto:wght@400;700;900&family=Roboto+Mono:wght@700;900&display=swap'
];

// Instalación y guardado en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Estrategia: Primero buscar en Red, si falla, usar Caché
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
