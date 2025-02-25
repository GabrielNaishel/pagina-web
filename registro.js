document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registros").addEventListener("submit", function(event) {
        event.preventDefault();
        //obtener lo valores de los usuarios, "trim elemina los espacios en blanco"//
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let edad = parseInt(document.getElementById("edad").value.trim()); //"parseInt" la edad ingresada en numeros enteros//
        let password = document.getElementById("contraseña").value.trim();
        
        if (!nombre || !apellido || !correo || isNaN(edad) || !password) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //recupera la lista de usuarios guardada en el almacenamiento del navegador//
        //al final si no hay usuario registrado, se asigna un array vacio//
        if (edad < 18) {// valida si el usuario es mayor de edad
            alert("Debes ser mayor de edad para registrarte.");
            return;
        }
        
        let correoExiste = usuarios.some(usuario => usuario.correo === correo); //verifica si el correo ya estaba registrado o no
        if (correoExiste) {
            alert("El correo ya está registrado.");
            return;
        }
        
        usuarios.push({ nombre, apellido, correo, edad, password });
        localStorage.setItem("usuarios", JSON.stringify(usuarios)); //! Es una API( Interfaz de Programacion de 
        // Aplicaciones, esta API permite almacenar datos en el navegador del usuario)
        alert("Registro exitoso");
        document.getElementById("registros").reset();
    });
});