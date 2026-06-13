const cacheName = 'lotusFrameWork';

self.addEventListener('install', event => {

    event.waitUntil(
        caches.open(cacheName).then(cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/src/core/PWA/manifest.webmanifest',
                '/src/core/PWA/main/PWA.js'
            ]);

        })
    );

    self.skipWaiting();

});

self.addEventListener('activate', event => {

    event.waitUntil(
        self.clients.claim()
    );

});

self.addEventListener('fetch', event => {

    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {

        event.respondWith(cacheFirst(req));

    } else {

        event.respondWith(networkAndCache(req));

    }

});

async function cacheFirst(req) {

    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);

    return cached || fetch(req);

}

async function networkAndCache(req) {

    const cache = await caches.open(cacheName);

    try {

        const refresh = await fetch(req);

        await cache.put(req, refresh.clone());

        return refresh;

    } catch (e) {

        const cached = await cache.match(req);

        return cached;

    }

}