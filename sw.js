"use strict";
const STATIC_CACHE = "cache";
const APP_SHELL =[
    '/',
    '/index.html',
    '/gracias.html',
    '/js/ajax.js',
    '/js/efectoLuz.js',
    '/js/main.js',
    '/css/style.css',
    '/img/aciz.png',
    '/img/cv.png',
    '/img/gato.png',
    '/img/io2.png',
    '/img/translog.png',
    '/img/scarpetoss.png',
    '/img/favicon/favicon.ico',
    '/img/favicon/apple-touch-icon.png',
    '/img/favicon/android-chrome-512x512.png',
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