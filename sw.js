self.addEventListener("install", (e)=>{
    const cacheStatic = caches.open("static-v4").then(cache=>{
        return cache.addAll([
            "./index.html", "./gracias.html", "./css/style.css", 
            "./img/aciz.png", "./img/cv.png", "./js/main.js", 
            "./img/gato.png", "./img/io2.png", "/img/favicon.ico",
            "./js/efectoLuz.js", "./img/present.png",
        ]);
    });

    e.waitUntil(Promise.all([cacheStatic]));
});
// En construccion

// self.addEventListener("fetch", async e=>{
//     if(!navigator.onLine){
//         e.respondWith(handleRequest(e.request))
//     }

// })

// async function handleRequest(request) {
//     const response = await caches.match(request);

//     if(response) return response;
//     else return request;
// }
