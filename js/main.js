"use strict";

//------------------------------------------------------------------------------ Control del Menu ------------------------------------------------------------------------------
const classMenu = ["click-home","click-sobre-mi","click-experiencias","click-portafolio","click-email"]; // Nombre de las clases

//Con esta funcion tomamos donde estan ubicados cada elemento que deseemos
function getTop(element) {
    var _x = 0;
    var _y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
        _x += element.offsetLeft - element.scrollLeft;
        _y += element.offsetTop - element.scrollTop;
        element = element.offsetParent;
    }
    return {top: _y, left: _x};
}

//Con esta funcion controlamos los botones del menu
const menu = (responsive)=>{
    for (let x = 0; x < classMenu.length; x++) { //Activamos un bucle que lee todas las clases

        document.getElementById(classMenu[x]).addEventListener("click", ()=>{
            eliminarClases(); //Llamamos eliminar clases para dejar limpios los elementos


            if(responsive == 1){//responsive == 1 : Esta configuracion le pertenece a computadoras
                if(classMenu[x] == "click-home") window.scroll({top: 0, left: 0, behavior: "smooth"})
                else if(classMenu[x] == "click-sobre-mi") window.scroll({top: getTop(document.getElementById('Ubicacion-SMP')).top - 180, left: 0, behavior: "smooth"});
                else if(classMenu[x] == "click-experiencias") window.scroll({top: getTop(document.getElementById('Ubicacion-EXP')).top - 40, left: 0, behavior: "smooth"});
                else if(classMenu[x] == "click-portafolio") window.scroll({top: getTop(document.getElementById('Ubicacion-POR')).top - 40, left: 0, behavior: "smooth"});
                else window.scroll({top: getTop(document.getElementById('Ubicacion-CT')).top - 40, left: 0, behavior: "smooth"});

            }else if(responsive == 2){//responsive == 2 : Esta configuracion le pertenece a tablets
                if(classMenu[x] == "click-home") window.scroll({top: 0, left: 0, behavior: "smooth"})
                else if(classMenu[x] == "click-sobre-mi") window.scroll({top: getTop(document.getElementById('Ubicacion-SMP')).top - 40, left: 0, behavior: "smooth"});
                else if(classMenu[x] == "click-experiencias") window.scroll({top: getTop(document.getElementById('Ubicacion-EXP')).top - 40, left: 0, behavior: "smooth"});
                else if(classMenu[x] == "click-portafolio") window.scroll({top: getTop(document.getElementById('Ubicacion-POR')).top - 40, left: 0, behavior: "smooth"});
                else window.scroll({top: getTop(document.getElementById('Ubicacion-CT')).top - 40, left: 0, behavior: "smooth"});

            }else{//responsive == 1 : Esta configuracion le pertenece a Mobiles
                if(classMenu[x] == "click-home") window.scroll({top: 0, left: 0, behavior: "smooth"})
                else if(classMenu[x] == "click-sobre-mi") window.scroll({top: getTop(document.getElementById('Ubicacion-SMP')).top - 40, left: 0, behavior: "smooth"});
                else if(classMenu[x] == "click-experiencias") window.scroll({top: getTop(document.getElementById('Ubicacion-EXP')).top - 40, left: 0, behavior: "smooth"});
                else if(classMenu[x] == "click-portafolio") window.scroll({top: getTop(document.getElementById('Ubicacion-POR')).top - 40, left: 0, behavior: "smooth"});
                else window.scroll({top: getTop(document.getElementById('Ubicacion-CT')).top - 40, left: 0, behavior: "smooth"});
            }

            agregarClases(classMenu[x])
        })
    }
}

//Activamos el elemento clickeado agregando las clases con un tiempo de espera de 0 segundo, ya que tiene un bug con el css, esto para que la animacion funcione
const agregarClases = (element)=>{
    document.getElementById(element).classList.add("activate-li");
    document.getElementById(element).firstChild.classList.add("activate-i");
    document.getElementById(element).lastChild.classList.add("activate-a");
    
}

//Con esta funcion eliminamos las clases de los botones del menu
const eliminarClases = ()=>{
    for (let x = 0; x < classMenu.length; x++) {
        document.getElementById(classMenu[x]).classList.remove("activate-li");
        document.getElementById(classMenu[x]).firstChild.classList.remove("activate-i");
        document.getElementById(classMenu[x]).lastChild.classList.remove("activate-a");
    }
} 

//Con esta condicional comprobamos en que tipo de dispositivo estan viendo la pagina 
if(screen.width >=1000){
    menu(1)
}else if(screen.width >= 600){
    menu(2)
}else{
    menu(3)
}

//Tomar la posicion en pantalla para agregar o eliminar clases
window.addEventListener("scroll", ()=>{
    if(window.scrollY < getTop(document.getElementById('Ubicacion-SMP')).top - 180){
        eliminarClases();
        agregarClases('click-home');

    }else if(window.scrollY >= getTop(document.getElementById('Ubicacion-SMP')).top - 180 && window.scrollY < getTop(document.getElementById('Ubicacion-EXP')).top - 100){
        eliminarClases();
        agregarClases('click-sobre-mi');

    }else if(window.scrollY >= getTop(document.getElementById('Ubicacion-EXP')).top - 100 && window.scrollY < getTop(document.getElementById('Ubicacion-POR')).top - 250){
        eliminarClases();
        agregarClases('click-experiencias');

    }else if(window.scrollY >= getTop(document.getElementById('Ubicacion-POR')).top - 250 && window.scrollY < getTop(document.getElementById('Ubicacion-CT')).top - 150){
        eliminarClases();
        agregarClases('click-portafolio');

    }else{
        eliminarClases();
        agregarClases('click-email');
    }
});

//------------------------------------------------------------------------------ Control del Formulario ------------------------------------------------------------------------------
const $form = document.getElementById("form"); //Lamamos al form

//Esta funcion asincrona manda el mensaje a la API que estamos usando para comunicarnos
const handleSubmit = async (event)=>{
    event.preventDefault();//elimina la pantalla de carga de la pagina cuando se envie el formulario

    const form = new FormData(event.target); //Obtenemos los datos del formulario

    //Se envia todos los datos del formulario
    const response = await fetch(event.target.action, {
        method : $form.method,
        body : form,
        headers : {
            'Accept': 'application/json'
        }
    });

    //Si todo esta correcto, se activa esta condicional
    if(response.ok){
        $form.reset();
        window.location.href = "gracias.html";
    }
}

//Activamos un escucha del formulario
$form.addEventListener("submit", handleSubmit);

//------------------------------------------------------------------------------ Control del Cache ------------------------------------------------------------------------------
caches.open("File-Statics").then(cache=>{
    cache.addAll(["./index.html", "./gracias.html", "./css/style.css", "./img/present.png", "./img/aciz.png", "./img/cv.png",
    "./img/gato.png", "./img/io2.png", "./js/main.js", "./js/efectoLuz.js"]);
})