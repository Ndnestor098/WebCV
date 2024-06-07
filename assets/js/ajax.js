"use strict";
const formularios = document.querySelector(".CONTACTO");

formularios.addEventListener("submit", (e)=>{
    e.preventDefault();

    var response = grecaptcha.getResponse();
    
    if(response.length == 0){
        document.querySelector(".error").innerHTML = 'El reCAPTCHA es obligatorio.';
    } else {
        let data = new FormData(formularios);
        let method = formularios.getAttribute("method");
        let action = formularios.getAttribute("action");

        let encabezado = new Headers();

        let config = { 
            method:method,
            header:{
                'accept': 'application/json'
            },
            mode:"cors",
            cache:'no-cache',
            body:data,
        }
        document.querySelector(".error").innerHTML = "Github Pages, no acepta PHP. Contacte por los medios dados.";
        
        // fetch(action, config)
        //     .then(res => res.text())
        //     .then(res => {

        //         if(res.search('./') == 0){
        //             window.location = res;
        //         }else{
        //             document.querySelector(".error").innerHTML = res;
        //         }
        //     });
    }
    
    

})


