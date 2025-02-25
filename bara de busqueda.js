document.addEventListener("DOMContentLoaded", function () { //!Es un evento que se activa cuando el navegador carga y analiza el documento html
    document.querySelector("form[role='search']").addEventListener("submit", function (event) {
        event.preventDefault();

        let input = document.querySelector("input[type='search']").value.toLowerCase();

        // Diccionario con las rutas de cada página
        let paginas = {
            "notebooks": "Notebooks.html",
            "celulares": "#",
            "heladeras": "#",
            "consolas": "#",
            "televisores": "#"
        };

        if (paginas[input]) {
            window.location.href = paginas[input]; // Redirige a la página correspondiente
        } else {
            alert("No se encontraron resultados. Prueba con: Notebooks, Consolas, etc.");
        }
    });
});

