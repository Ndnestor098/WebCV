"use strict";
const STATIC_CACHE = "cache";
const APP_SHELL =[
    './',
    './index.html',
    './es/index.html',
    './es/cv-es.pdf',
    './it/index.html',
    './it/cv-it.pdf',
    './en/index.html',
    './en/cv-en.pdf',
    './gracias.html',
    './assets/js/ajax.js',
    './assets/js/efectoLuz.js',
    './assets/js/main.js',
    './assets/css/style.css',
    './assets/img/aciz.png',
    './assets/img/cv.png',
    './assets/img/gato.png',
    './assets/img/io2.png',
    './assets/img/translog.png',
    './assets/img/scarpetoss.png',
    './assets/img/eduplus.png',
    './assets/img/present.png',
    './assets/img/favicon/favicon.ico',
    './assets/img/favicon/apple-touch-icon.png',
    './assets/img/favicon/android-chrome-512x512.png',
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