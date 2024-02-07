self.addEventListener("install", (e)=>{
    const cacheStatic = caches.open("static-v4").then(cache=>{
        return cache.addAll([
            "./index.html", "./gracias.html", "./css/style.css", 
            "./img/aciz.png", "./img/cv.png",
            "./img/gato.png", "./img/io2.png", "./js/main.js", 
            "./js/efectoLuz.js",
            
        ]);
    });

    e.waitUntil(Promise.all([cacheStatic]));
});
//"./img/present.png","/img/favicon.ico",

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
