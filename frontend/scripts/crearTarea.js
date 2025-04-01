document.getElementById('crearTareaForm').addEventListener('submit', function(event){
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const fechaLimite = document.getElementById('fechaLimite').value;
    const prioridad = document.getElementById('prioridad').value;

    const formData = {
        titulo: titulo,
        descripcion: descripcion,
        fechaLimite: fechaLimite,
        prioridad: prioridad
    }

    console.log(formData);

    fetch('http://127.0.0.1:8000/api/Tareas/',{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(formData),       
        
    })
    .then(response => {
        if (response.status = 201){
            alert('Tarea creada correctamente');
            event.target.reset();
        }
        else if (response.status = 404){
            alert('Error: no se pudo crear la tarea ')
        }
        else {
            alert('errror desconocido')
        }
    })

    .catch(error => {
        alert('a ocurrido un error',error);
    });
});