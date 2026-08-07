const CACHE_NAME = 'biketeam-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add paths to your CSS and JS files here
];

// Install the service worker and cache key files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch files from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});