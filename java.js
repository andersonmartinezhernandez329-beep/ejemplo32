document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtenemos los campos
        const nombre = formulario.querySelector("input[type='text']").value;
        const correo = formulario.querySelector("input[type='email']").value;

        // Validación simple
        if (nombre === "" || correo === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Simulamos envío exitoso
        console.log("Enviando datos de:", nombre, correo);
        
        // Limpiamos el formulario
        formulario.reset();
        
        // Mensaje de éxito (podrías crear un elemento en el HTML para esto)
        alert("¡Gracias, " + nombre + "! Hemos recibido tu mensaje.");
    });
});