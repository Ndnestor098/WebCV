"use strict";
const certificatesUrl = '/WebCV/assets/js/json/data.json';

fetch(certificatesUrl)
    .then(response => response.json())
    .then(data => {
        const certificados = data.certificados;
        const galeria = document.getElementById('certificados');

        certificados.forEach(certificado => {
            // Crear el div contenedor del portafolio
            const contentPortafolio = document.createElement('div');
            contentPortafolio.classList.add('content-certificado');

            // Crear el div de la imagen
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img');
            imgDiv.style.backgroundImage = `url('${certificado.imagen}')`;

            // Crear el párrafo del título
            const title = document.createElement('p');
            title.classList.add('title-certificado');
            title.textContent = certificado.titulo;

            // Crear el contenedor del botón
            const contentButton = document.createElement('div');
            contentButton.classList.add('content-button-certificado');

            // Crear el enlace
            const enlace = document.createElement('a');
            enlace.href = certificado.enlace;
            enlace.target = '_blank';
            enlace.classList.add('link-github');
            let langValue = document.documentElement.lang;
            enlace.textContent = certificado.buttom[langValue];

            // Añadir el enlace al contenedor del botón
            contentButton.appendChild(enlace);

            // Añadir todos los elementos al div del portafolio
            contentPortafolio.appendChild(imgDiv);
            contentPortafolio.appendChild(title);
            contentPortafolio.appendChild(contentButton);

            // Añadir el portafolio a la galería
            galeria.appendChild(contentPortafolio);
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
