const CACHE_NAME = 'edusphere-ibaosy-v2';
const assetsToCache = [
  './index.html',
  './data.js',
  './manifest.json'
];

// Installation du Service Worker et mise en cache des fichiers
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
  self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clientsClaim();
});

// Interception des requêtes pour un fonctionnement hors-ligne
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Fallback optionnel si hors-ligne total et ressource non cachée
        return caches.match('./index.html');
      });
    })
  );
});