"use strict";
const STATIC_CACHE = "cache-v2";
const APP_SHELL =[
    '/WebCV/',
    '/WebCV/index.html',
    '/WebCV/es/index.html',
    '/WebCV/it/index.html',
    '/WebCV/assets/pdf/cv-es.pdf',
    '/WebCV/assets/pdf/cv-it.pdf',
    '/WebCV/assets/pdf/cv-en.pdf',
    '/WebCV/gracias.html',
    '/WebCV/assets/js/json/data.json',
    '/WebCV/assets/js/addCertificate.js',
    '/WebCV/assets/js/addProjects.js',
    '/WebCV/assets/js/efectoLuz.js',
    '/WebCV/assets/js/main.js',
    '/WebCV/assets/css/style.css',
    '/WebCV/assets/img/aciz.webp',
    '/WebCV/assets/img/cv.webp',
    '/WebCV/assets/img/gato.webp',
    '/WebCV/assets/img/io2.webp',
    '/WebCV/assets/img/translog.webp',
    '/WebCV/assets/img/scarpetoss.webp',
    '/WebCV/assets/img/eduplus.webp',
    '/WebCV/assets/img/present.webp',
    '/WebCV/assets/img/Atlassian_GIT.webp',
    '/WebCV/assets/img/google_technical_support.webp',
    '/WebCV/assets/img/IBM_SQL.webp',
    '/WebCV/assets/img/Meta_API.webp',
    '/WebCV/assets/img/Meta_Front_End.webp',
    '/WebCV/assets/img/Meta_React_Advanced.webp',
    '/WebCV/assets/img/Michigan_PHP.webp',
    '/WebCV/assets/img/Meta_React_Basic.webp',
    '/WebCV/assets/img/favicon/favicon.ico',
    '/WebCV/assets/img/favicon/apple-touch-icon.webp',
    '/WebCV/assets/img/favicon/android-chrome-512x512.webp',
    '/WebCV/assets/img/svg/check.svg',
    '/WebCV/assets/img/svg/config.svg',
    '/WebCV/assets/img/svg/certificate.svg',
    '/WebCV/assets/img/svg/email-white.svg',
    '/WebCV/assets/img/svg/email.svg',
    '/WebCV/assets/img/svg/facebook.svg',
    '/WebCV/assets/img/svg/github.svg',
    '/WebCV/assets/img/svg/home.svg',
    '/WebCV/assets/img/svg/insta-white.svg',
    '/WebCV/assets/img/svg/insta.svg',
    '/WebCV/assets/img/svg/lenguague.svg',
    '/WebCV/assets/img/svg/linkedin.svg',
    '/WebCV/assets/img/svg/user.svg',
    '/WebCV/assets/img/svg/whatsapp.svg',
    '/WebCV/assets/img/svg/work.svg',
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