"use strict";
const projectsUrl = '/WebCV/assets/js/json/data.json';

fetch(projectsUrl)
    .then(response => response.json())
    .then(data => {
        const proyectos = data.projects;
        const galeria = document.getElementById('projects'); // Cambia el ID a tu contenedor en el HTML

        proyectos.forEach(proyecto => {
            // Crear el div contenedor del portafolio
            const contentPortafolio = document.createElement('div');
            contentPortafolio.classList.add('content-portafolio');

            // Crear el div de la imagen
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img');
            imgDiv.style.backgroundImage = `url('${proyecto.imageUrl}')`;

            // Crear el párrafo del título
            const title = document.createElement('p');
            title.classList.add('title-portafolios');
            let langValue = document.documentElement.lang;
            title.textContent = proyecto.title[langValue];

            // Crear el contenedor del botón
            const contentButton = document.createElement('div');
            contentButton.classList.add('content-button-portafolio');

            // Crear el enlace
            const enlace = document.createElement('a');
            enlace.href = proyecto.githubLink;
            enlace.target = '_blank';
            enlace.classList.add('link-github');
            enlace.textContent = 'Github';

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
