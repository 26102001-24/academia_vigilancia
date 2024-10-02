const bar = document.querySelector(".fa-bars"); 
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const comentario = document.getElementById('comentario').value.trim();

        // Validación simple de los campos
        if (!nombre || !correo || !telefono) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        // Crear un objeto con los datos a enviar
        const data = {
            nombre: nombre,
            correo: correo,
            telefono: telefono,
            comentario: comentario
        };

        // Enviar los datos al servidor usando Fetch API
        fetch('http://localhost:3000/api/registrar', {  // Reemplaza con tu ruta backend si es diferente
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message); // Mostrar mensaje del servidor (éxito o error)
            } else {
                alert('Registro exitoso.');
            }
            form.reset(); // Limpiar el formulario tras el éxito
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al registrar el usuario.');
        });
    });
});

