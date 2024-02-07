const CACHE_STATIC_NAME = "static-v2";

self.addEventListener("install", (e)=>{
    const cacheStatic = caches.open(CACHE_STATIC_NAME).then(cache=>{
        return cache.addAll(["./index.html", "./gracias.html", "./css/style.css", "./img/present.png", "./img/aciz.png", "./img/cv.png",
            "./img/gato.png", "./img/io2.png", "./js/main.js", "./js/efectoLuz.js","/img/favicon.ico",
            
        ]);
    });

    e.waitUntil(Promise.all([cacheStatic]));
});


self.addEventListener("fetch", async e=>{
    if(!navigator.onLine){
        e.respondWith(handleRequest(e.request))
    }

})

async function handleRequest(request) {
    const response = await caches.match(request);

    if(response) return response;
    else return request;
}
