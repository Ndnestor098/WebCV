"use strict";
const STATIC_CACHE = "cache";
const APP_SHELL =[
    '/WebCV/',
    '/WebCV/index.html',
    '/WebCV/es/index.html',
    '/WebCV/es/cv-es.pdf',
    '/WebCV/it/index.html',
    '/WebCV/it/cv-it.pdf',
    '/WebCV/en/index.html',
    '/WebCV/en/cv-en.pdf',
    '/WebCV/gracias.html',
    '/WebCV/assets/js/ajax.js',
    '/WebCV/assets/js/efectoLuz.js',
    '/WebCV/assets/js/main.js',
    '/WebCV/assets/css/style.css',
    '/WebCV/assets/img/aciz.png',
    '/WebCV/assets/img/cv.png',
    '/WebCV/assets/img/gato.png',
    '/WebCV/assets/img/io2.png',
    '/WebCV/assets/img/translog.png',
    '/WebCV/assets/img/scarpetoss.png',
    '/WebCV/assets/img/eduplus.png',
    '/WebCV/assets/img/present.png',
    '/WebCV/assets/img/favicon/favicon.ico',
    '/WebCV/assets/img/favicon/apple-touch-icon.png',
    '/WebCV/assets/img/favicon/android-chrome-512x512.png',
] 

self.addEventListener("install", function (e){
    const cacheStatic = caches.open(STATIC_CACHE).then(cache => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
})

self.addEventListener("activate", function (e){
    self.clients.claim();
})

self.addEventListener("fetch", function (e){
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
})