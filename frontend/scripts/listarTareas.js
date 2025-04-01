document.addEventListener('DOMContentLoaded', function () {
    const tareasContainer = document.getElementById('tareasContainer'); // Contenedor donde se mostrarán las tareas

    // Realizar la solicitud GET para obtener todas las tareas
    fetch('http://127.0.0.1:8000/api/Tareas/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener las tareas');
            }
            return response.json();
        })
        .then(data => {
            // Limpiar el contenedor antes de agregar las tareas
            tareasContainer.innerHTML = '';

            // Iterar sobre las tareas y mostrarlas en el DOM
            data.forEach(tarea => {
                const row = document.createElement('tr');

                const idcell = document.createElement('td');
                idcell.textContent = tarea.id;

                const titlecell = document.createElement('td');
                titlecell.textContent = tarea.titulo;

                const descriptioncell = document.createElement('td');
                descriptioncell.textContent = tarea.descripcion;

                const fecha_creacioncell = document.createElement('td');
                fecha_creacioncell.textContent = tarea.fecha_creacion;

                const fecha_limitecell = document.createElement('td');
                fecha_limitecell.textContent = tarea.fecha_limite;

                const prioritycell = document.createElement('td');
                prioritycell.textContent = tarea.prioridad;

                row.append(idcell, titlecell, descriptioncell, fecha_creacioncell,fecha_limitecell, prioritycell);
                tareasContainer.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            tareasContainer.innerHTML = '<p>Error al cargar las tareas. Intenta nuevamente más tarde.</p>';
        });
});