document.addEventListener("DOMContentLoaded", function() { //!Es un evento que se activa cuando el navegador carga y analiza el documento html
    document.getElementById("login").addEventListener("submit", function(event) {
        event.preventDefault();

        let correo = document.getElementById("correo").value.trim();
        let password = document.getElementById("contraseña").value.trim();

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo && usuario.password === password);

        if (usuarioEncontrado) {
            alert("Inicio de sesión exitoso");
            localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado)); // Guarda la sesión
            window.location.href = "pagina principal.html"; // Redirige a la página de bienvenida o perfil
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
});