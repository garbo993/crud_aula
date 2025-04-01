async function eliminarTarea() {
    const TareaId = document.getElementById("tareaId").value.trim();
    const message = document.getElementById("message");

    if (!TareaId) {
        message.textContent = "Por favor, ingresa un ID de tarea válido.";
        return;
    }
    message.textContent = "Eliminando tarea...";
    message.style.color = "blue";

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/Tareas/${TareaId}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            message.textContent = "Tarea eliminada con éxito.";
            message.style.color = "green";
        } else {
            message.textContent = "Error al eliminar la tarea. Verifica el ID.";
            message.style.color = "red";
        }
    
    
} catch (error) {
        alert('Ha ocurrido un error', error);
        message.textContent = "Error de red. Intenta nuevamente más tarde.";
    }
}