const CACHE = 'nuklal-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/favicon.png',
  'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js'
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
