// Suponiendo que el JSON está almacenado localmente o se obtiene de una URL
const url = '/WebCV/assets/js/json/certicates.json'; // Reemplaza con la ruta correcta

fetch(url)
    .then(response => response.json())
    .then(data => {
        const certificados = data.certificados;
        const galeria = document.getElementById('certificados');

        certificados.forEach(certificado => {
            // Crear el div contenedor del portafolio
            const contentPortafolio = document.createElement('div');
            contentPortafolio.classList.add('content-portafolio');

            // Crear el div de la imagen
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img');
            imgDiv.style.backgroundImage = `url('${certificado.imagen}')`;

            // Crear el párrafo del título
            const title = document.createElement('p');
            title.classList.add('title-portafolios');
            title.textContent = certificado.titulo;

            // Crear el contenedor del botón
            const contentButton = document.createElement('div');
            contentButton.classList.add('content-button-portafolio');

            // Crear el enlace
            const enlace = document.createElement('a');
            enlace.href = certificado.enlace;
            enlace.target = '_blank';
            enlace.classList.add('link-github');
            enlace.textContent = 'Ver mas';

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
