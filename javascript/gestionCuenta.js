document.querySelector('.buttonb-primary').addEventListener('click', function () {
    const spans = document.querySelectorAll('.personal-data .data-item span');
    const button = this;

    // Verificar si el botón está en modo "Editar" o "Guardar Cambios"
    if (button.textContent.trim() === 'editar') {
        spans.forEach((span) => {
            // Crear un input con el valor actual del span
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent.trim();

            // Reemplazar el span por el input
            span.parentElement.replaceChild(input, span);
        });
        button.textContent = 'Guardar Cambios'; // Cambiar el texto del botón
    } else {
        // Guardar los datos
        const inputs = document.querySelectorAll('.personal-data .data-item input');
        inputs.forEach((input) => {
            const span = document.createElement('span');
            span.textContent = input.value.trim(); // Actualizar el contenido del span
            input.parentElement.replaceChild(span, input);
        });
        button.textContent = 'editar'; // Cambiar el texto del botón

        // Mostrar notificación de éxito
        showToast('Datos guardados correctamente');
    }
});

// Función para mostrar el toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('p').textContent = message; // Actualizar el mensaje
    toast.classList.add('show'); // Mostrar el toast

    // Ocultar el toast después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}




