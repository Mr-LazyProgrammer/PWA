const cacheName = 'v1::static';

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/PWA/',
        '/PWA/index.html',
        '/PWA/style.css',
        '/PWA/assets/aditi.webp',
        '/PWA/assets/allipsa.webp',
        '/PWA/assets/ansu.webp',
        '/PWA/assets/arvind.webp',
        '/PWA/assets/kuldeep.webp',
        '/PWA/assets/lalit.webp',
        '/PWA/assets/logo.webp',
        '/PWA/assets/phone11.webp',
        '/PWA/assets/phone12.webp',
        '/PWA/assets/smruti.webp',
        '/PWA/assets/topButton.webp',
        '/PWA/icons1/android-chrome-192x192.png',
        '/PWA/icons1/android-chrome-512x512.png',
        '/PWA/icons1/mstile-150x150.png',
        '/PWA/icons1/apple-touch-icon.png',
        '/PWA/icons1/favicon-16x16.png',
        '/PWA/icons1/favicon-32x32.png',
        '/PWA/icons1/safari-pinned-tab.svg'
      ]).then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
  event.respondWith(
    // ensure we check the *right* cache to match against
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(res => {
        return res || fetch(event.request)
      });
    })
  );
});