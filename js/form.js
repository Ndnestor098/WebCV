"use strict";
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