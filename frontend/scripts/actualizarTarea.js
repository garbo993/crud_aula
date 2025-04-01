document.getElementById('UpdateTareaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tareaId = document.getElementById('id').value; // ID de la tarea a actualizar
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const fechaLimite = document.getElementById('fechaLimite').value;
    const prioridad = document.getElementById('prioridad').value;

    if (!tareaId) {
        alert('Por favor, ingresa el ID de la tarea a actualizar.');
        return;
    }

    const formData = {
        titulo: titulo,
        descripcion: descripcion,
        fecha_limite: fechaLimite, // Asegúrate de que coincida con el backend
        prioridad: prioridad
    };

    console.log('Datos enviados:', formData);

    fetch(`http://127.0.0.1:8000/api/Tareas/${tareaId}/`, { // Incluye el ID en la URL
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.status === 200 || response.status === 204) { // Código de éxito para actualización
            alert('Tarea actualizada correctamente.');
            event.target.reset();
        } else if (response.status === 404) {
            alert('Error: No se encontró la tarea con el ID proporcionado.');
        } else {
            alert('Error desconocido al actualizar la tarea.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ha ocurrido un error al intentar actualizar la tarea.');
    });
});